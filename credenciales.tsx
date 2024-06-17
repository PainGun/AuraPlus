// credenciales.tsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHJtT0POxAYn4sOeNng1Fa7JJFoFtM02g",
  authDomain: "auraplus-e0467.firebaseapp.com",
  projectId: "auraplus-e0467",
  storageBucket: "auraplus-e0467.appspot.com",
  messagingSenderId: "100656817857",
  appId: "1:100656817857:web:5869a8b80141ea9d5a5640",
  measurementId: "G-TFP6DSH2ZQ"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the authentication instance
const auth = getAuth(app);

export default auth;
