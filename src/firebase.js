// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDuVNq-Vxsw-a16NbGT5-An31f2CbpJ9rU',
  authDomain: 'loadbilly-d6132.firebaseapp.com',
  projectId: 'loadbilly-d6132',
  storageBucket: 'loadbilly-d6132.appspot.com',
  messagingSenderId: '518181909146',
  appId: '1:518181909146:web:33f4eed4806348be0de523',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { firebase, auth, db, storage };
