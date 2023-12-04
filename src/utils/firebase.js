// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBajQLmIupWDF2mn8O12oUa3EgMJOj271Y",
  authDomain: "dashboard-4a31c.firebaseapp.com",
  projectId: "dashboard-4a31c",
  storageBucket: "dashboard-4a31c.appspot.com",
  messagingSenderId: "735716632065",
  appId: "1:735716632065:web:7ded1f9732461d6f824200",
  measurementId: "G-22CJPBCXJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
