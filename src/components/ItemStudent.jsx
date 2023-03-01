// Project files
import imagePlaceholder from "../assets/image-placeholder.jpg";
import { deleteDocument, updateDocument } from "../scripts/fireStore";
import { useStudents } from "../state/StudentsProvider";

export default function ItemStudent({ item, collectionName }) {
  const { id, name, iteration, imageURL, hired } = item;

  // Global state
  const { dispatch } = useStudents();

  // Properties
  const messageGood = "I already have a job ✅";
  const messageBad = "You can hire me before is to late... for you! 😈";
  const showHired = hired ? messageGood : messageBad;
  const imageSource = imageURL === "" ? imagePlaceholder : imageURL;

  // Methods
  async function onDelete(id) {
    const message = `Are you sure you want to delete ${name}`;
    const result = window.confirm(message);

    // Safeguard
    if (!result) return;

    await deleteDocument(collectionName, id);
    dispatch({ type: "delete", payload: id });
  }

  async function onUpdate() {
    const data = { ...item, hired: !hired };

    await updateDocument(collectionName, data);
    dispatch({ type: "update", payload: data });
  }

  return (
    <article className="item-student">
      <img src={imageSource} alt="Student profile" />
      <div className="content">
        <h3>{name}</h3>
        <ul>
          <li>Iteration #{iteration}</li>
          <li>Is hired? {showHired}</li>
        </ul>
        <button onClick={() => onUpdate()}>Change job status</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </article>
  );
}
