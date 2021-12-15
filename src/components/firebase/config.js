// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGlX_je68LtVlszuyjBTutSsTn9J9ZMi4",
  authDomain: "my-phone-8600f.firebaseapp.com",
  projectId: "my-phone-8600f",
  storageBucket: "my-phone-8600f.appspot.com",
  messagingSenderId: "227282576403",
  appId: "1:227282576403:web:9f0ed722190c064adfcbe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);