// the connection information
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBa2MS9cgYwgqBFyrzr6UTzjyG58UdrRvg",
  authDomain: "bootcamp-e79e5.firebaseapp.com",
  projectId: "bootcamp-e79e5",
  storageBucket: "bootcamp-e79e5.firebasestorage.app",
  messagingSenderId: "266219656738",
  appId: "1:266219656738:web:5bef5f68d60c999e5a5c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//bulid database connection
const db = getFirestore(app);
export default db;