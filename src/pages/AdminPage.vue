<template>
  <div class="admin-page">
    <header class="admin-header shell">
      <router-link class="wordmark" to="/"><span>AM</span><i></i></router-link>
      <router-link class="admin-back" to="/"><ArrowLeft :size="16" /> Back to portfolio</router-link>
    </header>

    <main class="admin-shell shell">
      <section v-if="!authenticated" class="admin-auth" aria-labelledby="admin-title">
        <p class="eyebrow"><span></span>Local portfolio administration</p>
        <h1 id="admin-title">Administrator sign-in.</h1>
        <p>Sign in with the verified Firebase account assigned to this portfolio. Authentication persists only for this browser session.</p>
        <button class="google-auth" type="button" :disabled="busy" @click="googleLogin"><ShieldCheck :size="17" /> Continue with Google</button>
        <div class="auth-divider"><span>or use password</span></div>
        <form @submit.prevent="submitAuth">
          <label for="admin-email">Administrator email</label>
          <input id="admin-email" v-model="email" type="email" autocomplete="username" required />
          <label for="passphrase">Password</label>
          <div class="password-field">
            <input id="passphrase" v-model="passphrase" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" required />
            <button type="button" :aria-label="showPassword ? 'Hide passphrase' : 'Show passphrase'" @click="showPassword = !showPassword">
              <component :is="showPassword ? EyeOff : Eye" :size="18" />
            </button>
          </div>
          <p v-if="authError" class="form-error" role="alert">{{ authError }}</p>
          <div class="auth-actions"><button class="button primary" type="submit" :disabled="busy">{{ busy ? 'Checking…' : 'Sign in securely' }}</button><button class="button text-link" type="button" @click="resetPassword">Reset password</button></div>
        </form>
        <aside class="security-note"><ShieldCheck :size="18" /><p><strong>Server-enforced access</strong>Firebase Authentication establishes identity; Firestore rules separately require your exact verified email for every write. Frontend visibility alone never grants publishing access.</p></aside>
      </section>

      <section v-else aria-labelledby="editor-title">
        <div class="admin-titlebar">
          <div><p class="eyebrow"><span></span>Authenticated content system</p><h1 id="editor-title">Experience editor</h1><p>Changes publish to Firestore and update the public timeline. JSON export remains available for repository backups.</p></div>
          <button class="button text-link" type="button" @click="logout">Lock session <LogOut :size="16" /></button>
        </div>

        <div class="admin-actions">
          <button class="button primary" type="button" @click="newEntry"><Plus :size="16" /> Add experience</button>
          <button class="admin-action" type="button" @click="exportJson"><Download :size="16" /> Export JSON</button>
          <label class="admin-action file-action"><Upload :size="16" /> Import JSON<input type="file" accept="application/json" @change="importJson" /></label>
          <button class="admin-action danger" type="button" @click="resetEntries"><RotateCcw :size="16" /> Restore source data</button>
        </div>
        <p v-if="notice" class="admin-notice" role="status">{{ notice }}</p>

        <form v-if="editing" class="experience-form" @submit.prevent="saveEntry">
          <div class="form-heading"><h2>{{ editingId ? 'Edit experience' : 'Add experience' }}</h2><button type="button" aria-label="Close editor" @click="cancelEdit"><X :size="20" /></button></div>
          <div class="form-grid">
            <label>Category<select v-model="form.category"><option value="professional">Professional</option><option value="research">Research</option><option value="community">Community</option></select></label>
            <label>Title<input v-model="form.title" maxlength="180" required /></label>
            <label>Organisation<input v-model="form.organisation" maxlength="180" required /></label>
            <label>Location<input v-model="form.location" maxlength="120" /></label>
            <label>Start<input v-model="form.start" maxlength="60" placeholder="September 2025" required /></label>
            <label>End<input v-model="form.end" maxlength="60" placeholder="Present" required /></label>
            <label>Exact start date <span>Optional; overrides the month label</span><input v-model="form.startDate" type="date" /></label>
            <label>Exact end date <span>Optional; leave blank when ongoing</span><input v-model="form.endDate" type="date" /></label>
            <label class="full">Description<textarea v-model="form.description" rows="5" maxlength="4000" required></textarea></label>
            <label class="full">Highlights <span>One per line</span><textarea v-model="form.highlightsText" rows="6" maxlength="10000"></textarea></label>
          </div>
          <div class="form-buttons"><button class="button primary" type="submit">Save experience</button><button class="admin-action" type="button" @click="cancelEdit">Cancel</button></div>
        </form>

        <div class="admin-entry-list">
          <article v-for="(item, index) in experiences" :key="item.id" class="admin-entry">
            <div><span class="kind">{{ item.category }}</span><h2>{{ item.title }}</h2><p>{{ item.organisation }} · {{ item.start }} - {{ item.end }}</p></div>
            <div class="entry-actions">
              <button type="button" :disabled="index === 0" aria-label="Move up" @click="moveEntry(item.id, -1)"><ArrowUp :size="16" /></button>
              <button type="button" :disabled="index === experiences.length - 1" aria-label="Move down" @click="moveEntry(item.id, 1)"><ArrowDown :size="16" /></button>
              <button type="button" aria-label="Edit" @click="editEntry(item)"><Pencil :size="16" /></button>
              <button class="delete" type="button" aria-label="Delete" @click="deleteEntry(item)"><Trash2 :size="16" /></button>
            </div>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { ArrowDown, ArrowLeft, ArrowUp, Download, Eye, EyeOff, LogOut, Pencil, Plus, RotateCcw, ShieldCheck, Trash2, Upload, X } from 'lucide-vue-next'
