// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeLAcSjsNinNJKs_3fPreOguPkatLaiJ8",
  authDomain: "the-news-dragon-8d0da.firebaseapp.com",
  projectId: "the-news-dragon-8d0da",
  storageBucket: "the-news-dragon-8d0da.appspot.com",
  messagingSenderId: "361531037380",
  appId: "1:361531037380:web:c6f41163c472b293c2db91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;