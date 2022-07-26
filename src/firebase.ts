import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyC-x5nXWy7ybHh_PLoBVMPgBqSQA2vuckM",
  appId: "1:346830269958:web:8ee130098b5108e5555d87",
  authDomain: "userauthenticatio-dev.firebaseapp.com",
  messagingSenderId: "346830269958",
  projectId: "userauthenticatio-dev",
  storageBucket: "userauthenticatio-dev.appspot.com",
}, "client-app");

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);

export default app;
