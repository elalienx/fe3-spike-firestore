// Node modules
import { useState } from "react";

// Project files
import { createDocument } from "../scripts/fireStore";
import { useStudents } from "../state/StudentsProvider";

export default function Formulary({ collectionName }) {
  // Global state
  const { dispatch } = useStudents();

  // Local state
  const [name, setName] = useState("");
  const [iteration, setIteration] = useState("");

  async function onSubmit(event) {
    const data = generateProfile();

    event.preventDefault();
    const documentId = await createDocument(collectionName, data);
    dispatch({ type: "create", payload: { id: documentId, ...data } });
  }

  function generateProfile() {
    return {
      name: name,
      iteration: iteration,
      imageURL: "",
      hired: false,
    };
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <h3>Add a new student</h3>
      <label>
        Name:
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Iteration:
        <input
          type="number"
          value={iteration}
          required
          min="1"
          onChange={(event) => setIteration(event.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
