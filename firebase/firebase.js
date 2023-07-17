// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzEWV4wiFTfHBxN7fVsRMFYiumO6Oe_2g",
  authDomain: "foodappnative.firebaseapp.com",
  projectId: "foodappnative",
  storageBucket: "foodappnative.appspot.com",
  messagingSenderId: "103451591877",
  appId: "1:103451591877:web:a8739ef431e98d70d25cac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
export {app , auth , db};