import React from 'react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAULOHTRlwOvdK5jLq7HxWJWtJolPUbXIk",
  authDomain: "magister-frontendreto.firebaseapp.com",
  projectId: "magister-frontendreto",
  storageBucket: "magister-frontendreto.appspot.com",
  messagingSenderId: "692715986787",
  appId: "1:692715986787:web:7507e579ce99d05f213d56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);