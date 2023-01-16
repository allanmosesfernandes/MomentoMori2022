// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from "firebase/auth"

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhqnyu_IBDG_QW-pk0vZ3K0AxqOIbC48A",
  authDomain: "momento-mori-decdd.firebaseapp.com",
  projectId: "momento-mori-decdd",
  storageBucket: "momento-mori-decdd.appspot.com",
  messagingSenderId: "272785076620",
  appId: "1:272785076620:web:b1d7889445ae142c7a26a9" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize the provider
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
provider.addScope('https://www.googleapis.com/auth/userinfo.email');
provider.setCustomParameters({
    prompt: "select_account",
    scope: 'profile email'
})

//Initialize auth 

export const auth = getAuth();

// Initialize sign in with google popup

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)


//========Firestore Database=========//
// if doesnt exists dip

export const db  = getFirestore();
export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {

  if (!userAuth) return;
  const userDocRef =  doc(db,'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  // if snapshot doesnt exists 

  if(!userSnapShot.exists()){
  //create snapshot
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
      
    } catch(error) {
       console.error("Error creating user:", error);
    }
  }

//if snapshot exists
  return userDocRef
}


//======== Create User from Sign up form =========//
export const createAuthUserEmailPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

//======== Sign in with email password =========//
export const userSignInEmailPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}
