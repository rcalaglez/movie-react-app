import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
};

export const movieType = {
  popular: "popular",
};

const tmDBApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  detail: (cat, id, params) => {
    const url = category[cat] + "/" + id;
    return axiosClient.get(url, params);
  },
};

export default tmDBApi;
