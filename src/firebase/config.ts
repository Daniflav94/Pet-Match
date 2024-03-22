import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRZ6oqzgRfUyb-aSG2oTeo1ob95mqKiYI",
  authDomain: "pet-match-10c87.firebaseapp.com",
  projectId: "pet-match-10c87",
  storageBucket: "pet-match-10c87.appspot.com",
  messagingSenderId: "368984423200",
  appId: "1:368984423200:web:b22988f25df84bbd773545",
  measurementId: "G-CW6BDQLWZ6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };