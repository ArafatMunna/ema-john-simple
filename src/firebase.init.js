// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAkYDlDpS4RPlib7IQwRXEE9s5GA2yD7s",
    authDomain: "ema-john-simple-51a1e.firebaseapp.com",
    projectId: "ema-john-simple-51a1e",
    storageBucket: "ema-john-simple-51a1e.appspot.com",
    messagingSenderId: "631984575930",
    appId: "1:631984575930:web:3e9cfe6dd30f80f53db983",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
