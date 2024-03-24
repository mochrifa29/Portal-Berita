// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"
import { getAuth } from 'firebase/auth'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3N_AM_U_NADHU9qsAJwLX5MFeHC2FDV4',
  authDomain: 'portalberita-9ff7d.firebaseapp.com',
  projectId: 'portalberita-9ff7d',
  storageBucket: 'portalberita-9ff7d.appspot.com',
  messagingSenderId: '543993843299',
  appId: '1:543993843299:web:3bbc11c81e36ab79f73256'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//Databse
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const projectStorage = getStorage(app)

export{
    db,
    auth,
    projectStorage
}
