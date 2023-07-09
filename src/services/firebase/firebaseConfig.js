import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCfHBhA3eIGKUQ_upWdR3td-HQPpbDq7Z8",
  authDomain: "ecommerceapp-ef4bf.firebaseapp.com",
  projectId: "ecommerceapp-ef4bf",
  storageBucket: "ecommerceapp-ef4bf.appspot.com",
  messagingSenderId: "667179925741",
  appId: "1:667179925741:web:3edd81351944de0f454ce4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);