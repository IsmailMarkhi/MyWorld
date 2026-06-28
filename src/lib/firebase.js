import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBWGsTSeOCfXreFknYKg2etqEuisaQiSRY",
  authDomain: "rotalabs-onelink.firebaseapp.com",
  projectId: "rotalabs-onelink",
  storageBucket: "rotalabs-onelink.firebasestorage.app",
  messagingSenderId: "258560136031",
  appId: "1:258560136031:web:0ef455fbf3551f3b4fdcea"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);