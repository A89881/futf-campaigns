<template>
  <section class="content-admin" aria-labelledby="site-copy-title">
    <div class="admin-titlebar">
      <div>
        <p class="eyebrow"><span></span>Editable public copy</p>
        <h2 id="site-copy-title">Site text editor</h2>
        <p>Edit English and Swedish independently. The repository text remains the recovery fallback; saved overrides update the live site without a rebuild.</p>
      </div>
      <div class="form-buttons cms-backup-actions"><button class="admin-action" type="button" @click="exportCms"><Download :size="15" /> Export CMS backup</button><label class="admin-action file-action"><Upload :size="15" /> Import CMS backup<input type="file" accept="application/json" @change="importCms" /></label></div>
    </div>

    <div class="content-search-row">
      <label>Find text<input v-model="copySearch" type="search" placeholder="Search headings, paragraphs, projects…" /></label>
      <span>{{ filteredCopy.length }} segments</span>
    </div>
    <p v-if="notice" class="admin-notice" role="status">{{ notice }}</p>

    <form v-if="copyEditing" class="experience-form compact-admin-form" @submit.prevent="saveCopy">
      <div class="form-heading"><h3>Edit text segment</h3><button type="button" aria-label="Close text editor" @click="copyEditing = false"><X :size="20" /></button></div>
      <p class="copy-source-key"><strong>Stable source key</strong>{{ copyForm.key }}</p>
      <div class="form-grid">
        <label class="full">English<textarea v-model="copyForm.en" rows="5" maxlength="8000" required></textarea></label>
        <label class="full">Swedish<textarea v-model="copyForm.sv" rows="5" maxlength="8000"></textarea></label>
      </div>
      <div class="form-buttons"><button class="button primary" type="submit">Publish wording</button><button class="admin-action" type="button" @click="resetCopy">Use repository fallback</button></div>
    </form>

    <div class="copy-admin-list">
      <button v-for="entry in filteredCopy" :key="entry.key" type="button" class="copy-admin-entry" :class="{ overridden: entry.overridden }" @click="editCopy(entry)">
        <span>{{ entry.overridden ? 'Live override' : 'Repository text' }}</span>
        <strong>{{ entry.en }}</strong>
        <small>{{ entry.sv || 'No Swedish wording yet' }}</small>
      </button>
    </div>
  </section>

  <section class="page-builder-admin" aria-labelledby="page-builder-title">
    <div class="admin-titlebar">
      <div>
        <p class="eyebrow"><span></span>Pages, sections, and blocks</p>
        <h2 id="page-builder-title">Page builder</h2>
        <p>Add blocks to existing pages or create a new routed page. Blocks are plain text by design, which keeps editing safe and predictable.</p>
      </div>
      <button class="button primary" type="button" @click="newPage"><Plus :size="15" /> Add page</button>
    </div>

    <form v-if="pageEditing" class="experience-form" @submit.prevent="savePage">
      <div class="form-heading"><h3>{{ pageEditingId ? 'Edit page settings' : 'Create page' }}</h3><button type="button" aria-label="Close page editor" @click="cancelPage"><X :size="20" /></button></div>
      <div class="form-grid">
        <label>URL slug<input v-model="pageForm.slug" maxlength="80" :disabled="pageForm.system" required placeholder="awards-and-press" /></label>
        <label>Navigation label<input v-model="pageForm.navLabel" maxlength="80" required /></label>
        <label class="full">Page title<input v-model="pageForm.title" maxlength="180" required /></label>
        <label class="full">Introduction<textarea v-model="pageForm.intro" rows="3" maxlength="1000"></textarea></label>
        <label v-if="!pageForm.system" class="ongoing-field"><input v-model="pageForm.visible" type="checkbox" /> Page is public</label>
        <label v-if="!pageForm.system" class="ongoing-field"><input v-model="pageForm.showInNav" type="checkbox" /> Show in navigation</label>
        <div class="full translation-heading"><span>Swedish wording</span><p>These fields are independent and fall back to English when blank.</p></div>
        <label>Swedish navigation label<input v-model="pageForm.svNavLabel" maxlength="80" /></label>
        <label>Swedish page title<input v-model="pageForm.svTitle" maxlength="180" /></label>
        <label class="full">Swedish introduction<textarea v-model="pageForm.svIntro" rows="3" maxlength="1000"></textarea></label>
      </div>
      <div class="form-buttons"><button class="button primary" type="submit">Save page</button><button class="admin-action" type="button" @click="cancelPage">Cancel</button></div>
    </form>

    <div class="page-builder-layout">
      <aside class="page-admin-list">
        <button v-for="page in pages" :key="page.id" type="button" :class="{ active: selectedPageId === page.id }" @click="selectedPageId = page.id">
          <span>{{ page.system ? 'Built-in page' : (page.visible ? 'Public page' : 'Hidden page') }}</span>
          <strong>{{ page.title }}</strong><small>/{{ page.system ? page.slug : `pages/${page.slug}` }}</small>
        </button>
      </aside>

      <div v-if="selectedPage" class="block-admin-panel">
        <header class="block-admin-header">
          <div><p class="kind">{{ selectedPage.system ? 'Existing page extension' : 'Custom page' }}</p><h3>{{ selectedPage.title }}</h3><p>{{ selectedPage.blocks.length }} blocks · rendered in this order</p></div>
          <div class="entry-actions">
            <button v-if="!selectedPage.system" type="button" :disabled="selectedCustomPageIndex === 0" aria-label="Move page up" @click="reorderPage(-1)"><ArrowUp :size="16" /></button>
            <button v-if="!selectedPage.system" type="button" :disabled="selectedCustomPageIndex === customPages.length - 1" aria-label="Move page down" @click="reorderPage(1)"><ArrowDown :size="16" /></button>
            <button v-if="!selectedPage.system" type="button" aria-label="Edit page" @click="editPage(selectedPage)"><Pencil :size="16" /></button>
            <button v-if="!selectedPage.system" type="button" :aria-label="selectedPage.visible ? 'Hide page' : 'Show page'" @click="togglePage(selectedPage)"><component :is="selectedPage.visible ? Eye : EyeOff" :size="16" /></button>
            <button v-if="!selectedPage.system" class="delete" type="button" aria-label="Delete page" @click="deletePage(selectedPage)"><Trash2 :size="16" /></button>
          </div>
        </header>

        <button class="admin-action add-block-button" type="button" @click="newBlock"><Plus :size="15" /> Add content block</button>
        <form v-if="blockEditing" class="experience-form compact-admin-form" @submit.prevent="saveBlock">
          <div class="form-heading"><h3>{{ blockEditingId ? 'Edit block' : 'Add block' }}</h3><button type="button" aria-label="Close block editor" @click="cancelBlock"><X :size="20" /></button></div>
          <div class="form-grid">
            <label>Block style<select v-model="blockForm.type"><option value="text">Text section</option><option value="callout">Callout</option><option value="quote">Quote</option><option value="list">List</option></select></label>
            <label class="ongoing-field"><input v-model="blockForm.visible" type="checkbox" /> Visible</label>
            <label>Eyebrow <span>Optional</span><input v-model="blockForm.eyebrow" maxlength="120" /></label>
            <label>Heading<input v-model="blockForm.title" maxlength="240" required /></label>
            <label class="full">Body <span>Blank lines create paragraphs; list blocks use one item per line</span><textarea v-model="blockForm.body" rows="7" maxlength="8000"></textarea></label>
            <label>Link label <span>Optional</span><input v-model="blockForm.linkLabel" maxlength="120" /></label>
            <label>Link URL <span>Optional, HTTPS or /route</span><input v-model="blockForm.linkHref" maxlength="1000" /></label>
            <div class="full translation-heading"><span>Swedish wording</span><p>Independent wording for this block.</p></div>
            <label>Swedish eyebrow<input v-model="blockForm.svEyebrow" maxlength="120" /></label>
            <label>Swedish heading<input v-model="blockForm.svTitle" maxlength="240" /></label>
            <label class="full">Swedish body<textarea v-model="blockForm.svBody" rows="7" maxlength="8000"></textarea></label>
            <label class="full">Swedish link label<input v-model="blockForm.svLinkLabel" maxlength="120" /></label>
          </div>
          <div class="form-buttons"><button class="button primary" type="submit">Save block</button><button class="admin-action" type="button" @click="cancelBlock">Cancel</button></div>
        </form>

        <div class="admin-entry-list block-entry-list">
          <article v-for="(block, index) in selectedPage.blocks" :key="block.id" class="admin-entry" :class="{ 'is-hidden': !block.visible }">
            <div><span class="kind">{{ block.type }} · {{ block.visible ? 'visible' : 'hidden' }}</span><h2>{{ block.title }}</h2><p>{{ block.body }}</p></div>
            <div class="entry-actions">
              <button type="button" :disabled="index === 0" aria-label="Move block up" @click="reorderBlock(block.id, -1)"><ArrowUp :size="16" /></button>
              <button type="button" :disabled="index === selectedPage.blocks.length - 1" aria-label="Move block down" @click="reorderBlock(block.id, 1)"><ArrowDown :size="16" /></button>
              <button type="button" :aria-label="block.visible ? 'Hide block' : 'Show block'" @click="toggleBlock(block)"><component :is="block.visible ? Eye : EyeOff" :size="16" /></button>
              <button type="button" aria-label="Edit block" @click="editBlock(block)"><Pencil :size="16" /></button>
              <button class="delete" type="button" aria-label="Delete block" @click="deleteBlock(block)"><Trash2 :size="16" /></button>
            </div>
          </article>
          <p v-if="!selectedPage.blocks.length" class="empty-admin-state">No blocks yet. Add one to extend this page.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { ArrowDown, ArrowUp, Download, Eye, EyeOff, Pencil, Plus, Trash2, Upload, X } from 'lucide-vue-next'
