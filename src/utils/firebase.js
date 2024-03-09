// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDgfnni4wtA09tSZ-rn60oFFbN3xduu38",
  authDomain: "netflix-gpt-36bfb.firebaseapp.com",
  projectId: "netflix-gpt-36bfb",
  storageBucket: "netflix-gpt-36bfb.appspot.com",
  messagingSenderId: "489940572596",
  appId: "1:489940572596:web:d832b3493cf2ab66a7bae1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
