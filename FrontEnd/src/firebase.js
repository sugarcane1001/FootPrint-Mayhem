import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUr6P3_Edn2cV9S-_SD_HQxbsLkFxWhVM",
  authDomain: "hackharvard-ec32c.firebaseapp.com",
  projectId: "hackharvard-ec32c",
  storageBucket: "hackharvard-ec32c.appspot.com",
  messagingSenderId: "121259243756",
  appId: "1:121259243756:web:37d3871ecbe48121aa4dc9",
  measurementId: "G-M9GHDDSM9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);
export { auth }; 
