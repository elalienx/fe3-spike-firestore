// Project files
import Formulary from "../components/Formulary";
import ItemStudent from "../components/ItemStudent";
import { createDocument, updateDocument } from "../scripts/fireStore";

export default function StudentsPage({ state }) {
  const [students, setStudents] = state;

  // Components
  const Items = students.map((item) => (
    <ItemStudent key={item.id} item={item} onUpdate={onUpdate} />
  ));

  async function onCreate(data) {
    const documentId = await createDocument("students", data);
    const newStudent = { id: documentId, ...data };
    const result = [...students, newStudent];

    setStudents(result);
  }

  async function onUpdate(data) {
    // 1. Copy the state
    const cloneStudents = [...students];

    // 2. Find what particular item we try to modify (Alexia is index 2)
    const itemIndex = cloneStudents.findIndex((item) => item.id === data.id);

    // 3. Modify the item with the updated data
    cloneStudents[itemIndex] = data;

    // replace the state
    await updateDocument("students", data);
    setStudents(cloneStudents);
  }

  return (
    <div id="students-page">
      <h2>Students of the Frontend Course</h2>
      <Formulary onCreate={onCreate} />
      {Items}
    </div>
  );
}
