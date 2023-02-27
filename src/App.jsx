// Node modules
import { useEffect, useState } from "react";

// Project files
import { readDocuments } from "./scripts/fireStore";
import StudentsPage from "./pages/StudentsPage";

export default function App() {
  // Local state
  const [status, setStatus] = useState(0); // 0: loading, 1: ready, 2: error
  const [students, setStudents] = useState([]);

  // Methods
  useEffect(() => {
    loadData("students");
  }, []);

  async function loadData(collectionName) {
    const data = await readDocuments(collectionName).catch(onFail);

    onSuccess(data);
  }

  function onSuccess(data) {
    dispatch();
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  return (
    <div className="App">
      <h1>Firebase Cloud Firestore</h1>
      {status === 0 && <p>Loading... ⏲️</p>}
      {status === 1 && <StudentsPage state={[students, setStudents]} />}
      {status === 2 && <p>Error ❌</p>}
    </div>
  );
}
