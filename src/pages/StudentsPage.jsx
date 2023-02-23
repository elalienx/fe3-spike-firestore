// Project files
import Formulary from "../components/Formulary";
import ItemStudent from "../components/ItemStudent";
import { createDocument } from "../scripts/fireStore";
import { updateDocument } from "../scripts/fireStore";
import { deleteDocument } from "../scripts/fireStore";

export default function StudentsPage({ state }) {
  const [students, setStudents] = state;

  // Properties
  const COLLECTION_NAME = "coordinator";

  // Components
  const Items = students.map((item) => (
    <ItemStudent key={item.id} item={item} actions={[onUpdate, onDelete]} />
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

    clonedStudents[itemIndex] = data;
    setStudents(clonedStudents);
    await updateDocument(COLLECTION_NAME, data);
  }

  async function onDelete(id) {
    const clonedStudents = [...students];
    const itemIndex = clonedStudents.findIndex((item) => item.id === id);

    clonedStudents.splice(itemIndex, 1);
    setStudents(clonedStudents);
    await deleteDocument(COLLECTION_NAME, id);
  }

  return (
    <div id="students-page">
      <h2>Students of the Frontend Course</h2>
      <Formulary onCreate={onCreate} />
      {Items}
    </div>
  );
}
