// Node modules
import { useEffect, useState } from "react";

// Project files
import ItemStudent from "./components/ItemStudent";
import { readDocuments } from "./scripts/firebaseSetup";

export default function App() {
  // Local state
  const [data, setData] = useState([]);

  // Methods
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const data = await readDocuments();

    setData(data);
  }

  // Components
  const Items = data.map((item) => <ItemStudent key={item.id} item={item} />);

  return (
    <div className="App">
      <h1>Firebase Cloud Firestore</h1>
      <section>
        <h2>Students</h2>
        {Items}
      </section>
    </div>
  );
}
