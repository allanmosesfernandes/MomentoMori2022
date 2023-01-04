// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth"
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
provider.setCustomParameters({
    prompt: "select_account"
})

//Initialize auth 

export const auth = getAuth();

// Initialize sign in with google popup

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)