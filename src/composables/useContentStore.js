import { computed, readonly, ref } from 'vue'
import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { profile } from '../data/portfolio'

const CACHE_KEY = 'abhay-portfolio-content-overrides-v1'
const contentDocument = doc(db, 'portfolio', 'content')
const entries = ref([])
const cloudStatus = ref('loading')
let initialised = false

const clean = (value, max = 8000) => String(value ?? '').trim().slice(0, max)
const sanitise = (entry) => ({
  key: clean(entry.key, 500),
  en: clean(entry.en, 8000),
  sv: clean(entry.sv, 8000),
})
const apply = (items) => {
  if (!Array.isArray(items)) return
  const safe = items.map(sanitise).filter((entry) => entry.key && (entry.en || entry.sv)).slice(0, 600)
  const oldLocationOverride = safe.find((entry) => entry.key === 'Uppsala, Sweden')
  const looksLikePhotoCredit = /\bcred(?:it)?\b|\bfoto\b|@/i.test(`${oldLocationOverride?.en || ''} ${oldLocationOverride?.sv || ''}`)
  if (oldLocationOverride && looksLikePhotoCredit && !safe.some((entry) => entry.key === 'resume.photoCaption')) {
    safe.push({ ...oldLocationOverride, key: 'resume.photoCaption' })
    safe.splice(safe.indexOf(oldLocationOverride), 1)
  }
  entries.value = safe
  if (typeof localStorage !== 'undefined') localStorage.setItem(CACHE_KEY, JSON.stringify(entries.value))
}
const initialise = () => {
  if (initialised || typeof localStorage === 'undefined') return
  initialised = true
  try { apply(JSON.parse(localStorage.getItem(CACHE_KEY))) } catch { localStorage.removeItem(CACHE_KEY) }
  onSnapshot(contentDocument, (snapshot) => {
    if (snapshot.exists()) apply(snapshot.data().entries)
    cloudStatus.value = 'connected'
  }, () => { cloudStatus.value = 'offline' })
}
const assertAdmin = () => {
  const user = auth.currentUser
  if (!user?.emailVerified || user.email?.toLowerCase() !== profile.email.toLowerCase()) throw new Error('A verified administrator session is required to edit site copy.')
}
const publish = async (next) => {
  assertAdmin()
  const safe = next.map(sanitise).filter((entry) => entry.key && (entry.en || entry.sv)).slice(0, 600)
  try { await setDoc(contentDocument, { entries: safe, updatedAt: serverTimestamp() }) }
  catch (error) { if (error.code === 'permission-denied') throw new Error('Firestore rejected the site-copy update. Deploy the current firestore.rules first.'); throw error }
  apply(safe)
}

export const useContentStore = () => {
  initialise()
  const contentMap = computed(() => Object.fromEntries(entries.value.map((entry) => [entry.key, entry])))
  const saveEntry = (key, en, sv) => {
    const next = entries.value.filter((entry) => entry.key !== key)
    if (clean(en) || clean(sv)) next.push({ key, en, sv })
    return publish(next)
  }
  const removeEntry = (key) => publish(entries.value.filter((entry) => entry.key !== key))
  const replaceEntries = (items) => {
    if (!Array.isArray(items)) throw new Error('CMS content backup is not an array.')
    return publish(items)
  }
  const exportEntries = () => entries.value.map((entry) => ({ ...entry }))
  return { entries: readonly(entries), contentMap, cloudStatus: readonly(cloudStatus), saveEntry, removeEntry, replaceEntries, exportEntries }
}
