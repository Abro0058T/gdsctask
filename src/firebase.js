
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDuL0zeJvsA3T4Ma8_Iph1Nus1PHwZ-44w",
  authDomain: "gdsctask-e4817.firebaseapp.com",
  projectId: "gdsctask-e4817",
  storageBucket: "gdsctask-e4817.appspot.com",
  messagingSenderId: "88191740749",
  appId: "1:88191740749:web:1b93a684abb12fc8442504"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app)

export const auth=getAuth(app)

 export const provider=new GoogleAuthProvider();
