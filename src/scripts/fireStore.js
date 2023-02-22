// Node modules
import { collection, doc } from "firebase/firestore";
import { addDoc, getDoc, getDocs, deleteDoc } from "firebase/firestore";

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

// -- Delete
export async function deleteDocument(collectionName, documentId) {
  const documentReference = doc(database, collectionName, documentId);

  await deleteDoc(documentReference);

  return `document with id ${documentId} deleted`;
}
