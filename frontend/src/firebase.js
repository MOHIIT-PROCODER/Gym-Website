// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gym-56040.firebaseapp.com",
  projectId: "gym-56040",
  storageBucket: "gym-56040.firebasestorage.app",
  messagingSenderId: "851605873362",
  appId: "1:851605873362:web:c31f8eca911da2d50ac30b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();