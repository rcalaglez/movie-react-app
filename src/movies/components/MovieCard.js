import React from "react";
import { Link } from "react-router-dom";

import { category } from "../../api/tmDBApi";
import apiConfig from "../../api/apiConfig";
import "./movie-card.scss";

const MovieCard = (props) => {
  const movie = props.movieData;
  const link = "/" + category["movie"] + "/" + movie.id;

  return (
    <Link to={link}>
      <div className="movie-card animate__animated animate__fadeInUp">
        <img src={apiConfig.w500Image(movie.poster_path)} alt="" />
        <span className="title">{movie.title}</span>
        <span className="release-date">{movie.release_date}</span>
        <span className="popularity">{movie.vote_average}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
