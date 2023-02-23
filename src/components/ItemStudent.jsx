export default function ItemStudent({ item, onUpdate, onDelete }) {
  const { id, name, iteration, hired } = item;

  // Properties
  const showHired = hired
    ? "I already have a job ✅"
    : "You can hire me before is to late... for you! 😈";

  return (
    <article className="item-student">
      <h3>{name}</h3>
      <ul>
        <li>Iteration #{iteration}</li>
        <li>Is hired? {showHired}</li>
      </ul>
      <button onClick={() => onUpdate({ ...item, hired: !hired })}>
        Change job status
      </button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
