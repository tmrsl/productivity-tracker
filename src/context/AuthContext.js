import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logOut = async () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateUserCredentials = ({ email, password, displayName }) => {
    const promises = [];

    if (email) {
      promises.push(updateEmail(currentUser, email));
    }

    if (password) {
      promises.push(updatePassword(currentUser, password));
    }

    if (displayName) {
      promises.push(updateProfile(currentUser, { displayName }));
    }

    return Promise.all(promises);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    logOut,
    resetPassword,
    updateUserCredentials,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
