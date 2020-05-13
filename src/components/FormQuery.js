import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as MoviesAPI from '../services/moviesAPI';
import MoviePage from '../pages/MovieDetailsPage';
import { withRouter, NavLink } from 'react-router-dom';

export class FormQuery extends Component {
  static propTypes = {};
  state = { query: '', movies: [] };
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
  }

  handleSubmit = e => {
    e.preventDefault();
    const queryMovie = this.state.query;
    this.fetchMovie(queryMovie);
    console.log(this.props);
    console.log(this.props.location);

    this.props.history.push({
      ...this.props.location,
      search: `?query=${queryMovie}`,
    });
    this.setState({ query: '' });
  };
  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  fetchMovie = query => {
    MoviesAPI.fetchMovie(query).then(movies => this.setState({ movies }));
    console.log(this.state);
  };
  render() {
    const { movies } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="Find your movie"
            type="text"
            name="query"
            value={this.state.query}
          ></input>
          <button>Find</button>
        </form>
        {this.state.movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>{movie.name}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default FormQuery;
