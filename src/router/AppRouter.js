import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginView from "../auth/views/LoginView";
import MoviesDetailView from "../movies/views/MoviesDetailView";
import MoviesListView from "../movies/views/MoviesListView";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="list" element={<MoviesListView />} />
      <Route path="detail" element={<MoviesDetailView />} />
      <Route path="login" element={<LoginView />} />

      <Route path="/" element={<Navigate to="/list" />} />
    </Routes>
  );
};

export default AppRouter;
