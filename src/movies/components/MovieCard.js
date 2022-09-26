import React from "react";
import Button from "../../custom/components/Button";

import "./movie-card.scss";

const MovieCard = (props) => {
  const movie = props.item;

  return (
    <>
      <div className="movie-card">
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{movie.title}</h3>
    </>
  );
};

export default MovieCard;
