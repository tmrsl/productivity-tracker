import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyC-x5nXWy7ybHh_PLoBVMPgBqSQA2vuckM",
  authDomain: "userauthenticatio-dev.firebaseapp.com",
  projectId: "userauthenticatio-dev",
  storageBucket: "userauthenticatio-dev.appspot.com",
  messagingSenderId: "346830269958",
  appId: "1:346830269958:web:8ee130098b5108e5555d87",
});

export const dataBase = getFirestore(app);

export const auth = getAuth(app);
export default app;
