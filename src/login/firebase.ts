// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0facF_Qb2N_A3uppO667oGME-PLQ-csI",
  authDomain: "teily-6bb17.firebaseapp.com",
  projectId: "teily-6bb17",
  storageBucket: "teily-6bb17.firebasestorage.app",
  messagingSenderId: "562390815948",
  appId: "1:562390815948:web:c6b4aacc2d12de0398de69",
  measurementId: "G-4H9LWBYNND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);