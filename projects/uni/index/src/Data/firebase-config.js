import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCVOyMGPi8rO9wWsqxJMZtVFUHHyoDCLww",
    authDomain: "personalwebsite-ae889.firebaseapp.com",
    projectId: "personalwebsite-ae889",
    storageBucket: "personalwebsite-ae889.appspot.com",
    messagingSenderId: "542852524849",
    appId: "1:542852524849:web:ddde9a000f753d4848de10",
    measurementId: "G-PKT4SJXJ7Z"
  };


  const app = initializeApp(firebaseConfig);


  export const db = getFirestore(app);