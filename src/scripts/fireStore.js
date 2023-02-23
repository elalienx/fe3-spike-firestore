// Node modules
import { doc, collection, getDoc } from "firebase/firestore";
import { addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";

// Project files
import { database } from "./firebaseSetup";

// Methods (C.R.U.D.)
// -- Create
export async function createDocument(collectionName, data) {
  const reference = collection(database, collectionName);
  const document = await addDoc(reference, data);
  const result = document.id;

  return result;
}

// -- Read
export async function readDocument(collectionName, documentId) {
  const reference = doc(database, collectionName, documentId);
  const snapshot = await getDoc(reference);
  const result = { id: snapshot.id, ...snapshot.data() };

  return result;
}

export async function readDocuments(collectionName) {
  const reference = collection(database, collectionName);
  const snapshot = await getDocs(reference);
  const result = [];

  snapshot.forEach((doc) => {
    const document = { id: doc.id, ...doc.data() };

    result.push(document);
  });

  return result;
}

// -- Update
export async function updateDocument(collectionName, documentToUpdate) {
  const reference = doc(database, collectionName, documentToUpdate.id);

  await updateDoc(reference, documentToUpdate);

  return `updated document with id ${documentToUpdate.id}`;
}

// -- Delete
