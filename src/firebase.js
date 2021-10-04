// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS8K65MCXoVITvUW7BoGGuULoDskHk-d8",
  authDomain: "messagerie-8a5c6.firebaseapp.com",
  databaseURL: "https://messagerie-8a5c6.firebaseio.com",
  projectId: "messagerie-8a5c6",
  storageBucket: "messagerie-8a5c6.appspot.com",
  messagingSenderId: "924691876569",
  appId: "1:924691876569:web:e638ded232a8c4a114ccc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;