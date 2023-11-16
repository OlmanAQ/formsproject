// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEXmX8HBQFDG34CAGuELAHa0nTh2xBgS8",
  authDomain: "proyectoweb-73e50.firebaseapp.com",
  projectId: "proyectoweb-73e50",
  storageBucket: "proyectoweb-73e50.appspot.com",
  messagingSenderId: "905891305016",
  appId: "1:905891305016:web:3ffb0956fe2cd405e6f8cd",
  measurementId: "G-6Q5FMVWTHF"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase
