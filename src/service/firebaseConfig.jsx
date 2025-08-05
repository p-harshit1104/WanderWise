// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATmO0Id4xQMSLybnZZ7iKcacua3zXz0tE",
  authDomain: "aitrip-planner-e61c6.firebaseapp.com",
  projectId: "aitrip-planner-e61c6",
  storageBucket: "aitrip-planner-e61c6.firebasestorage.app",
  messagingSenderId: "964976935324",
  appId: "1:964976935324:web:5681539c3847717726c859",
  measurementId: "G-HLYES3T2N8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);