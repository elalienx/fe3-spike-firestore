// Project files
import ItemStudent from "../components/ItemStudent";

export default function StudentsPage({ data }) {
  // Components
  const Items = data.map((item) => <ItemStudent key={item.id} item={item} />);

  return (
    <div id="students-page">
      <h2>Students of the Frontend Course</h2>
      {Items}
    </div>
  );
}
