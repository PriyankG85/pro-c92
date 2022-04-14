import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase App Configuration!!

const config = {
  apiKey: "AIzaSyCP606hvp4Hf1voNau8EWxWoMtVhi8CJQs",
  authDomain: "digi-arts.firebaseapp.com",
  projectId: "digi-arts",
  storageBucket: "digi-arts.appspot.com",
  messagingSenderId: "16187266545",
  appId: "1:16187266545:web:bef66aa6907cc7d4a3e050",
  measurementId: "G-1QW271PZG9",
};

const app = getApps.length === 0 ? initializeApp(config) : getApp();

const db = getFirestore(app);

const storage = getStorage(app);

export { app, db, storage };
