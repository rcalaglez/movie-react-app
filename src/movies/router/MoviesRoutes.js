import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../../custom";
import { MoviesDetailView, MoviesListView } from "../views";

export const MoviesRoutes = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container animate__animated animate__fadeIn">
        <Routes>
          <Route path="list" element={<MoviesListView />} />
          <Route path="movie/:id" element={<MoviesDetailView />} />

          <Route path="/" element={<Navigate to="/list" />} />
        </Routes>
      </main>
    </>
  );
};
