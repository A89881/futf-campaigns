import { initializeApp } from 'firebase/app'
import { browserSessionPersistence, getAuth, setPersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBBPoxu_SUHB5QdkaYBbclU-uS7Soe9z0o',
  authDomain: 'futf-campaign-forms.firebaseapp.com',
  databaseURL: 'https://futf-campaign-forms-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'futf-campaign-forms',
  storageBucket: 'futf-campaign-forms.firebasestorage.app',
  messagingSenderId: '1025517324869',
  appId: '1:1025517324869:web:cc7b22bde8017bcb38f12c',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
setPersistence(auth, browserSessionPersistence).catch(() => {})
