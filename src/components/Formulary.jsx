// Node modules
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Project files
import { createDocumentWithManualId } from "../scripts/fireStore";
import { useStudents } from "../state/StudentsProvider";
import { uploadFile, downloadFile } from "../scripts/cloudStorage";

export default function Formulary({ collectionName }) {
  // Global state
  const { dispatch } = useStudents();

  // Local state
  const [name, setName] = useState("");
  const [iteration, setIteration] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(true);

  // Property
  const manualId = uuidv4() + "_" + Date.now();

  async function onSubmit(event) {
    const data = generateStudentProfile();

    event.preventDefault();
    await createDocumentWithManualId(collectionName, manualId, data);
    dispatch({ type: "create", payload: data });
  }

  async function onChooseImage(event) {
    const file = event.target.files[0];
    const filePath = `students/${manualId}_${file.name}`;

    setButtonEnabled(false);
    await uploadFile(file, filePath);
    setImageURL(await downloadFile(filePath));
    setButtonEnabled(true);
  }

  function generateStudentProfile() {
    return {
      id: manualId,
      name: name,
      iteration: iteration,
      imageURL: imageURL,
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
      <label>
        Upload your profile picture:
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(event) => onChooseImage(event)}
          required
        />
      </label>
      <button disabled={!buttonEnabled}>Submit</button>
    </form>
  );
}
