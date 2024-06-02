// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx1a5JihgUzi8AbA1cfAJl6c-wCB-018A",
  authDomain: "david-adeboyejo.firebaseapp.com",
  projectId: "david-adeboyejo",
  storageBucket: "david-adeboyejo.appspot.com",
  messagingSenderId: "617192439584",
  appId: "1:617192439584:web:6bbc14bfcff9656f4ae145",
  measurementId: "G-PFC8CM5YE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);