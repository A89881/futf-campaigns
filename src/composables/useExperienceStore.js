import { readonly, ref } from 'vue'
import { doc, getDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { defaultExperiences, profile } from '../data/portfolio'

const STORAGE_KEY = 'abhay-portfolio-experiences-cache-v2'
const experienceDocument = doc(db, 'portfolio', 'experience')
const experiences = ref(defaultExperiences.map((item) => ({ ...item, highlights: [...item.highlights] })))
const cloudStatus = ref('loading')
let initialised = false
let unsubscribe = null

const cleanText = (value, max = 4000) => String(value ?? '').trim().slice(0, max)
const sanitiseEntry = (entry) => ({
  id: cleanText(entry.id, 100) || crypto.randomUUID(),
  category: ['professional', 'research', 'community'].includes(entry.category) ? entry.category : 'professional',
  title: cleanText(entry.title, 180), organisation: cleanText(entry.organisation, 180),
  location: cleanText(entry.location, 120), start: cleanText(entry.start, 60), end: cleanText(entry.end, 60),
  startDate: /^\d{4}-\d{2}-\d{2}$/.test(entry.startDate || '') ? entry.startDate : '',
  endDate: /^\d{4}-\d{2}-\d{2}$/.test(entry.endDate || '') ? entry.endDate : '',
  description: cleanText(entry.description),
  highlights: Array.isArray(entry.highlights) ? entry.highlights.map((item) => cleanText(item, 500)).filter(Boolean).slice(0, 20) : [],
})

const applyEntries = (entries) => {
  if (!Array.isArray(entries)) return false
  const cleaned = entries.map(sanitiseEntry).filter((item) => item.title && item.organisation).slice(0, 50)
  if (!cleaned.length) return false
  experiences.value = cleaned
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned))
  return true
}

const initialise = () => {
  if (initialised || typeof localStorage === 'undefined') return
  initialised = true
  try { applyEntries(JSON.parse(localStorage.getItem(STORAGE_KEY))) } catch { localStorage.removeItem(STORAGE_KEY) }
  unsubscribe = onSnapshot(experienceDocument, (snapshot) => {
    if (snapshot.exists()) applyEntries(snapshot.data().entries)
    cloudStatus.value = 'connected'
  }, () => { cloudStatus.value = 'offline' })
}

const assertAdmin = () => {
  const user = auth.currentUser
  if (!user || !user.emailVerified || user.email?.toLowerCase() !== profile.email.toLowerCase()) {
    throw new Error('A verified administrator session is required to publish changes.')
  }
}

const explainFirestoreError = (error) => {
  if (error?.code === 'permission-denied') {
    return new Error(`Firestore rejected this write for ${auth.currentUser?.email || 'the current account'}. Deploy the repository's firestore.rules to project futf-campaign-forms and confirm this verified email is the configured administrator.`)
  }
  return error
}

const publish = async (next) => {
  assertAdmin()
  const cleaned = next.map(sanitiseEntry).filter((item) => item.title && item.organisation).slice(0, 50)
  try {
    await setDoc(experienceDocument, { entries: cleaned, updatedAt: serverTimestamp() })
  } catch (error) {
    throw explainFirestoreError(error)
  }
  applyEntries(cleaned)
}

export const useExperienceStore = () => {
  initialise()
  const add = (entry) => publish([{ ...entry, id: crypto.randomUUID() }, ...experiences.value])
  const update = (id, entry) => publish(experiences.value.map((item) => item.id === id ? { ...entry, id } : item))
  const remove = (id) => publish(experiences.value.filter((item) => item.id !== id))
  const move = (id, direction) => {
    const index = experiences.value.findIndex((item) => item.id === id)
    const target = index + direction
    if (index < 0 || target < 0 || target >= experiences.value.length) return Promise.resolve()
    const next = [...experiences.value]
    ;[next[index], next[target]] = [next[target], next[index]]
    return publish(next)
  }
  const importEntries = (entries) => {
    if (!Array.isArray(entries)) throw new Error('The imported file must contain an array of experience entries.')
    return publish(entries)
  }
  const reset = () => publish(defaultExperiences)
  const seedCloudIfEmpty = async () => {
    assertAdmin()
    try {
      const snapshot = await getDoc(experienceDocument)
      if (!snapshot.exists()) await publish(defaultExperiences)
    } catch (error) {
      throw explainFirestoreError(error)
    }
  }
  return { experiences: readonly(experiences), cloudStatus: readonly(cloudStatus), add, update, remove, move, importEntries, reset, seedCloudIfEmpty }
}

export const stopExperienceSync = () => { unsubscribe?.(); unsubscribe = null; initialised = false }
