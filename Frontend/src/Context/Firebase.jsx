import { createContext, useContext } from 'react';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth';
import { useState,useEffect } from 'react';
// const firebaseConfig = {
//   apiKey: "AIzaSyB-b1Q1smNSqNN1MCZgQIUWIGuSbmWKbHk",
//   authDomain: "arogyapath-b14d4.firebaseapp.com",
//   projectId: "arogyapath-b14d4",
//   storageBucket: "arogyapath-b14d4.firebasestorage.app",
//   messagingSenderId: "1028878863676",
//   appId: "1:1028878863676:web:7b929d8a446e0a47bb6239"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
const FirebaseContext = createContext(null);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null); // to track the current user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Automatically updates on login/logout
    });

    return () => unsubscribe(); // Clean up listener
  }, []);

  const SignupUserWithEmailandPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const LoginUserWithEmailandPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const SignInWithGoogle = () =>
    signInWithPopup(auth, googleProvider);

  const SignInWithFacebook = () =>
    signInWithPopup(auth, facebookProvider);

  return (
    <FirebaseContext.Provider
      value={{
        SignupUserWithEmailandPassword,
        LoginUserWithEmailandPassword,
        SignInWithGoogle,
        SignInWithFacebook,
        user,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
