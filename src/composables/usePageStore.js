import { computed, readonly, ref } from 'vue'
import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { profile } from '../data/portfolio'

const CACHE_KEY = 'abhay-portfolio-managed-pages-v1'
const pagesDocument = doc(db, 'portfolio', 'pages')
const systemPages = [
  { id: 'system-about', slug: 'about', system: true, title: 'About', navLabel: 'About', intro: '', visible: true, showInNav: false, blocks: [], translations: { sv: {} } },
  { id: 'system-resume', slug: 'resume', system: true, title: 'Resume', navLabel: 'Resume', intro: '', visible: true, showInNav: false, blocks: [], translations: { sv: {} } },
  { id: 'system-projects', slug: 'projects', system: true, title: 'Projects', navLabel: 'Projects', intro: '', visible: true, showInNav: false, blocks: [], translations: { sv: {} } },
  { id: 'system-experience', slug: 'experience', system: true, title: 'Experience', navLabel: 'Experience', intro: '', visible: true, showInNav: false, blocks: [], translations: { sv: {} } },
  { id: 'system-appendix', slug: 'appendix', system: true, title: 'Appendix', navLabel: 'Appendix', intro: '', visible: true, showInNav: false, blocks: [], translations: { sv: {} } },
  { id: 'system-contact', slug: 'contact', system: true, title: 'Contact', navLabel: 'Contact', intro: '', visible: true, showInNav: false, blocks: [], translations: { sv: {} } },
]
const pages = ref(systemPages)
const cloudStatus = ref('loading')
let initialised = false

