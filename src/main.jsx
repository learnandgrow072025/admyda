// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";

// CHANGE THESE TWO LINES:
import App from "./App.jsx";     // was "@/App"
import "./index.css";            // was "@index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);