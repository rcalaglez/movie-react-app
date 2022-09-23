import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MoviesApp from "./MoviesApp";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./auth/contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MoviesApp />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