import { useContentStore } from '../composables/useContentStore'
import { fixedCopyCatalogue } from '../composables/useLocale'
import { usePageStore } from '../composables/usePageStore'
import { aboutStoryCatalogue } from '../data/aboutStory'
import { education, principles, profile, projects, skills } from '../data/portfolio'

const { entries: overrides, saveEntry, removeEntry, replaceEntries, exportEntries } = useContentStore()
const { pages, addPage, updatePage, removePage, movePage, moveBlock, addBlock, updateBlock, removeBlock, replacePages } = usePageStore()
const notice = ref('')
const copySearch = ref('')
const copyEditing = ref(false)
const dataCopyCatalogue = [
  profile.eyebrow, profile.intro, profile.location, ...profile.roles, ...profile.summary,
  ...projects.flatMap((project) => [project.title, project.period, project.type, project.description, project.cta, ...project.tags]),
  ...education.flatMap((item) => [item.degree, item.focus, item.school, item.location, item.period]),
  ...skills.flatMap((group) => [group.category, ...group.items]),
  ...principles.flatMap((principle) => [principle.title, principle.text]),
].filter(Boolean).map((value) => ({ key: value, en: value, sv: '' }))
const copyDefaults = new Map([...dataCopyCatalogue, ...fixedCopyCatalogue, ...aboutStoryCatalogue].map((entry) => [entry.key, entry]))
const copyCatalogue = computed(() => {
  const merged = new Map(copyDefaults)
  for (const override of overrides.value) if (!merged.has(override.key)) merged.set(override.key, { key: override.key, en: override.key, sv: '' })
  const live = new Map(overrides.value.map((entry) => [entry.key, entry]))
  return [...merged.values()].map((entry) => ({ ...entry, en: live.get(entry.key)?.en || entry.en, sv: live.get(entry.key)?.sv || entry.sv, overridden: live.has(entry.key) })).sort((a, b) => a.en.localeCompare(b.en))
})
const filteredCopy = computed(() => {
  const query = copySearch.value.trim().toLowerCase()
  return (query ? copyCatalogue.value.filter((entry) => `${entry.en} ${entry.sv}`.toLowerCase().includes(query)) : copyCatalogue.value).slice(0, 120)
})
const copyForm = reactive({ key: '', en: '', sv: '' })
const editCopy = (entry) => { Object.assign(copyForm, { key: entry.key, en: entry.en, sv: entry.sv }); copyEditing.value = true }
const saveCopy = async () => { try { await saveEntry(copyForm.key, copyForm.en, copyForm.sv); notice.value = 'Site wording published.'; copyEditing.value = false } catch (error) { notice.value = error.message || 'Could not publish the wording.' } }
const resetCopy = async () => { try { await removeEntry(copyForm.key); notice.value = 'Repository wording restored for this segment.'; copyEditing.value = false } catch (error) { notice.value = error.message } }

