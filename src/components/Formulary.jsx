import { useState } from "react";

export default function Formulary({ onCreateStudent }) {
  const [name, setName] = useState("Nermeen");
  const [iteration, setIteration] = useState(3);
  const [imageURL, setImageURL] = useState(
    "https://img.freepik.com/free-photo/portrait-happy-african-american-female-college-student-holding-notebooks-backpack-smiling-standing-yellow-background_1258-54844.jpg"
  );

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
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Iteration:
        <input
          type="number"
          value={iteration}
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
