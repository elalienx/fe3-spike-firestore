// Node modules
import { createContext, useContext, useReducer } from "react";

// Project files
import studentReducer from "./studentsReducer";

// Properties
const Context = createContext(null);

// For the App.jsx
export function StudentsProvider({ children }) {
  // State
  const [students, dispatch] = useReducer(studentReducer, []);

  // Properties
  const value = { students, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// For each child that uses the global state
export function useStudents() {
  const context = useContext(Context);
  const message =
    "useStudents() only works if the parent component is wrap it up inside the <StudentProvider>";

  if (!context) throw new Error(message);

  return context;
}