const selectedPageId = ref('system-about')
const selectedPage = computed(() => pages.value.find((page) => page.id === selectedPageId.value) || pages.value[0])
const customPages = computed(() => pages.value.filter((page) => !page.system))
const selectedCustomPageIndex = computed(() => customPages.value.findIndex((page) => page.id === selectedPageId.value))
watch(pages, () => { if (!pages.value.some((page) => page.id === selectedPageId.value)) selectedPageId.value = pages.value[0]?.id || '' })
const pageEditing = ref(false)
const pageEditingId = ref(null)
const pageBlank = () => ({ slug: '', system: false, title: '', navLabel: '', intro: '', visible: true, showInNav: true, svTitle: '', svNavLabel: '', svIntro: '' })
const pageForm = reactive(pageBlank())
const hydratePage = (page = pageBlank()) => Object.assign(pageForm, pageBlank(), page, { svTitle: page.translations?.sv?.title || '', svNavLabel: page.translations?.sv?.navLabel || '', svIntro: page.translations?.sv?.intro || '' })
const newPage = () => { pageEditingId.value = null; hydratePage(); pageEditing.value = true }
const editPage = (page) => { pageEditingId.value = page.id; hydratePage(page); pageEditing.value = true }
const cancelPage = () => { pageEditing.value = false; pageEditingId.value = null; hydratePage() }
const savePage = async () => {
  const { svTitle, svNavLabel, svIntro, ...content } = pageForm
  const duplicate = pages.value.some((page) => page.slug === content.slug && page.id !== pageEditingId.value)
  if (!content.system && duplicate) { notice.value = 'That page URL is already in use.'; return }
  const value = { ...content, translations: { sv: { title: svTitle, navLabel: svNavLabel, intro: svIntro } } }
  try { if (pageEditingId.value) await updatePage(pageEditingId.value, value); else await addPage(value); notice.value = 'Page settings published.'; cancelPage() } catch (error) { notice.value = error.message || 'Could not publish the page.' }
}
const togglePage = async (page) => { try { await updatePage(page.id, { visible: !page.visible }); notice.value = `Page ${page.visible ? 'hidden' : 'published'}.` } catch (error) { notice.value = error.message } }
const reorderPage = async (direction) => { try { await movePage(selectedPage.value.id, direction); notice.value = 'Page navigation order updated.' } catch (error) { notice.value = error.message } }
const deletePage = async (page) => { if (window.confirm(`Delete “${page.title}” and all of its blocks?`)) { try { await removePage(page.id); notice.value = 'Page deleted.' } catch (error) { notice.value = error.message } } }

