import React, { useState, useEffect } from "react";

import "./movie-list.scss";
import tmDBApi from "../../api/tmDBApi";
import Button from "../../custom/components/Button";
import MovieCard from "../components/MovieCard";

export const MoviesListView = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getPopularMovies = async () => {
      let response = null;
      const params = {};

      response = await tmDBApi.getMoviesList("popular", { params });
      setMovies(response.results);
      setTotalPage(response.total_pages);
    };

    getPopularMovies();
  }, []);

  const loadMore = async () => {
    let response = null;
    const params = {
      page: page + 1,
    };

    response = await tmDBApi.getMoviesList("popular", { params });
    setMovies([...movies, ...response.results]);
    setPage(page + 1);
  };

  return (
    <div className="section mb-3">
      <div className="section__header mb-2">
        <h2>Trending Movies</h2>
      </div>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard key={index} movieData={movie} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <Button className="btn" onClick={loadMore}>
            Load more
          </Button>
        </div>
      ) : null}
    </div>
  );
};
