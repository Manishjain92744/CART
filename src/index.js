 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyADwmxQ0JOlqHVNDoA14X1fJMfS4BVI6ec",
  authDomain: "cart-e6360.firebaseapp.com",
  projectId: "cart-e6360",
  storageBucket: "cart-e6360.appspot.com",
  messagingSenderId: "468718306858",
  appId: "1:468718306858:web:def1bbe9742dbe1cc8a553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default db;
 