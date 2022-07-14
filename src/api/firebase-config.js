import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


export const firebaseConfig = {
  apiKey: "AIzaSyAULOHTRlwOvdK5jLq7HxWJWtJolPUbXIk",
  authDomain: "magister-frontendreto.firebaseapp.com",
  projectId: "magister-frontendreto",
  storageBucket: "magister-frontendreto.appspot.com",
  messagingSenderId: "692715986787",
  appId: "1:692715986787:web:7507e579ce99d05f213d56"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);