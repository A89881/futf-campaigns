<template>
  <div class="admin-page">
    <header class="admin-header shell">
      <router-link class="wordmark" to="/"><span>AM</span><i></i></router-link>
      <router-link class="admin-back" to="/">
        <ArrowLeft :size="16" /> Back to portfolio
      </router-link>
    </header>

    <main class="admin-shell shell">
      <section v-if="!authenticated" class="admin-auth" aria-labelledby="admin-title">
        <p class="eyebrow"><span></span>Local portfolio administration</p>
        <h1 id="admin-title">Administrator sign-in.</h1>
        <p>Sign in with the verified administrator email and password. Authentication persists only for this browser
          session.</p>
        <form @submit.prevent="submitAuth">
          <label for="admin-email">Administrator email</label>
          <input id="admin-email" v-model="email" type="email" autocomplete="username" required />
          <label for="passphrase">Password</label>
          <div class="password-field">
            <input id="passphrase" v-model="passphrase" :type="showPassword ? 'text' : 'password'"
              autocomplete="current-password" required />
            <button type="button" :aria-label="showPassword ? 'Hide passphrase' : 'Show passphrase'"
              @click="showPassword = !showPassword">
              <component :is="showPassword ? EyeOff : Eye" :size="18" />
            </button>
          </div>
          <p v-if="authError" class="form-error" role="alert">{{ authError }}</p>
          <div class="auth-actions"><button class="button primary" type="submit" :disabled="busy">{{ busy ? 'Checking…'
            : 'Sign in securely' }}</button><button class="button text-link" type="button"
              @click="resetPassword">Reset password</button></div>
        </form>
        <aside class="security-note">
          <ShieldCheck :size="18" />
          <p><strong>Server-enforced access</strong>Firebase Authentication establishes identity; Firestore rules
            separately require your exact verified email for every write. Frontend visibility alone never grants
            publishing access.</p>
        </aside>
      </section>

      <section v-else aria-labelledby="editor-title">
        <div class="admin-titlebar">
          <div>
            <p class="eyebrow"><span></span>Authenticated content system</p>
            <h1 id="editor-title">Experience editor</h1>
            <p>Changes publish to Firestore and update the public timeline. JSON export remains available for repository
              backups.</p>
          </div>
          <button class="button text-link" type="button" @click="logout">Lock session
            <LogOut :size="16" />
          </button>
        </div>

        <div class="admin-actions">
          <button class="button primary" type="button" @click="newEntry">
            <Plus :size="16" /> Add experience
          </button>
          <button class="admin-action" type="button" @click="exportJson">
            <Download :size="16" /> Export JSON
          </button>
          <label class="admin-action file-action">
            <Upload :size="16" /> Import JSON<input type="file" accept="application/json" @change="importJson" />
          </label>
          <button class="admin-action danger" type="button" @click="resetEntries">
            <RotateCcw :size="16" /> Restore source data
          </button>
        </div>
        <p v-if="notice" class="admin-notice" role="status">{{ notice }}</p>

        <form v-if="editing" class="experience-form" @submit.prevent="saveEntry">
          <div class="form-heading">
            <h2>{{ editingId ? 'Edit experience' : 'Add experience' }}</h2><button type="button"
              aria-label="Close editor" @click="cancelEdit">
              <X :size="20" />
            </button>
          </div>
          <div class="form-grid">
            <label>Category<select v-model="form.category">
                <option value="employment">Employment</option>
                <option value="research">Research</option>
                <option value="community">Community</option>
              </select></label>
            <label>Title<input v-model="form.title" maxlength="180" required /></label>
            <label>Organisation<input v-model="form.organisation" maxlength="180" required /></label>
            <label>Location<input v-model="form.location" maxlength="120" /></label>
            <label>Related link URL <span>Optional</span><input v-model="form.linkHref" type="text" maxlength="1000"
                placeholder="https://example.com/article" /></label>
            <label>Link label <span>Optional</span><input v-model="form.linkLabel" maxlength="120"
                placeholder="Read more" /></label>
            <label>Start month and year <span>Required</span><input v-model="form.startMonth" type="month"
                required /></label>
            <label>Start day <span>Optional</span><input v-model.number="form.startDay" type="number" min="1" max="31"
                placeholder="Day" /></label>
            <label>End month and year <span>Required unless ongoing</span><input v-model="form.endMonth" type="month"
                :required="!form.ongoing" :disabled="form.ongoing" /></label>
            <label>End day <span>Optional</span><input v-model.number="form.endDay" type="number" min="1" max="31"
                placeholder="Day" :disabled="form.ongoing" /></label>
            <label class="ongoing-field"><input v-model="form.ongoing" type="checkbox" /> This role is ongoing</label>
            <label class="full">Description<textarea v-model="form.description" rows="5" maxlength="4000"
                required></textarea></label>
            <label class="full">Highlights <span>One per line</span><textarea v-model="form.highlightsText" rows="6"
                maxlength="10000"></textarea></label>
            <div class="full translation-heading"><span>Swedish wording</span>
              <p>Independently editable. Seed entries use their repository Swedish copy when a field is blank; English
                is stored separately and is never overwritten.</p>
            </div>
            <label class="full">Swedish title<input v-model="form.svTitle" maxlength="180" /></label>
            <label class="full">Swedish link label<input v-model="form.svLinkLabel" maxlength="120"
                placeholder="Läs mer" /></label>
            <label class="full">Swedish description<textarea v-model="form.svDescription" rows="5"
                maxlength="4000"></textarea></label>
            <label class="full">Swedish highlights <span>One per line</span><textarea v-model="form.svHighlightsText"
                rows="6" maxlength="10000"></textarea></label>
          </div>
          <div class="form-buttons"><button class="button primary" type="submit">Save experience</button><button
              class="admin-action" type="button" @click="cancelEdit">Cancel</button></div>
        </form>

        <div class="admin-entry-list">
          <article v-for="(item, index) in experiences" :key="item.id" class="admin-entry">
            <div><span class="kind">{{ item.category }}</span>
              <h2>{{ item.title }}</h2>
              <p>{{ item.organisation }} · {{ item.start }} - {{ item.end }}</p>
            </div>
            <div class="entry-actions">
              <button type="button" :disabled="index === 0" aria-label="Move up" @click="moveEntry(item.id, -1)">
                <ArrowUp :size="16" />
              </button>
              <button type="button" :disabled="index === experiences.length - 1" aria-label="Move down"
                @click="moveEntry(item.id, 1)">
                <ArrowDown :size="16" />
              </button>
              <button type="button" aria-label="Edit" @click="editEntry(item)">
                <Pencil :size="16" />
              </button>
              <button class="delete" type="button" aria-label="Delete" @click="deleteEntry(item)">
                <Trash2 :size="16" />
              </button>
            </div>
          </article>
        </div>

        <section class="project-admin" aria-labelledby="project-curation-title">
          <div class="admin-titlebar">
            <div>
              <p class="eyebrow"><span></span>Portfolio significance</p>
              <h2 id="project-curation-title">Project curation</h2>
              <p>All known public GitHub projects stay available here. Choose which ones appear publicly and move the
                most important work toward the top.</p>
            </div>
            <div class="project-admin-summary"><strong>{{ visibleProjectCount }}</strong><span>of {{
                adminProjects.length }} shown</span><button class="admin-action" type="button" @click="restoreProjects">
                <RotateCcw :size="15" /> Restore defaults
              </button></div>
          </div>
          <div class="admin-entry-list">
            <article v-for="(project, index) in adminProjects" :key="project.id" class="admin-entry project-admin-entry"
              :class="{ 'is-hidden': !project.visible }">
              <div><span class="kind">{{ project.visible ? 'Shown publicly' : 'Hidden' }} · {{ project.type }}</span>
                <h2>{{ project.title }}</h2>
                <p>{{ formatDisplayDate(project.period) }} · {{ project.tags.join(' · ') }}</p>
              </div>
              <div class="entry-actions">
                <a :href="project.github || project.href" target="_blank" rel="noopener noreferrer"
                  aria-label="Open project source">
                  <Github :size="16" />
                </a>
                <button type="button" :aria-label="project.visible ? `Hide ${project.title}` : `Show ${project.title}`"
                  @click="changeProjectVisibility(project)">
                  <component :is="project.visible ? Eye : EyeOff" :size="16" />
                </button>
                <button type="button" :disabled="index === 0" :aria-label="`Move ${project.title} up`"
                  @click="reorderProject(project.id, -1)">
                  <ArrowUp :size="16" />
                </button>
                <button type="button" :disabled="index === adminProjects.length - 1"
                  :aria-label="`Move ${project.title} down`" @click="reorderProject(project.id, 1)">
                  <ArrowDown :size="16" />
                </button>
              </div>
            </article>
          </div>
        </section>

        <section class="appendix-admin" aria-labelledby="appendix-editor-title">
          <div class="admin-titlebar">
            <div>
              <p class="eyebrow"><span></span>Supporting evidence</p>
              <h2 id="appendix-editor-title">Appendix editor</h2>
              <p>PDFs are deployed safely through Git. First place the file in <code>public/documents/</code>, then
                enter its public path below.</p>
            </div><button class="button primary" type="button" @click="newAppendixDocument">
              <Plus :size="16" /> Add document
            </button>
          </div>
          <form v-if="appendixEditing" class="experience-form" @submit.prevent="saveAppendixDocument">
            <div class="form-heading">
              <h2>{{ appendixEditingId ? 'Edit document' : 'Add document' }}</h2><button type="button"
                aria-label="Close document editor" @click="cancelAppendixEdit">
                <X :size="20" />
              </button>
            </div>
            <div class="form-grid"><label>Title<input v-model="appendixForm.title" required
                  maxlength="180" /></label><label>Type<input v-model="appendixForm.type" required maxlength="80"
                  placeholder="Certification" /></label><label>Date<input v-model="appendixForm.date" required
                  maxlength="80" placeholder="Apr 2025" /></label><label class="full">Public PDF path <span>Commit the
                  file first, for example /documents/certificate.pdf</span><input v-model="appendixForm.href"
                  type="text" maxlength="1000" :required="appendixForm.available"
                  placeholder="/documents/certificate.pdf" /></label>
              <div class="full git-document-note"><strong>Git-backed files</strong>
                <p>This editor publishes only the document description and path. Copy the PDF into
                  <code>public/documents/</code>, commit it with the site, and keep the path root-relative.</p>
              </div><label class="ongoing-field"><input v-model="appendixForm.available" type="checkbox" /> Publicly
                available</label><label class="full">Description<textarea v-model="appendixForm.description" rows="4"
                  maxlength="2000" required></textarea></label>
              <div class="full translation-heading"><span>Swedish wording</span>
                <p>Optional and independently editable; blank fields use the English text.</p>
              </div><label>Swedish title<input v-model="appendixForm.svTitle" maxlength="180" /></label><label>Swedish
                type<input v-model="appendixForm.svType" maxlength="80" /></label><label>Swedish date<input
                  v-model="appendixForm.svDate" maxlength="80" /></label><label class="full">Swedish
                description<textarea v-model="appendixForm.svDescription" rows="4" maxlength="2000"></textarea></label>
            </div>
            <div class="form-buttons"><button class="button primary" type="submit">Save document</button><button
                class="admin-action" type="button" @click="cancelAppendixEdit">Cancel</button></div>
          </form>
          <div class="admin-entry-list">
            <article v-for="(document, index) in appendixDocumentsAdmin" :key="document.id" class="admin-entry">
              <div><span class="kind">{{ document.type }}</span>
                <h2>{{ document.title }}</h2>
                <p>{{ document.available ? 'Public with preview' : 'Private placeholder' }} · {{ formatDisplayDate(document.date) }}</p>
              </div>
              <div class="entry-actions"><button type="button" :disabled="index === 0" aria-label="Move document up" @click="reorderAppendixDocument(document.id, -1)"><ArrowUp :size="16" /></button><button type="button" :disabled="index === appendixDocumentsAdmin.length - 1" aria-label="Move document down" @click="reorderAppendixDocument(document.id, 1)"><ArrowDown :size="16" /></button><button type="button" aria-label="Edit document"
                  @click="editAppendixDocument(document)">
                  <Pencil :size="16" />
                </button><button class="delete" type="button" aria-label="Delete document"
                  @click="deleteAppendixDocument(document)">
                  <Trash2 :size="16" />
                </button></div>
            </article>
          </div>
        </section>
        <AdminContentManager />
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import { ArrowDown, ArrowLeft, ArrowUp, Download, Eye, EyeOff, Github, LogOut, Pencil, Plus, RotateCcw, ShieldCheck, Trash2, Upload, X } from 'lucide-vue-next'
import { useExperienceStore } from '../composables/useExperienceStore'
import { useAppendixStore } from '../composables/useAppendixStore'
import { useProjectStore } from '../composables/useProjectStore'
import AdminContentManager from '../components/AdminContentManager.vue'
import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, authReady } from '../firebase'
import { profile } from '../data/portfolio'
import { formatDisplayDate } from '../utils/date'

