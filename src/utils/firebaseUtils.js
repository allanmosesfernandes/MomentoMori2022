// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkLC_hTNKO6NeFllc6iIK6NVzEtnwjMUI",
  authDomain: "momento-mori-redux.firebaseapp.com",
  projectId: "momento-mori-redux",
  storageBucket: "momento-mori-redux.appspot.com",
  messagingSenderId: "674007536364",
  appId: "1:674007536364:web:544da12042332a36ff8bc9"
};

let app;
try {
  app = getApp();
} catch {
  app = initializeApp(firebaseConfig);
}
// Initialize Firebase

//== Google Popup ==//
export const auth = getAuth();

const provider = new GoogleAuthProvider({
  prompt: "select_account",
})

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);