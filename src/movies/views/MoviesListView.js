import React, { useState, useEffect } from "react";

import tmDBApi from "../../api/tmDBApi";

export const MoviesListView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getPopularMoviesList = async () => {
      let response = null;
      const params = {};

      response = await tmDBApi.getMoviesList("popular", { params });
      setMovies(response.results);
    };

    getPopularMoviesList();
  }, []);

  return (
    <>
      <h1>Most Popular</h1>
      <hr />
      {movies.map((item, index) => (
        <span>Peli {index}</span>
      ))}
    </>
  );
};
