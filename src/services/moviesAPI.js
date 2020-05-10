import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3001';
const key = '38bb43799c173bf75633ed2786933102';
export const fetchMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  );
  return response.data.results;
};
export const fetchMovie = async query => {
  const fetchMovie = await axios.get(
    `https://api.themoviedb.org/3/search/company?api_key=${key}&query=${query}&page=1`,
  );
  return fetchMovie.data.results;
};
export const fetchId = async id => {
  const fetchId = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,
  );
  return fetchId.data;
};
export const fetchActor = async id => {
  const fetchActor = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`,
  );
  return fetchActor.data.cast;
};
export const fetchFullInfo = async id => {
  const fetchFullInfo = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,
  );
  return fetchFullInfo.data;
};
export const fetchReviews = async id => {
  const fetchReviews = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
  );
  return fetchReviews.data.results;
};
