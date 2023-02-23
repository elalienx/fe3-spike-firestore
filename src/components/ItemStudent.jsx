export default function ItemStudent({ item, actions }) {
  const { id, name, iteration, hired } = item;
  const [onUpdate, onDelete] = actions;

  // Properties
  const messageGood = "I already have a job ✅";
  const messageBad = "You can hire me before is to late... for you! 😈";
  const showHired = hired ? messageGood : messageBad;
  const jobUpdatedData = { ...item, hired: !hired };

  // Methods
  function onClickDelete(id) {
    const message = `Are you sure you want to delete ${name}`;
    const result = confirm(message);

    if (result) onDelete(id);

  }

  return (
    <article className="item-student">
      <h3>{name}</h3>
      <ul>
        <li>Iteration #{iteration}</li>
        <li>Is hired? {showHired}</li>
      </ul>
      <button onClick={() => onUpdate(jobUpdatedData)}>
        Change job status
      </button>
      <button onClick={() => onClickDelete(id)}>Delete</button>
    </article>
  );
}
