// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7SREBDeS34C2csyzdmAf2llXh_oAvERY",
  authDomain: "react-authentication-1b4e2.firebaseapp.com",
  projectId: "react-authentication-1b4e2",
  storageBucket: "react-authentication-1b4e2.appspot.com",
  messagingSenderId: "1022691587254",
  appId: "1:1022691587254:web:ed90fb8922f4f851fca217"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);