import { computed, readonly, ref } from 'vue'
import { doc, getDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { profile, projects as projectCatalogue } from '../data/portfolio'

const CACHE_KEY = 'abhay-portfolio-project-settings-v1'
const projectDocument = doc(db, 'portfolio', 'projects')
const sourceId = (project) => {
  const url = project.github || project.href || project.title
  return String(url).replace(/\/$/, '').split('/').pop().toLowerCase().replace(/[^a-z0-9-]+/g, '-')
}
const sourceProjects = projectCatalogue.map((project) => ({ ...project, id: sourceId(project), visible: project.visible !== false }))
const projects = ref(sourceProjects.map((project) => ({ ...project, tags: [...project.tags] })))
const cloudStatus = ref('loading')
let initialised = false

const defaultSettings = () => ({
  order: sourceProjects.map((project) => project.id),
  hidden: sourceProjects.filter((project) => !project.visible).map((project) => project.id),
})

const cleanSettings = (settings = {}) => {
  const known = new Set(sourceProjects.map((project) => project.id))
  const order = Array.isArray(settings.order) ? [...new Set(settings.order.filter((id) => typeof id === 'string' && known.has(id)))] : []
  const hidden = Array.isArray(settings.hidden) ? [...new Set(settings.hidden.filter((id) => typeof id === 'string' && known.has(id)))] : defaultSettings().hidden
  for (const project of sourceProjects) if (!order.includes(project.id)) order.push(project.id)
  return { order: order.slice(0, 50), hidden: hidden.slice(0, 50) }
}

const applySettings = (settings) => {
  const clean = cleanSettings(settings)
  const source = new Map(sourceProjects.map((project) => [project.id, project]))
  const hidden = new Set(clean.hidden)
  projects.value = clean.order.map((id) => ({ ...source.get(id), tags: [...source.get(id).tags], visible: !hidden.has(id) }))
  if (typeof localStorage !== 'undefined') localStorage.setItem(CACHE_KEY, JSON.stringify(clean))
}

const initialise = () => {
  if (initialised || typeof localStorage === 'undefined') return
  initialised = true
  try { applySettings(JSON.parse(localStorage.getItem(CACHE_KEY))) } catch { localStorage.removeItem(CACHE_KEY) }
  onSnapshot(projectDocument, (snapshot) => {
    if (snapshot.exists()) applySettings(snapshot.data())
    cloudStatus.value = 'connected'
  }, () => { cloudStatus.value = 'offline' })
}

const assertAdmin = () => {
  const user = auth.currentUser
  if (!user?.emailVerified || user.email?.toLowerCase() !== profile.email.toLowerCase()) throw new Error('A verified administrator session is required to curate projects.')
}

const publish = async (next) => {
  assertAdmin()
  const settings = cleanSettings({ order: next.map((project) => project.id), hidden: next.filter((project) => !project.visible).map((project) => project.id) })
  try { await setDoc(projectDocument, { ...settings, updatedAt: serverTimestamp() }) }
  catch (error) { if (error.code === 'permission-denied') throw new Error('Firestore rejected the project update. Deploy the current firestore.rules first.'); throw error }
  applySettings(settings)
}

export const useProjectStore = () => {
  initialise()
  const visibleProjects = computed(() => projects.value.filter((project) => project.visible).map((project, index) => ({ ...project, index: String(index + 1).padStart(2, '0') })))
  const toggle = (id) => publish(projects.value.map((project) => project.id === id ? { ...project, visible: !project.visible } : project))
  const move = (id, direction) => {
    const index = projects.value.findIndex((project) => project.id === id)
    const target = index + direction
    if (index < 0 || target < 0 || target >= projects.value.length) return Promise.resolve()
    const next = [...projects.value]
    ;[next[index], next[target]] = [next[target], next[index]]
    return publish(next)
  }
  const reset = () => publish(sourceProjects)
  const seedCloudIfEmpty = async () => {
    assertAdmin()
    const snapshot = await getDoc(projectDocument)
    if (!snapshot.exists()) await publish(sourceProjects)
  }
  return { allProjects: readonly(projects), visibleProjects, cloudStatus: readonly(cloudStatus), toggle, move, reset, seedCloudIfEmpty }
}
