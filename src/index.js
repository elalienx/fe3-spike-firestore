// Node modules
import React from "react";
import ReactDOM from "react-dom/client";

// Project files
import { StudentsProvider } from "./state/StudentsProvider";
import App from "./App";

// Properties
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StudentsProvider>
      <App />
    </StudentsProvider>
  </React.StrictMode>
);
