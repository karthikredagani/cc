import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0A5zKlfuWeqagxZO6-DS4T-hG5H-bdg4",
  authDomain: "urban-comfort-77503.firebaseapp.com",
  projectId: "urban-comfort-77503",
  storageBucket: "urban-comfort-77503.appspot.com",
  messagingSenderId: "977511005601",
  appId: "1:977511005601:web:8f25d275355d5ac4ffdfe0",
  measurementId: "G-F35MQDDV17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth
const googleProvider = new GoogleAuthProvider(); // Google provider for Google login
const db = getFirestore(app); // Firestore database

export { auth, googleProvider, db };