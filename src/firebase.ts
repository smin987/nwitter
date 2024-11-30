// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4VHKmsVqSEgxrI2_03lsX-S4XPoz6fiA",
  authDomain: "nwitter-898dc.firebaseapp.com",
  projectId: "nwitter-898dc",
  storageBucket: "nwitter-898dc.appspot.com",
  messagingSenderId: "601821063133",
  appId: "1:601821063133:web:04737d24965b96687e3834",
  measurementId: "G-RG495NP972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app)