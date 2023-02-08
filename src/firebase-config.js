// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCc-8RM8RF4FQ5WOmLUHR8nQSxXRI6MiDI',
  authDomain: 'todolist-9ee71.firebaseapp.com',
  projectId: 'todolist-9ee71',
  storageBucket: 'todolist-9ee71.appspot.com',
  messagingSenderId: '700599851838',
  appId: '1:700599851838:web:b4d0098268a07577956a6f'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// firebase/auth
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
// firebase/firestore
export const db = getFirestore(app)
