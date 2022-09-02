// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9ISvIpdUTuA1llCweVXv3-r8huHFNM9o",
    authDomain: "phase-5-project-cafe-heiwa.firebaseapp.com",
    projectId: "phase-5-project-cafe-heiwa",
    storageBucket: "phase-5-project-cafe-heiwa.appspot.com",
    messagingSenderId: "66905183202",
    appId: "1:66905183202:web:c5eec84d97a6dd9c89dfbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default app;