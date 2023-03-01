// Node modules
import { doc, collection, setDoc, getDoc } from "firebase/firestore";
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

export async function createDocumentWithManualId(collectionName, id, data) {
  const reference = collection(database, collectionName);
  const document = doc(reference, id);

  await setDoc(document, data);

  return `created document with manual id ${id}`;
}

// -- Read
export async function readDocument(collectionName, documentId) {
  const reference = doc(database, collectionName, documentId);
  const document = await getDoc(reference);
  const result = { id: document.id, ...document.data() };

  return result;
}

export async function readDocuments(collectionName) {
  const reference = collection(database, collectionName);
  const snapshot = await getDocs(reference);
  const result = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));

  return result;
}

// -- Update
export async function updateDocument(collectionName, documentToUpdate) {
  const id = documentToUpdate.id;
  const reference = doc(database, collectionName, id);

  await updateDoc(reference, documentToUpdate);

  return `updated document with id ${id}`;
}

// -- Delete
export async function deleteDocument(collectionName, id) {
  const reference = doc(database, collectionName, id);

  await deleteDoc(reference);

  return `deleted document with id ${id}`;
}
