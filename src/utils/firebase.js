// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx3UwACECSS7Iv6b4uZqkSEQidI5QhmrA",
  authDomain: "admin-dashboard-77c17.firebaseapp.com",
  projectId: "admin-dashboard-77c17",
  storageBucket: "admin-dashboard-77c17.appspot.com",
  messagingSenderId: "117754332060",
  appId: "1:117754332060:web:8f9011be1c68c70917fe59",
  measurementId: "G-KTP71C7BG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getFirestore(app);
