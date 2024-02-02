import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import RecordsProvider, { RecordsContext } from "./RecordsContext";

const el = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(el);

root.render(
  <RecordsProvider>
    <App />
  </RecordsProvider>
);
