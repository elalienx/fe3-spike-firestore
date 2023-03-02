// Project files
import Formulary from "../components/Formulary";
import ItemStudent from "../components/ItemStudent";
import { useStudents } from "../state/StudentsProvider";

export default function StudentsPage() {
  // Global state
  const { students } = useStudents();

  // Properties
  const COLLECTION_NAME = "students";

  // Components
  const Items = students.map((item) => (
    <ItemStudent key={item.id} item={item} collectionName={COLLECTION_NAME} />
  ));

  return (
    <div id="students-page">
      <h2>Students of the Frontend Course</h2>
      <Formulary collectionName={COLLECTION_NAME} />
      <hr />
      {Items}
    </div>
  );
}
