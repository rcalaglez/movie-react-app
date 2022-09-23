import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../../custom";
import { MoviesDetailView, MoviesListView } from "../views";

export const MoviesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="list" element={<MoviesListView />} />
          <Route path="detail" element={<MoviesDetailView />} />

          <Route path="/" element={<Navigate to="/list" />} />
        </Routes>
      </div>
    </>
  );
};
