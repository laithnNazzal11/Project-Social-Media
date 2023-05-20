import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { getFirestore  } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";

import 'firebase/compat/auth'
import "firebase/compat/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyCYzJpssCK16KivZQDGMbnzL_F1E9KCB6s",
    authDomain: "social-media-e83e5.firebaseapp.com",
    projectId: "social-media-e83e5",
    storageBucket: "social-media-e83e5.appspot.com",
    messagingSenderId: "139869122276",
    appId: "1:139869122276:web:0b0c5a59338538d958c6f1",
    measurementId: "G-PEW9KJ64CM",
    databaseURL: "https://social-media-e83e5-default-rtdb.asia-southeast1.firebasedatabase.app"

  
  };
  

  const app = firebase.initializeApp(firebaseConfig);
  //const  db = firebaseApp.firestore()
  export const storage = getStorage(app);
  export const auth = getAuth(app)
  export const dataRef = firebase.database();
 // export default getFirestore();
