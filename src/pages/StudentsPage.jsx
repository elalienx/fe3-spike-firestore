// Project files
import Formulary from "../components/Formulary";
import ItemStudent from "../components/ItemStudent";
import { createDocument } from "../scripts/fireStore";

export default function StudentsPage({ state }) {
  const [students, setStudents] = state;

  // Components
  const Items = students.map((item) => (
    <ItemStudent key={item.id} item={item} />
  ));

  async function onCreateStudent(data) {
    const documentId = await createDocument("students", data);
    const newStudent = { id: documentId, ...data };
    const result = [...students, newStudent];

    setStudents(result);
  }

  return (
    <div id="students-page">
      <h2>Students of the Frontend Course</h2>
      <Formulary onCreateStudent={onCreateStudent} />
      {Items}
    </div>
  );
}
