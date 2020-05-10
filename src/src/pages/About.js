import React, { Component } from 'react';
import * as MoviesAPI from '../services/moviesAPI';
import MoviesList from './MoviesList';
import FormQuery from '../../components/FormQuery';
export default class ArticlesPages extends Component {
  state = { query: '', movies: [] };

  handleSubmit = e => {
    e.preventDefault();
    const queryMovie = this.state.query;
    this.fetchMovie(queryMovie);
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
    console.log(query);
    MoviesAPI.fetchMovie(query)
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { movies } = this.state;
    console.log(movies.length > 0);
    console.log(movies);
    console.log(this.state);
    return (
      <>
        <FormQuery
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.query}
        />
        {/* {movies.length > 0 && <MoviesList items={movies} />} */}
      </>
    );
  }
}
