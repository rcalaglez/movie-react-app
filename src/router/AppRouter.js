import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginView } from "../auth";
import { MoviesRoutes } from "../movies";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginView />} />
        <Route path="/*" element={<MoviesRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
