export default function studentReducer(state, action) {
  console.log("cartReducer()");
  switch (action.type) {
    case "add":
      return add(state, action);
    case "empty":
      return [];
    case "update":
      return update(state, action);
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
function add(state, action) {
  const { itemId } = action;

  return [...state, itemId];
}

function update(state, action) {
  const id = action;
  const clonedStudents = [...state];
  const itemIndex = clonedStudents.findIndex((item) => item.id === id);
  clonedStudents[itemIndex] = data;

  return clonedStudents;
}

function delete(state, action) {
    const id = action;
    //
    //
    //

    return clonedStudents
}