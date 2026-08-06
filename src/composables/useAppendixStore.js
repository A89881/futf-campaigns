import { readonly, ref } from 'vue'
import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { appendixDocuments, profile } from '../data/portfolio'
const documentRef = doc(db, 'portfolio', 'appendix')
const documents = ref(appendixDocuments.map((item, index) => ({ id: item.id || `document-${index}`, ...item })))
let initialised = false
const clean = (value, max = 1000) => String(value ?? '').trim().slice(0, max)
const cleanHref = (value) => { const href = clean(value, 1000); return (/^\/(?!\/)/.test(href) || /^https:\/\//i.test(href)) ? href : null }
const sanitise = (item) => { const href = cleanHref(item.href); return { id: clean(item.id, 100) || crypto.randomUUID(), title: clean(item.title, 180), type: clean(item.type, 80), date: clean(item.date, 80), description: clean(item.description, 2000), href, available: Boolean(item.available && href), translations: { sv: { title: clean(item.translations?.sv?.title, 180), type: clean(item.translations?.sv?.type, 80), date: clean(item.translations?.sv?.date, 80), description: clean(item.translations?.sv?.description, 2000) } } } }
const apply = (items) => { if (Array.isArray(items) && items.length) documents.value = items.map(sanitise).filter((item) => item.title).slice(0, 50) }
const initialise = () => { if (initialised) return; initialised = true; onSnapshot(documentRef, (snapshot) => { if (snapshot.exists()) apply(snapshot.data().documents) }, () => {}) }
const publish = async (items) => { const user = auth.currentUser; if (!user?.emailVerified || user.email?.toLowerCase() !== profile.email.toLowerCase()) throw new Error('A verified administrator session is required.'); const safe = items.map(sanitise).filter((item) => item.title).slice(0, 50); try { await setDoc(documentRef, { documents: safe, updatedAt: serverTimestamp() }); apply(safe) } catch (error) { if (error.code === 'permission-denied') throw new Error('Firestore rejected the appendix update. Deploy the current firestore.rules first.'); throw error } }
export const useAppendixStore = () => { initialise(); return { documents: readonly(documents), addDocument: (item) => publish([...documents.value, { ...item, id: crypto.randomUUID() }]), updateDocument: (id, item) => publish(documents.value.map((current) => current.id === id ? { ...item, id } : current)), removeDocument: (id) => publish(documents.value.filter((item) => item.id !== id)) } }
