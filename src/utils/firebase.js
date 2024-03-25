// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "netflix-gpt-b1170.firebaseapp.com",
  projectId: "netflix-gpt-b1170",
  storageBucket: "netflix-gpt-b1170.appspot.com",
  messagingSenderId: "350405641183",
  appId: "1:350405641183:web:67f0702ee27803cdc17a6a",
  measurementId: "G-VELC31TP66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
