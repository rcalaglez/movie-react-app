import React from "react";
import { Link } from "react-router-dom";

import { category } from "../../api/tmDBApi";
import apiConfig from "../../api/apiConfig";
import "./movie-card.scss";

const MovieCard = (props) => {
  const movie = props.movieData;
  const link = "/" + category["movie"] + "/" + movie.id;

  const getMovieRateColor = (rate) => {
    if (rate < 5) return "#af2413";
    else if (rate < 6.5) return "#c67c38";
    else if (rate < 7.5) return "#f6d155";
    return "#367055";
  };

  const getMovieRatePercentage = (rate) => {
    return rate * 10 + "%";
  };

  return (
    <Link to={link}>
      <div className="movie-card animate__animated animate__fadeInUp">
        <img src={apiConfig.w500Image(movie.poster_path)} alt="" />
        <span className={`title ${movie.title.length >= 18 ? "slide" : null}`}>
          {movie.title}
        </span>
        <span className="release-date">{movie.release_date}</span>
        <span className="popularity">{movie.vote_average}</span>
        <div className="progress">
          <div
            className="bar"
            style={{
              width: getMovieRatePercentage(movie.vote_average),
              backgroundColor: getMovieRateColor(movie.vote_average),
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
