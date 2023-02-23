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

  // Properties
  const COLLECTION_NAME = "students";

  // Components
  const Items = students.map((item) => (
    <ItemStudent
      key={item.id}
      item={item}
      onUpdate={onUpdate}
      onDelete={onDelete}
    />
  ));

  async function onCreate(data) {
    const documentId = await createDocument(COLLECTION_NAME, data);
    const newStudent = { id: documentId, ...data };
    const result = [...students, newStudent];

    setStudents(result);
  }

  async function onUpdate(data) {
    const id = data.id;
    const clonedStudents = [...students];
    const itemIndex = clonedStudents.findIndex((item) => item.id === id);

    await updateDocument(COLLECTION_NAME, data);
    clonedStudents[itemIndex] = data;
    setStudents(clonedStudents);
  }

  async function onDelete(id) {
    const clonedStudents = [...students];
    const itemIndex = clonedStudents.findIndex((item) => item.id === id);

    await deleteDocument(COLLECTION_NAME, id);
    clonedStudents.splice(itemIndex, 1);
    setStudents(clonedStudents);
  }

  return (
    <div id="students-page">
      <h2>Students of the Frontend Course</h2>
      <Formulary onCreate={onCreate} />
      {Items}
    </div>
  );
}
