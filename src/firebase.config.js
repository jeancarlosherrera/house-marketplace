import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMU0QW3P3lyvJTCI5yluwK5d1I3O6wVIc',
  authDomain: 'house-marketplace-app-abb49.firebaseapp.com',
  projectId: 'house-marketplace-app-abb49',
  storageBucket: 'house-marketplace-app-abb49.appspot.com',
  messagingSenderId: '1089813208282',
  appId: '1:1089813208282:web:e7cb19469f74bc0ca3d9e3',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
