import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
};

export const movieType = {
  popular: "popular",
};

/**
 * Custom API with some endpoints of The Movie Database API
 * that uses an instance of Axios to fetch data.
 */
const tmDBApi = {
  // It gets the most popular movies list
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },

  // It gets detail information about a movie by its id
  detail: (cat, id, params) => {
    const url = category[cat] + "/" + id;
    return axiosClient.get(url, params);
  },

  getToken: (params) => {
    const url = "authentication/token/new";
    return axiosClient.get(url, params);
  },

  // It returns a guest_session_id
  loginAsGuest: (params) => {
    const url = "authentication/guest_session/new";
    return axiosClient.get(url, params);
  },

  // It rates a movie of a logged user
  rateMovie: (id, userRating, params) => {
    const url = "movie/" + id + "/rating";
    return axiosClient.post(url, userRating, params);
  },
};

export default tmDBApi;