import { useExperienceStore } from '../composables/useExperienceStore'
import { GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { profile } from '../data/portfolio'

const { experiences, add, update, remove, move, importEntries, reset, seedCloudIfEmpty } = useExperienceStore()
const authenticated = ref(false)
const email = ref(profile.email)
const passphrase = ref('')
const showPassword = ref(false)
const busy = ref(false)
const authError = ref('')
const editing = ref(false)
const editingId = ref(null)
const notice = ref('')
const blank = () => ({ category: 'professional', title: '', organisation: '', location: 'Uppsala, Sweden', start: '', end: 'Present', startDate: '', endDate: '', description: '', highlightsText: '' })
const form = reactive(blank())

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
    const credential = await signInWithEmailAndPassword(auth, email.value.trim(), passphrase.value)
    if (credential.user.email?.toLowerCase() !== profile.email.toLowerCase() || !credential.user.emailVerified) {
      await signOut(auth)
      throw new Error('This account is not the verified portfolio administrator.')
    }
    authenticated.value = true
    await seedCloudIfEmpty()
  } catch (error) {
    authError.value = error.code === 'auth/invalid-credential' ? 'Unable to sign in with those credentials.' : (error.message || 'Unable to authenticate.')
  } finally {
    busy.value = false
    passphrase.value = ''
  }
}

const acceptCredential = async (user) => {
  if (user.email?.toLowerCase() !== profile.email.toLowerCase() || !user.emailVerified) {
    await signOut(auth)
    throw new Error('This account is not the verified portfolio administrator.')
  }
  authenticated.value = true
  await seedCloudIfEmpty()
}

const googleLogin = async () => {
  busy.value = true; authError.value = ''
  try {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ login_hint: profile.email, prompt: 'select_account' })
    const credential = await signInWithPopup(auth, provider)
    await acceptCredential(credential.user)
  } catch (error) {
    const messages = {
      'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
      'auth/popup-blocked': 'The browser blocked the Google sign-in window. Allow pop-ups for this site and try again.',
      'auth/unauthorized-domain': `Google sign-in is not authorised for ${window.location.hostname}. Add this hostname under Firebase Authentication > Settings > Authorised domains.`,
      'auth/operation-not-allowed': 'Google sign-in is disabled in Firebase. Enable the Google provider under Authentication > Sign-in method.'
    }
    authError.value = messages[error.code] || error.message || 'Google sign-in failed.'
  }
  finally { busy.value = false }
}

const resetPassword = async () => {
  authError.value = ''
  try { await sendPasswordResetEmail(auth, email.value.trim()); authError.value = 'If the administrator account exists, a reset email has been sent.' }
  catch { authError.value = 'Password reset is unavailable. Check the email and Firebase Authentication configuration.' }
}

const assignForm = (entry = blank()) => Object.assign(form, entry, { highlightsText: (entry.highlights || []).join('\n') })
const newEntry = () => { editingId.value = null; assignForm(); editing.value = true; window.scrollTo({ top: 240, behavior: 'smooth' }) }
const editEntry = (entry) => { editingId.value = entry.id; assignForm(entry); editing.value = true; window.scrollTo({ top: 240, behavior: 'smooth' }) }
const cancelEdit = () => { editing.value = false; editingId.value = null; assignForm() }
const saveEntry = async () => {
  const entry = { ...form, highlights: form.highlightsText.split('\n').map((item) => item.trim()).filter(Boolean) }
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
const logout = async () => { await signOut(auth); authenticated.value = false; editing.value = false }
</script>
