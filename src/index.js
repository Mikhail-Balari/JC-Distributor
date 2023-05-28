import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfHBhA3eIGKUQ_upWdR3td-HQPpbDq7Z8",
  authDomain: "ecommerceapp-ef4bf.firebaseapp.com",
  projectId: "ecommerceapp-ef4bf",
  storageBucket: "ecommerceapp-ef4bf.appspot.com",
  messagingSenderId: "667179925741",
  appId: "1:667179925741:web:3edd81351944de0f454ce4",
  measurementId: "G-TT8ZF3N6ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
