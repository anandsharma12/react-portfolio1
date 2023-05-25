import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAzJ1Dyg7nji3XIKjuwAt_r0hNx9lCzzNY",
  authDomain: "react-portfolio-anand.firebaseapp.com",
  projectId: "react-portfolio-anand",
  storageBucket: "react-portfolio-anand.appspot.com",
  messagingSenderId: "505231429210",
  appId: "1:505231429210:web:9c06659fceb08c675ed263"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();