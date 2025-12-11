import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMvYTY58Lg8Ir437cXS_6LLsRoGSBC3kI",
  authDomain: "abaygerdtoken-fb1e5.firebaseapp.com",
  projectId: "abaygerdtoken-fb1e5",
  storageBucket: "abaygerdtoken-fb1e5.appspot.com",
  messagingSenderId: "309976612278",
  appId: "1:309976612278:web:b529621a221c9b750a1517",
  measurementId: "G-9SMFLKM4GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);





