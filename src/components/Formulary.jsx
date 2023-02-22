import { useState } from "react";

export default function Formulary({ onCreateStudent }) {
  const [name, setName] = useState("");
  const [iteration, setIteration] = useState("");
  const [imageURL, setImageURL] = useState("");

  function onSubmit(event) {
    const data = {
      name: name,
      iteration: iteration,
      imageURL: imageURL,
      hired: false,
    };

    event.preventDefault();
    onCreateStudent(data);
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
        Paste the link for the image:
        <input
          type="text"
          value={imageURL}
          onChange={(event) => setImageURL(event.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
