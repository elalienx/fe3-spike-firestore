// Project files
import Formulary from "../components/Formulary";
import ItemStudent from "../components/ItemStudent";
import { createDocument } from "../scripts/fireStore";
import { updateDocument } from "../scripts/fireStore";
import { deleteDocument } from "../scripts/fireStore";

export default function StudentsPage({ state }) {
  const [students, setStudents] = state;

  // Properties
  const COLLECTION_NAME = "students";

  // Components
  const Items = students.map((item) => (
    <ItemStudent key={item.id} item={item} actions={[onUpdate, onDelete]} />
  ));

  async function onCreate(data) {
    const documentId = await createDocument(COLLECTION_NAME, data);
    dispatch({ type: "create", payload: { id: documentId, ...data } });
  }

  async function onUpdate(data) {
    await updateDocument(COLLECTION_NAME, data);
    dispatch({ type: "update", payload: data });
  }

  async function onDelete(id) {
    await deleteDocument(COLLECTION_NAME, id);
    dispatch({ type: "delete", payload: id });
  }

  return (
    <div id="students-page">
      <h2>Students of the Frontend Course</h2>
      <Formulary onCreate={onCreate} />
      {Items}
    </div>
  );
}
