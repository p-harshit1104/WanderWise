// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATmO0Id4xQMSLybnZZ7iKcacua3zXz0tE",
  authDomain: "wander-wise-umber.vercel.app",
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