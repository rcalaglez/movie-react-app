import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import InputText from "../../custom/components/InputText";
import { useFormValidation } from "../../custom/hooks/useFormValidation";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import tmDBApi from "../../api/tmDBApi";
import apiConfig from "../../api/apiConfig";

import "./movies-detail.scss";
import { UserContext } from "../../auth";
import Button from "../../custom/components/Button";

export const MoviesDetailView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { isUser, guestSession } = useContext(UserContext);

  const { handleSubmit, handleChange, data, errors } = useFormValidation({
    validations: {
      rate: {
        required: {
          value: true,
          message: "This field cannot be empty",
        },
        custom: {
          isValid: (value) => Number(value) >= 0.5 && Number(value) <= 10,
          message: "Rate should be between 0.5 and 10",
        },
      },
    },
    initialValues: {
      rate: "",
    },
    onSubmit: () => sendMovieRatingByCurrentUser(id, data.rate, guestSession),
  });

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

  const sendMovieRatingByCurrentUser = async (id, rate, guestSessionId) => {
    const params = {
      guest_session_id: guestSessionId,
    };
    console.log(Number(rate));
    await tmDBApi.rateMovie(id, Number(rate), {
      params,
    });

    toast.success("Your rate has been sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      {movie ? (
        <>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
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
                    <InputText
                      required
                      color="white"
                      type="number"
                      id="rating"
                      value={data.rate || ""}
                      label="Rate"
                      errorMessage={errors.rate}
                      onChange={handleChange("rate")}
                    />
                    <Button onClick={(e) => handleSubmit()}>Send</Button>
                  </>
                ) : (
                  <p>
                    Would you like to rate this film? You must be
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
