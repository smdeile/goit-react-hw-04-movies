import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3001';

export const fetchMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=38bb43799c173bf75633ed2786933102`,
  );
  return response.data.results;
};
export const fetchMovie = async query => {
  const fetchMovie = await axios.get(
    `https://api.themoviedb.org/3/search/company?api_key=38bb43799c173bf75633ed2786933102&query=${query}&page=1`,
  );
  return fetchMovie.data.results;
};
export const fetchId = async id => {
  console.log(id);
  const fetchId = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=38bb43799c173bf75633ed2786933102&language=en-US`,
  );
  console.log(fetchId.data);
  return fetchId.data;
};
