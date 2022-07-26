import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getIdToken,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  User,
  UserCredential,
} from "firebase/auth";
import nookies from "nookies";
import { auth } from "../firebase";


interface IAuthContext {
  currentUser: User,
  signUp: TSignUp,
  signIn: TSignIn,
  logOut: TLogOut,
  resetPassword: TResetPassword,
  updateUserCredentials: TUpdateUserCredentials,
}

interface IAuthProviderProps {
  children: React.ReactNode,
}

// eslint-disable-next-line no-unused-vars
export type TSignUp = (email: string, pass: string) => Promise<UserCredential>;
// eslint-disable-next-line
export type TSignIn = (email: string, pass: string) => Promise<UserCredential>;
// eslint-disable-next-line
export type TLogOut = () => Promise<void>;
// eslint-disable-next-line
export type TResetPassword = (email: string) => Promise<void>;
// eslint-disable-next-line
export type TUpdateUserCredentials = (args: { email: string, password: string}) => Promise<void[]>;

const AuthContext = React.createContext<IAuthContext>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signUp: TSignUp = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signIn: TSignIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logOut: TLogOut = async () => {
    return signOut(auth);
  };

  const resetPassword: TResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateUserCredentials: TUpdateUserCredentials = ({ email, password }) => {
    const promises = [];

    if (email) {
      promises.push(updateEmail(currentUser, email));
    }

    if (password) {
      promises.push(updatePassword(currentUser, password));
    }

    return Promise.all(promises);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await getIdToken(user);
        nookies.set(undefined, "token", token, { path: "/" });
      } else {
        nookies.set(undefined, "token", "", { path: "/" });
      }
      setCurrentUser(user);
      setIsLoading(false);
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
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
