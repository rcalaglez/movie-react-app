import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import tmDBApi from "../../api/tmDBApi";
import apiConfig from "../../api/apiConfig";

import "./movies-detail.scss";

export const MoviesDetailView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmDBApi.detail("movie", id, { params: {} });
      console.log(response);

      setMovie(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [id]);

  return (
    <>
      {movie ? (
        <>
          <div className="mb-3 movie-content container animate__animated animate__fadeInUp">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    movie.poster_path || movie.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{movie.title || movie.name}</h1>

              <div className="genres">
                {movie.genres &&
                  movie.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__movie">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{movie.overview}</p>
            </div>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
