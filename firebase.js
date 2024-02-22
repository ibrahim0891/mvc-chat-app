// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYKDr__b-g7MPBNwKHa6kDNxOMpFHAos4",
  authDomain: "mvc-chat-app.firebaseapp.com",
  projectId: "mvc-chat-app",
  storageBucket: "mvc-chat-app.appspot.com",
  messagingSenderId: "221464509934",
  appId: "1:221464509934:web:5d8163ef5d5ae0150822ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth