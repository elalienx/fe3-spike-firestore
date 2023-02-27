export default function studentReducer(state, action) {
  console.log("studentReducer() state, action", state, action);

  switch (action.type) {
    case "create":
      return onCreate(state, action);
    case "delete":
      return onDelete(state, action);
    case "initializeArray":
      return onInitializeArray(action);
    case "update":
      return onUpdate(state, action);
    default:
      throw new Error("Unhandled action:", action.type);
  }
}

// Functional programming.
/**
 * Seems like an overkill here (and it is)
 * But image if we need 10 lines of code to add a cart.
 * Example validating if the itemId exist in our inventory.
 * Then it becomes easier to read, outside the switch
 */
function onCreate(state, action) {
  const newStudent = action.payload;

  return [...state, newStudent];
}

function onDelete(state, action) {
  const id = action.payload;
  const clonedStudents = [...state];
  const itemIndex = clonedStudents.findIndex((item) => item.id === id);

  clonedStudents.splice(itemIndex, 1);

  return clonedStudents;
}

function onInitializeArray(action) {
  const newStudents = action.payload;

  // Refactor
  // Verify that every student has an id

  return newStudents;
}

function onUpdate(state, action) {
  const updatedStudent = action.payload;
  const id = updatedStudent.id;
  const clonedStudents = [...state];
  const itemIndex = clonedStudents.findIndex((item) => item.id === id);

  clonedStudents[itemIndex] = updatedStudent;

  return clonedStudents;
}

// const id = data.id;
// const clonedStudents = [...students];
// const itemIndex = clonedStudents.findIndex((item) => item.id === id);

// clonedStudents[itemIndex] = data;

// setStudents(clonedStudents);