const clean = (value, max = 5000) => String(value ?? '').trim().slice(0, max)
const cleanSlug = (value) => clean(value, 80).toLowerCase().replace(/[^a-z0-9åäö-]+/g, '-').replace(/^-+|-+$/g, '')
const cleanHref = (value) => { const href = clean(value, 1000); return (/^https:\/\//i.test(href) || /^\/(?!\/)/.test(href)) ? href : '' }
const sanitiseBlock = (block) => ({
  id: clean(block.id, 100) || crypto.randomUUID(),
  type: ['text', 'callout', 'quote', 'list'].includes(block.type) ? block.type : 'text',
  eyebrow: clean(block.eyebrow, 120), title: clean(block.title, 240), body: clean(block.body, 8000),
  linkLabel: clean(block.linkLabel, 120), linkHref: cleanHref(block.linkHref), visible: block.visible !== false,
  translations: { sv: { eyebrow: clean(block.translations?.sv?.eyebrow, 120), title: clean(block.translations?.sv?.title, 240), body: clean(block.translations?.sv?.body, 8000), linkLabel: clean(block.translations?.sv?.linkLabel, 120) } },
})
const sanitisePage = (page) => ({
  id: clean(page.id, 100) || crypto.randomUUID(), slug: cleanSlug(page.slug), system: Boolean(page.system),
  title: clean(page.title, 180), navLabel: clean(page.navLabel, 80), intro: clean(page.intro, 1000),
  visible: page.system ? true : page.visible !== false, showInNav: page.system ? false : page.showInNav !== false,
  blocks: Array.isArray(page.blocks) ? page.blocks.map(sanitiseBlock).slice(0, 40) : [],
  translations: { sv: { title: clean(page.translations?.sv?.title, 180), navLabel: clean(page.translations?.sv?.navLabel, 80), intro: clean(page.translations?.sv?.intro, 1000) } },
})
const withSystemPages = (items) => {
  const safe = Array.isArray(items) ? items.map(sanitisePage).filter((page) => page.slug && page.title).slice(0, 30) : []
  const systemSlugs = new Set(systemPages.map((page) => page.slug))
  const managedSystemPages = systemPages.map((seed) => {
    const stored = safe.find((page) => page.system && page.slug === seed.slug)
    return stored ? sanitisePage({ ...stored, id: seed.id, slug: seed.slug, system: true }) : sanitisePage(seed)
  })
  const customPages = safe.filter((page) => !page.system && !systemSlugs.has(page.slug))
  return [...managedSystemPages, ...customPages]
}
const apply = (items) => {
  pages.value = withSystemPages(items)
  if (typeof localStorage !== 'undefined') localStorage.setItem(CACHE_KEY, JSON.stringify(pages.value))
}
const initialise = () => {
  if (initialised || typeof localStorage === 'undefined') return
  initialised = true
  try { const cached = JSON.parse(localStorage.getItem(CACHE_KEY)); if (cached) apply(cached) } catch { localStorage.removeItem(CACHE_KEY) }
  onSnapshot(pagesDocument, (snapshot) => {
    if (snapshot.exists()) apply(snapshot.data().pages)
    cloudStatus.value = 'connected'
  }, () => { cloudStatus.value = 'offline' })
}
const assertAdmin = () => {
  const user = auth.currentUser
  if (!user?.emailVerified || user.email?.toLowerCase() !== profile.email.toLowerCase()) throw new Error('A verified administrator session is required to edit pages.')
}
const publish = async (next) => {
  assertAdmin()
  const safe = withSystemPages(next)
  try { await setDoc(pagesDocument, { pages: safe, updatedAt: serverTimestamp() }) }
  catch (error) { if (error.code === 'permission-denied') throw new Error('Firestore rejected the page update. Deploy the current firestore.rules first.'); throw error }
  apply(safe)
}

export const usePageStore = () => {
  initialise()
  const publicPages = computed(() => pages.value.filter((page) => !page.system && page.visible))
  const navigationPages = computed(() => publicPages.value.filter((page) => page.showInNav))
  const pageBySlug = (slug) => pages.value.find((page) => page.slug === slug)
  const addPage = (page) => publish([...pages.value, { ...page, id: crypto.randomUUID(), system: false, blocks: [] }])
  const updatePage = (id, page) => publish(pages.value.map((current) => current.id === id ? { ...current, ...page, id, system: current.system } : current))
  const removePage = (id) => publish(pages.value.filter((page) => page.id !== id || page.system))
  const movePage = (id, direction) => {
    const customPages = pages.value.filter((page) => !page.system)
    const customIndex = customPages.findIndex((page) => page.id === id)
    const customTarget = customIndex + direction
    if (customIndex < 0 || customTarget < 0 || customTarget >= customPages.length) return Promise.resolve()
    const currentIndex = pages.value.findIndex((page) => page.id === customPages[customIndex].id)
    const targetIndex = pages.value.findIndex((page) => page.id === customPages[customTarget].id)
    const next = [...pages.value]; [next[currentIndex], next[targetIndex]] = [next[targetIndex], next[currentIndex]]
    return publish(next)
  }
  const addBlock = (pageId, block) => publish(pages.value.map((page) => page.id === pageId ? { ...page, blocks: [...page.blocks, { ...block, id: crypto.randomUUID() }] } : page))
  const updateBlock = (pageId, blockId, block) => publish(pages.value.map((page) => page.id === pageId ? { ...page, blocks: page.blocks.map((current) => current.id === blockId ? { ...current, ...block, id: blockId } : current) } : page))
  const removeBlock = (pageId, blockId) => publish(pages.value.map((page) => page.id === pageId ? { ...page, blocks: page.blocks.filter((block) => block.id !== blockId) } : page))
  const moveBlock = (pageId, blockId, direction) => {
    const next = pages.value.map((page) => {
      if (page.id !== pageId) return page
      const blocks = [...page.blocks]; const index = blocks.findIndex((block) => block.id === blockId); const target = index + direction
      if (index >= 0 && target >= 0 && target < blocks.length) [blocks[index], blocks[target]] = [blocks[target], blocks[index]]
      return { ...page, blocks }
    })
    return publish(next)
  }
  const replacePages = (items) => {
    if (!Array.isArray(items)) throw new Error('CMS pages backup is not an array.')
    return publish(items)
  }
  return { pages: readonly(pages), publicPages, navigationPages, cloudStatus: readonly(cloudStatus), pageBySlug, addPage, updatePage, removePage, movePage, addBlock, updateBlock, removeBlock, moveBlock, replacePages }
}
