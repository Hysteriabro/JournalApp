// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();


// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyB3fJ3ion7WIeKPaBEoDJXludgOyXh-vJI",
//   authDomain: "react-curso-54998.firebaseapp.com",
//   projectId: "react-curso-54998",
//   storageBucket: "react-curso-54998.appspot.com",
//   messagingSenderId: "1028175509944",
//   appId: "1:1028175509944:web:579bb8bb2914c60363774d"
// };

// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyC6fcEyQNJn2CxZiHcCSU8ch5wnlnboTR4",
//   authDomain: "react-curso-test-a9b81.firebaseapp.com",
//   projectId: "react-curso-test-a9b81",
//   storageBucket: "react-curso-test-a9b81.appspot.com",
//   messagingSenderId: "593584650864",
//   appId: "1:593584650864:web:fe8b271716842e971ed2b5"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );