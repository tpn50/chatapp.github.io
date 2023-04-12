// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz_nPXKda1RDg2SXQibFy0rOonbhycEBo",
  authDomain: "chat-app-final-1561e.firebaseapp.com",
  projectId: "chat-app-final-1561e",
  storageBucket: "chat-app-final-1561e.appspot.com",
  messagingSenderId: "396827780700",
  appId: "1:396827780700:web:93cb4129649144b0012899",
  datebaseURL: "https://chat-app-final-1561e.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
