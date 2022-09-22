import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MoviesApp from "./MoviesApp";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoviesApp />
  </React.StrictMode>
);

reportWebVitals();
