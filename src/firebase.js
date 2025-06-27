// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ← for database

const firebaseConfig = {
  apiKey: "AIzaSyB45CdCNh6wMGQbHQ3uZEAvEGfDOR1Cmh4",
  authDomain: "synapse-c6161.firebaseapp.com",
  projectId: "synapse-c6161",
  storageBucket: "synapse-c6161.firebasestorage.app",
  messagingSenderId: "1055169660296",
  appId: "1:1055169660296:web:3bd3a988adb965af37663d",
  measurementId: "G-EQEM8RZBXR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
