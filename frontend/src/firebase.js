// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c88dc.firebaseapp.com",
  projectId: "mern-blog-c88dc",
  storageBucket: "mern-blog-c88dc.appspot.com",
  messagingSenderId: "935962318505",
  appId: "1:935962318505:web:9e70b4dbbb1785ef187bb8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
