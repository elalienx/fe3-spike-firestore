export default function ItemStudent({ item, actions }) {
  const { id, name, iteration, hired } = item;
  const [onUpdate, onDelete] = actions;

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
      <button onClick={() => onUpdate({ ...item, iteration: 9999 })}>
        update
      </button>
      <button onClick={() => onDelete(id)}>delete</button>
    </article>
  );
}
