import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBx1a5JihgUzi8AbA1cfAJl6c-wCB-018A",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "david-adeboyejo.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "david-adeboyejo",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "david-adeboyejo.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "617192439584",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:617192439584:web:6bbc14bfcff9656f4ae145",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-PFC8CM5YE4",
};

// Initialize Firebase (prevent multiple initializations)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

let analyticsInstance: Analytics | null = null;
export const getClientAnalytics = async () => {
  if (typeof window !== "undefined" && !analyticsInstance) {
    const supported = await isSupported().catch(() => false);
    if (supported) {
      analyticsInstance = getAnalytics(app);
    }
  }
  return analyticsInstance;
};

export default app;
