// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,} from 'firebase/firestore'
import {getStorage} from "firebase/storage"

import {  getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDBjIb5p07ubgbaMHcU8azDpIxphOKtBVg",
//   authDomain: "standalocationsystem.firebaseapp.com",
//   projectId: "standalocationsystem",
//   storageBucket: "standalocationsystem.firebasestorage.app",
//   messagingSenderId: "137136010129",
//   appId: "1:137136010129:web:ff3451ff6a0dde8e1a2030"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD8H8zz_QHx0uE5jyxxViXV_1l-tTCW9MI",
  authDomain: "standalocationsytem.firebaseapp.com",
  projectId: "standalocationsytem",
  storageBucket: "standalocationsytem.firebasestorage.app",
  messagingSenderId: "612979147049",
  appId: "1:612979147049:web:923d4283ceb459b58bb738"
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)



export const auth = getAuth(app)