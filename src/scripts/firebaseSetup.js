// Node modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Properties
const configuration = {
  apiKey: "AIzaSyDveHYg89r_GInm6hDPbqUpbxHVtAmggBU",
  authDomain: "fe3-spike-firestore.firebaseapp.com",
  projectId: "fe3-spike-firestore",
  storageBucket: "fe3-spike-firestore.appspot.com",
  messagingSenderId: "175225435910",
  appId: "1:175225435910:web:750da1721d3ce9f3af5087",
};
const firebase = initializeApp(configuration);

// Exports
export const database = getFirestore(firebase);
