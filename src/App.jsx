// Node modules
import { useEffect, useState } from "react";

// Project files
import { readDocuments } from "./scripts/fireStore";
import StudentsPage from "./pages/StudentsPage";
import { StudentsProvider, useStudents } from "./state/StudentsProvider";

export default function App() {
  // Global state
  const { dispatch } = useStudents();

  // Local state
  const [status, setStatus] = useState(0); // 0: loading, 1: ready, 2: error

  // Properties
  const COLLECTION_NAME = "students";

  // Methods
  useEffect(() => {
    loadData(COLLECTION_NAME);
  }, []);

  async function loadData(collectionName) {
    const data = await readDocuments(collectionName).catch(onFail);

    onSuccess(data);
  }

  function onSuccess(data) {
    dispatch({ type: "initializeArray", payload: data });
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  // React does not like when you manipulate the Context API state outside the <Provider>
  return (
    <div className="App">
      <StudentsProvider>
        <h1>Firebase Cloud Firestore</h1>
        {status === 0 && <p>Loading... ⏲️</p>}
        {status === 1 && <StudentsPage />}
        {status === 2 && <p>Error ❌</p>}
      </StudentsProvider>
    </div>
  );
}