const blockEditing = ref(false)
const blockEditingId = ref(null)
const blockBlank = () => ({ type: 'text', eyebrow: '', title: '', body: '', linkLabel: '', linkHref: '', visible: true, svEyebrow: '', svTitle: '', svBody: '', svLinkLabel: '' })
const blockForm = reactive(blockBlank())
const hydrateBlock = (block = blockBlank()) => Object.assign(blockForm, blockBlank(), block, { svEyebrow: block.translations?.sv?.eyebrow || '', svTitle: block.translations?.sv?.title || '', svBody: block.translations?.sv?.body || '', svLinkLabel: block.translations?.sv?.linkLabel || '' })
const newBlock = () => { blockEditingId.value = null; hydrateBlock(); blockEditing.value = true }
const editBlock = (block) => { blockEditingId.value = block.id; hydrateBlock(block); blockEditing.value = true }
const cancelBlock = () => { blockEditing.value = false; blockEditingId.value = null; hydrateBlock() }
const saveBlock = async () => {
  const { svEyebrow, svTitle, svBody, svLinkLabel, ...content } = blockForm
  const value = { ...content, translations: { sv: { eyebrow: svEyebrow, title: svTitle, body: svBody, linkLabel: svLinkLabel } } }
  try { if (blockEditingId.value) await updateBlock(selectedPage.value.id, blockEditingId.value, value); else await addBlock(selectedPage.value.id, value); notice.value = 'Content block published.'; cancelBlock() } catch (error) { notice.value = error.message || 'Could not publish the block.' }
}
const reorderBlock = async (id, direction) => { try { await moveBlock(selectedPage.value.id, id, direction); notice.value = 'Block order updated.' } catch (error) { notice.value = error.message } }
const toggleBlock = async (block) => { try { await updateBlock(selectedPage.value.id, block.id, { visible: !block.visible }); notice.value = `Block ${block.visible ? 'hidden' : 'published'}.` } catch (error) { notice.value = error.message } }
const deleteBlock = async (block) => { if (window.confirm(`Delete “${block.title}”?`)) { try { await removeBlock(selectedPage.value.id, block.id); notice.value = 'Block deleted.' } catch (error) { notice.value = error.message } } }

const exportCms = () => {
  const payload = { exportedAt: new Date().toISOString(), content: exportEntries(), pages: pages.value }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const href = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = href; anchor.download = `abhay-portfolio-cms-${new Date().toISOString().slice(0, 10)}.json`; anchor.click(); URL.revokeObjectURL(href)
}
const importCms = async (event) => {
  const file = event.target.files?.[0]
  if (!file) return
  try {
    const payload = JSON.parse(await file.text())
    if (!Array.isArray(payload.content) || !Array.isArray(payload.pages)) throw new Error('This is not a complete CMS backup.')
    if (!window.confirm('Replace live site-copy overrides and page-builder data with this backup?')) return
    await replaceEntries(payload.content)
    await replacePages(payload.pages)
    notice.value = 'CMS backup imported and published.'
  } catch (error) { notice.value = error.message || 'Could not import that CMS backup.' }
  finally { event.target.value = '' }
}
</script>
