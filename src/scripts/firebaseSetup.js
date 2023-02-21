// Node modules
/** Import the functions you need from the SDKs you need */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDveHYg89r_GInm6hDPbqUpbxHVtAmggBU",
  authDomain: "fe3-spike-firestore.firebaseapp.com",
  projectId: "fe3-spike-firestore",
  storageBucket: "fe3-spike-firestore.appspot.com",
  messagingSenderId: "175225435910",
  appId: "1:175225435910:web:750da1721d3ce9f3af5087",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function readDocuments() {
  const querySnapshot = await getDocs(collection(db, "students"));
  const result = [];

  querySnapshot.forEach((doc) => {
    const document = { id: doc.id, ...doc.data() };

    result.push(document);
  });

  return result;
}
