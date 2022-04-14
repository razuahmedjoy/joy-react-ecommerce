// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnKldqzEUpcX6D56YwYYGy66jDXwhGsxo",
  authDomain: "joy-react-ema-john.firebaseapp.com",
  projectId: "joy-react-ema-john",
  storageBucket: "joy-react-ema-john.appspot.com",
  messagingSenderId: "959500379548",
  appId: "1:959500379548:web:54a73678b741f212535459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;