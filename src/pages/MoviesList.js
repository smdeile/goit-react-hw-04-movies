import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import MoviePage from './MovieDetailsPage';

const MoviesList = ({ movies = [] }) => (
  <ul>
    {movies.map(
      movie =>
        movie.title && (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ),
    )}
  </ul>
);
export default MoviesList;
