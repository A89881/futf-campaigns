import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Import the functions you need from the SDKs you need

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBPoxu_SUHB5QdkaYBbclU-uS7Soe9z0o",
  authDomain: "futf-campaign-forms.firebaseapp.com",
  databaseURL: "https://futf-campaign-forms-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "futf-campaign-forms",
  storageBucket: "futf-campaign-forms.firebasestorage.app",
  messagingSenderId: "1025517324869",
  appId: "1:1025517324869:web:cc7b22bde8017bcb38f12c",
  measurementId: "G-TZXCC2B7HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics };
