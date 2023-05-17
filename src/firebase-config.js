import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCYzJpssCK16KivZQDGMbnzL_F1E9KCB6s",
    authDomain: "social-media-e83e5.firebaseapp.com",
    projectId: "social-media-e83e5",
    storageBucket: "social-media-e83e5.appspot.com",
    messagingSenderId: "139869122276",
    appId: "1:139869122276:web:0b0c5a59338538d958c6f1",
    measurementId: "G-PEW9KJ64CM"

  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)