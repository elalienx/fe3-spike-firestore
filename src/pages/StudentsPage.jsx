// Project files
import Formulary from "../components/Formulary";
import ItemStudent from "../components/ItemStudent";
import {
  createDocument,
  updateDocument,
  deleteDocument,
} from "../scripts/fireStore";

export default function StudentsPage({ state }) {
  const [students, setStudents] = state;

  // Components
  const Items = students.map((item) => (
    <ItemStudent key={item.id} item={item} actions={[onUpdate, onDelete]} />
  ));

  async function onCreate(data) {
    const documentId = await createDocument("students", data);
    const newStudent = { id: documentId, ...data };
    const result = [...students, newStudent];

    setStudents(result);
  }

  async function onUpdate(newData) {
    const id = newData.id;
    const clonedStudents = [...students];
    const itemIndex = clonedStudents.findIndex((item) => item.id === id);

    clonedStudents[itemIndex] = newData;

    await updateDocument("students", newData);
    setStudents(clonedStudents);
  }

  async function onDelete(id) {
    const clonedStudents = [...students];
    const itemIndex = clonedStudents.findIndex((item) => item.id === id);

    clonedStudents.splice(itemIndex, 1);

    await deleteDocument("students", id);
    setStudents(clonedStudents);
  }

  return (
    <div id="students-page">
      <h2>Students of the Frontend Course</h2>
      <Formulary onCreateStudent={onCreate} />
      {Items}
    </div>
  );
}
