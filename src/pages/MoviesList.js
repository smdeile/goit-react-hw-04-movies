import React from 'react';
import { NavLink } from 'react-router-dom';

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
