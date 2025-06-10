import { createContext, useContext } from 'react';
import { Timestamp } from 'firebase/firestore';
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

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  addDoc,

  
} from 'firebase/firestore'
import { useState,useEffect } from 'react';
const firebaseConfig = {
  apiKey: "AIzaSyB-b1Q1smNSqNN1MCZgQIUWIGuSbmWKbHk",
  authDomain: "arogyapath-b14d4.firebaseapp.com",
  projectId: "arogyapath-b14d4",
  storageBucket: "arogyapath-b14d4.firebasestorage.app",
  messagingSenderId: "1028878863676",
  appId: "1:1028878863676:web:7b929d8a446e0a47bb6239"
};
const FirebaseContext = createContext(null);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
      setUser(currentUser); // Automatically updates on login/logout
      if(currentUser){
        const useref=doc(db,"users",currentUser.uid);
        const usersnap=await getDoc(useref);
        if(!usersnap.exists()){
          await setDoc(useref,{
            email:currentUser.email,
            createdat:new Date(),
            fullname:"",
            phone:"",
            gender:"",
            dob:""

          });
          console.log("user record created");
        }

      }
    });


    return () => unsubscribe();
  }, []);

  const addAppointments=async(uid,appointmentData)=>{
    const appointmentref=collection(db,'users',uid,'appointments');
    await addDoc(appointmentref,{
      ...appointmentData,
      date: Timestamp.fromDate(new Date(appointmentData.date)),
      createdat:Timestamp.now()
    })

  }

  const SignupUserWithEmailandPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const LoginUserWithEmailandPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const SignInWithGoogle = () =>
    signInWithPopup(auth, googleProvider);

  const SignInWithFacebook = () =>
    signInWithPopup(auth, facebookProvider);
  const updateProfileData=async(uid,profiledata)=>{
    const useref=doc(db,"users",uid);
    await updateDoc(useref,{
      ...profiledata,
      updatedat:new Date(),
    })
  }

  return (
    <FirebaseContext.Provider
      value={{
        SignupUserWithEmailandPassword,
        LoginUserWithEmailandPassword,
        SignInWithGoogle,
        SignInWithFacebook,
        user,
        db,
        updateProfileData,
        addAppointments
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
