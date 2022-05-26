

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_E0Z4l38S8kchaGzRk9LoaDR_lnD182w",
  authDomain: "electric-tools-b6ecb.firebaseapp.com",
  projectId: "electric-tools-b6ecb",
  storageBucket: "electric-tools-b6ecb.appspot.com",
  messagingSenderId: "599505210446",
  appId: "1:599505210446:web:e7ccc0059992d5cd2a071f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
