// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHqgDFY08SOBYNSPj_kxY4uBM8cm51Epg",
  authDomain: "badbank-ljaquez.firebaseapp.com",
  projectId: "badbank-ljaquez",
  storageBucket: "badbank-ljaquez.appspot.com",
  messagingSenderId: "458038020588",
  appId: "1:458038020588:web:127e415ebd3e177da5d8c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

function Login(){
  return (
    <h1>Login</h1>
  )  
}
