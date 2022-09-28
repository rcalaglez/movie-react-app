import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";

import tmDBApi from "../../api/tmDBApi";
import apiConfig from "../../api/apiConfig";

import "./movies-detail.scss";
import { UserContext } from "../../auth";
import Button from "../../custom/components/Button";

export const MoviesDetailView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [rate, setRate] = useState(null);
  const { isUser, guestSession } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmDBApi.detail("movie", id, { params: {} });
      setMovie(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [id]);

  const goLoginViewSavingInfo = () => {
    navigate("/login", {
      replace: true,
    });
  };

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
              <div className="rate">
                {isUser ? (
                  <>
                    <TextField
                      value={rate || ""}
                      onChange={(e) => {
                        setRate(e.target.value);
                      }}
                      label="Rate the movie"
                      variant="standard"
                    />
                    <Button>Rate the movie</Button>
                  </>
                ) : (
                  <p>
                    Would you like to rate the film? You must be
                    <a
                      href=""
                      className="rate__link"
                      onClick={goLoginViewSavingInfo}
                    >
                      logged in.
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
