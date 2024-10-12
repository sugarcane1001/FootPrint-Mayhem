import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBUr6P3_Edn2cV9S-_SD_HQxbsLkFxWhVM",
  authDomain: "hackharvard-ec32c.firebaseapp.com",
  projectId: "hackharvard-ec32c",
  storageBucket: "hackharvard-ec32c.appspot.com",
  messagingSenderId: "121259243756",
  appId: "1:121259243756:web:37d3871ecbe48121aa4dc9",
  measurementId: "G-M9GHDDSM9B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
