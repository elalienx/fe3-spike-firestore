// Node modules
import { collection, getDoc, getDocs, doc } from "firebase/firestore";

// Project files
import { database } from "./firebaseSetup";

// Methods
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
