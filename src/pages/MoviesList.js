import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

export default class MoviesList extends Component {
  render() {
    const { movies } = this.props;
    const { location } = this.props;
    return (
      <ul>
        {movies.map(
          movie =>
            movie.title && (
              <li key={movie.id}>
                <NavLink
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  {movie.title}
                </NavLink>
              </li>
            ),
        )}
      </ul>
    );
  }
}