const { experiences, add, update, remove, move, importEntries, reset, seedCloudIfEmpty } = useExperienceStore()
const { documents: appendixDocumentsAdmin, addDocument, updateDocument, removeDocument, moveDocument: moveAppendixDocument } = useAppendixStore()
const { allProjects: adminProjects, toggle: toggleProject, move: moveProject, reset: resetProjects, seedCloudIfEmpty: seedProjectsIfEmpty } = useProjectStore()
const visibleProjectCount = computed(() => adminProjects.value.filter((project) => project.visible).length)
const authenticated = ref(false)
const email = ref(profile.email)
const passphrase = ref('')
const showPassword = ref(false)
const busy = ref(false)
const authError = ref('')
const editing = ref(false)
const editingId = ref(null)
const notice = ref('')
const blank = () => ({ category: 'employment', title: '', organisation: '', location: 'Uppsala, Sweden', linkHref: '', linkLabel: '', startMonth: '', startDay: '', endMonth: '', endDay: '', ongoing: true, description: '', highlightsText: '', svTitle: '', svLinkLabel: '', svDescription: '', svHighlightsText: '' })
const form = reactive(blank())
const appendixBlank = () => ({ title: '', type: 'Certification', date: '', description: '', href: '', available: true, svTitle: '', svType: '', svDate: '', svDescription: '' })
const appendixForm = reactive(appendixBlank()); const appendixEditing = ref(false); const appendixEditingId = ref(null)

