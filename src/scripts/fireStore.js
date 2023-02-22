// Node modules
import { collection, doc, getDocs } from "firebase/firestore";
import { addDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

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
  const result = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));

  return result;
}

// -- Update
export async function updateDocument(collectionName, data) {
  const documentId = data.id;
  const documentReference = doc(database, collectionName, documentId);

  await updateDoc(documentReference, data);
  return `document with id ${documentId} updated`;
}

// -- Delete
export async function deleteDocument(collectionName, documentId) {
  const documentReference = doc(database, collectionName, documentId);

  await deleteDoc(documentReference);
  return `document with id ${documentId} deleted`;
}
