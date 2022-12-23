import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsvdNAZWIpAJounyXJMnnqQImkRlTgUuQ",
  authDomain: "aiit-api.firebaseapp.com",
  databaseURL: "https://aiit-api-default-rtdb.firebaseio.com",
  projectId: "aiit-api",
  storageBucket: "aiit-api.appspot.com",
  messagingSenderId: "235038677972",
  appId: "1:235038677972:web:e7650c688f6f9d0c321441",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