let unsubscribeAuth
onMounted(() => {
  unsubscribeAuth = onAuthStateChanged(auth, (user) => {
    authenticated.value = Boolean(user?.emailVerified && user.email?.toLowerCase() === profile.email.toLowerCase())
  })
})
onUnmounted(() => unsubscribeAuth?.())

const submitAuth = async () => {
  busy.value = true
  authError.value = ''
  try {
    await authReady
    const credential = await signInWithEmailAndPassword(auth, email.value.trim(), passphrase.value)
    if (credential.user.email?.toLowerCase() !== profile.email.toLowerCase() || !credential.user.emailVerified) {
      await signOut(auth)
      throw new Error('This account is not the verified portfolio administrator.')
    }
    authenticated.value = true
    await Promise.all([seedCloudIfEmpty(), seedProjectsIfEmpty()])
  } catch (error) {
    authError.value = error.code === 'auth/invalid-credential' ? 'Unable to sign in with those credentials.' : (error.message || 'Unable to authenticate.')
  } finally {
    busy.value = false
    passphrase.value = ''
  }
}

const resetPassword = async () => {
  authError.value = ''
  try { await sendPasswordResetEmail(auth, email.value.trim()); authError.value = 'If the administrator account exists, a reset email has been sent.' }
  catch { authError.value = 'Password reset is unavailable. Check the email and Firebase Authentication configuration.' }
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const monthAliases = [
  ['jan'], ['feb'], ['mar'], ['apr'], ['may', 'maj'], ['jun'],
  ['jul'], ['aug'], ['sep'], ['oct', 'okt'], ['nov'], ['dec'],
]
const parseMonth = (date, label) => {
  if (/^\d{4}-\d{2}/.test(date || '')) return date.slice(0, 7)
  const match = String(label || '').match(/([A-Za-z]+)\s+(\d{4})/)
  const monthText = match?.[1].toLowerCase().replaceAll('.', '') || ''
  const month = match ? monthAliases.findIndex((aliases) => aliases.some((name) => monthText.startsWith(name))) + 1 : 0
  return month ? `${match[2]}-${String(month).padStart(2, '0')}` : ''
}
const parseDay = (date) => /^\d{4}-\d{2}-\d{2}$/.test(date || '') ? Number(date.slice(8, 10)) : ''
const makeDate = (month, day) => month ? `${month}${day ? `-${String(day).padStart(2, '0')}` : ''}` : ''
const isValidDay = (month, day) => {
  if (!day) return true
  const [year, monthNumber] = month.split('-').map(Number)
  return day >= 1 && day <= new Date(Date.UTC(year, monthNumber, 0)).getUTCDate()
}
const monthLabel = (month) => month ? `${monthNames[Number(month.slice(5, 7)) - 1]} ${month.slice(0, 4)}` : ''
const assignForm = (entry = blank()) => Object.assign(form, blank(), entry, {
  startMonth: entry.startMonth || parseMonth(entry.startDate, entry.start), startDay: entry.startDay || parseDay(entry.startDate),
  endMonth: entry.endMonth || parseMonth(entry.endDate, entry.end), endDay: entry.endDay || parseDay(entry.endDate),
  ongoing: entry.ongoing ?? String(entry.end || '').toLowerCase() === 'present', highlightsText: (entry.highlights || []).join('\n'),
  svTitle: entry.translations?.sv?.title || '', svLinkLabel: entry.translations?.sv?.linkLabel || '', svDescription: entry.translations?.sv?.description || '', svHighlightsText: (entry.translations?.sv?.highlights || []).join('\n')
})
const newEntry = () => { editingId.value = null; assignForm(); editing.value = true; window.scrollTo({ top: 240, behavior: 'smooth' }) }
const editEntry = (entry) => { editingId.value = entry.id; assignForm(entry); editing.value = true; window.scrollTo({ top: 240, behavior: 'smooth' }) }
const cancelEdit = () => { editing.value = false; editingId.value = null; assignForm() }
const saveEntry = async () => {
  const { startMonth, startDay, endMonth, endDay, ongoing, highlightsText, svTitle, svLinkLabel, svDescription, svHighlightsText, ...content } = form
  if (!isValidDay(startMonth, startDay) || (!ongoing && !isValidDay(endMonth, endDay))) { notice.value = 'Choose a valid day for the selected month and year.'; return }
  const entry = { ...content, start: monthLabel(startMonth), end: ongoing ? 'Present' : monthLabel(endMonth), startDate: makeDate(startMonth, startDay), endDate: ongoing ? '' : makeDate(endMonth, endDay), highlights: highlightsText.split('\n').map((item) => item.trim()).filter(Boolean), translations: { sv: { title: svTitle, linkLabel: svLinkLabel, description: svDescription, highlights: svHighlightsText.split('\n').map((item) => item.trim()).filter(Boolean) } } }
  try { if (editingId.value) await update(editingId.value, entry); else await add(entry); notice.value = 'Experience published securely.'; cancelEdit() }
  catch (error) { notice.value = error.message || 'Publishing failed.' }
}
const deleteEntry = async (entry) => {
  if (window.confirm(`Delete “${entry.title}”?`)) { try { await remove(entry.id); notice.value = 'Experience removed.' } catch (error) { notice.value = error.message } }
}
const moveEntry = async (id, direction) => { try { await move(id, direction) } catch (error) { notice.value = error.message || 'Could not reorder the timeline.' } }
const exportJson = () => {
  const blob = new Blob([JSON.stringify(experiences.value, null, 2)], { type: 'application/json' })
  const href = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = href
  anchor.download = `abhay-portfolio-experiences-${new Date().toISOString().slice(0, 10)}.json`
  anchor.click()
  URL.revokeObjectURL(href)
  notice.value = 'Experience data exported.'
}
const importJson = async (event) => {
  const file = event.target.files?.[0]
  if (!file) return
  try { await importEntries(JSON.parse(await file.text())); notice.value = 'Experience data imported and published.' }
  catch (error) { notice.value = error.message || 'Could not import that file.' }
  event.target.value = ''
}
const resetEntries = async () => {
  if (window.confirm('Restore all experience entries to the CV and LinkedIn source data?')) { try { await reset(); notice.value = 'Source experience data restored.' } catch (error) { notice.value = error.message } }
}
const changeProjectVisibility = async (project) => { try { await toggleProject(project.id); notice.value = `${project.title} is now ${project.visible ? 'hidden' : 'shown publicly'}.` } catch (error) { notice.value = error.message || 'Could not update project visibility.' } }
const reorderProject = async (id, direction) => { try { await moveProject(id, direction); notice.value = 'Project significance order updated.' } catch (error) { notice.value = error.message || 'Could not reorder projects.' } }
const restoreProjects = async () => { if (window.confirm('Restore the default project visibility and significance order?')) { try { await resetProjects(); notice.value = 'Default project curation restored.' } catch (error) { notice.value = error.message || 'Could not restore projects.' } } }
const logout = async () => { await signOut(auth); authenticated.value = false; editing.value = false }
const hydrateAppendixForm = (document = appendixBlank()) => Object.assign(appendixForm, appendixBlank(), document, { svTitle: document.translations?.sv?.title || '', svType: document.translations?.sv?.type || '', svDate: document.translations?.sv?.date || '', svDescription: document.translations?.sv?.description || '' })
const newAppendixDocument = () => { appendixEditingId.value = null; hydrateAppendixForm(); appendixEditing.value = true }
const editAppendixDocument = (document) => { appendixEditingId.value = document.id; hydrateAppendixForm(document); appendixEditing.value = true }
const cancelAppendixEdit = () => { appendixEditing.value = false; appendixEditingId.value = null; hydrateAppendixForm() }
const saveAppendixDocument = async () => { try { const { svTitle, svType, svDate, svDescription, ...content } = appendixForm; const document = { ...content, translations: { sv: { title: svTitle, type: svType, date: svDate, description: svDescription } } }; if (appendixEditingId.value) await updateDocument(appendixEditingId.value, document); else await addDocument(document); notice.value = 'Appendix metadata and file path published.'; cancelAppendixEdit() } catch (error) { notice.value = error.message || 'Could not publish the document.' } }
const deleteAppendixDocument = async (document) => { if (window.confirm(`Delete “${document.title}”?`)) { try { await removeDocument(document.id); notice.value = 'Appendix document removed.' } catch (error) { notice.value = error.message } } }
const reorderAppendixDocument = async (id, direction) => { try { await moveAppendixDocument(id, direction); notice.value = 'Appendix order updated.' } catch (error) { notice.value = error.message || 'Could not reorder appendix documents.' } }
</script>
