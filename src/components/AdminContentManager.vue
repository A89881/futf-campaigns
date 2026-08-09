<template>
  <section class="content-admin" aria-labelledby="site-copy-title">
    <div class="admin-titlebar">
      <div>
        <p class="eyebrow"><span></span>Editable public copy</p>
        <h2 id="site-copy-title">Site text editor</h2>
        <p>Edit English and Swedish independently. Repository text remains the recovery fallback; saved overrides update the live site without a rebuild.</p>
      </div>
      <div class="form-buttons cms-backup-actions">
        <button class="admin-action" type="button" @click="exportText"><Download :size="15" /> Export text backup</button>
        <label class="admin-action file-action"><Upload :size="15" /> Import text backup<input type="file" accept="application/json" @change="importText" /></label>
      </div>
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
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { Download, Upload, X } from 'lucide-vue-next'
import { useContentStore } from '../composables/useContentStore'
import { fixedCopyCatalogue, swedish } from '../composables/useLocale'
import { aboutStoryCatalogue } from '../data/aboutStory'
import { education, principles, profile, projects, skills } from '../data/portfolio'

const { entries: overrides, saveEntry, removeEntry, replaceEntries, exportEntries } = useContentStore()
const notice = ref('')
const copySearch = ref('')
const copyEditing = ref(false)

const semanticCopyCatalogue = [
  { key: 'profile.location', en: profile.location, sv: swedish[profile.location] || '' },
  { key: 'resume.photoCaption', en: 'Uppsala, Sweden · Credit: @arvid_westberg_', sv: 'Uppsala, Sverige · Foto: @arvid_westberg_' },
  ...education.map((item, index) => ({ key: `education.${index}.location`, en: item.location, sv: swedish[item.location] || '' })),
]
const dataCopyCatalogue = [
  profile.eyebrow, profile.intro, ...profile.roles, ...profile.summary,
  ...projects.flatMap((project) => [project.title, project.period, project.type, project.description, project.cta, ...project.tags]),
  ...education.flatMap((item) => [item.degree, item.focus, item.school, item.period]),
  ...skills.flatMap((group) => [group.category, ...group.items]),
  ...principles.flatMap((principle) => [principle.title, principle.text]),
].filter(Boolean).map((value) => ({ key: value, en: value, sv: '' }))
const fixedCopyWithoutSharedLocation = fixedCopyCatalogue.filter((entry) => entry.key !== profile.location)
const copyDefaults = new Map([...dataCopyCatalogue, ...fixedCopyWithoutSharedLocation, ...aboutStoryCatalogue, ...semanticCopyCatalogue].map((entry) => [entry.key, entry]))
const copyCatalogue = computed(() => {
  const merged = new Map(copyDefaults)
  for (const override of overrides.value) if (!merged.has(override.key)) merged.set(override.key, { key: override.key, en: override.key, sv: '' })
  const live = new Map(overrides.value.map((entry) => [entry.key, entry]))
  return [...merged.values()].map((entry) => ({ ...entry, en: live.get(entry.key)?.en || entry.en, sv: live.get(entry.key)?.sv || entry.sv, overridden: live.has(entry.key) })).sort((a, b) => a.en.localeCompare(b.en))
})
const filteredCopy = computed(() => {
  const query = copySearch.value.trim().toLowerCase()
  return (query ? copyCatalogue.value.filter((entry) => `${entry.key} ${entry.en} ${entry.sv}`.toLowerCase().includes(query)) : copyCatalogue.value).slice(0, 120)
})
const copyForm = reactive({ key: '', en: '', sv: '' })
const editCopy = (entry) => { Object.assign(copyForm, { key: entry.key, en: entry.en, sv: entry.sv }); copyEditing.value = true }
const saveCopy = async () => { try { await saveEntry(copyForm.key, copyForm.en, copyForm.sv); notice.value = 'Site wording published.'; copyEditing.value = false } catch (error) { notice.value = error.message || 'Could not publish the wording.' } }
const resetCopy = async () => { try { await removeEntry(copyForm.key); notice.value = 'Repository wording restored for this segment.'; copyEditing.value = false } catch (error) { notice.value = error.message } }

const exportText = () => {
  const payload = { exportedAt: new Date().toISOString(), content: exportEntries() }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const href = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = href
  anchor.download = `abhay-portfolio-text-${new Date().toISOString().slice(0, 10)}.json`
  anchor.click()
  URL.revokeObjectURL(href)
}
const importText = async (event) => {
  const file = event.target.files?.[0]
  if (!file) return
  try {
    const payload = JSON.parse(await file.text())
    const entries = Array.isArray(payload) ? payload : payload.content
    if (!Array.isArray(entries)) throw new Error('This is not a site-text backup.')
    if (!window.confirm('Replace all live site-text overrides with this backup?')) return
    await replaceEntries(entries)
    notice.value = 'Site-text backup imported and published.'
  } catch (error) { notice.value = error.message || 'Could not import that text backup.' }
  finally { event.target.value = '' }
}
</script>
