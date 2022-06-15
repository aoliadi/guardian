import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import rootStyle from "./css/root.module.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
