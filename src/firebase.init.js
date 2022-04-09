// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEQwEw2MLrmXE19WICWLL778nPgBwDioM",
  authDomain: "auth-private-route-b03a7.firebaseapp.com",
  projectId: "auth-private-route-b03a7",
  storageBucket: "auth-private-route-b03a7.appspot.com",
  messagingSenderId: "957008874161",
  appId: "1:957008874161:web:1338747977ec37f76b7090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
