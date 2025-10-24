// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJTKLHcgTFEE2136ZDPi4k9-mythRwNpU",
  authDomain: "gamehub-a581e.firebaseapp.com",
  projectId: "gamehub-a581e",
  storageBucket: "gamehub-a581e.firebasestorage.app",
  messagingSenderId: "815257466463",
  appId: "1:815257466463:web:862cc15216fd51e74d8dea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();