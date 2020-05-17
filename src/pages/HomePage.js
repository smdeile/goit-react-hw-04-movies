import React, { Component } from 'react';
import * as moviesAPI from '../services/moviesAPI';
import MoviesList from './MoviesList';

export default class Movies extends Component {
  state = { movies: [] };
  componentDidMount() {
    moviesAPI.fetchMovies().then(movies => {
      this.setState({ movies });
    });
  }

  render() {
    const { movies } = this.state;
    const location = this.props.location;
    console.log(this.props);
    return (
      <div>
        <h1>Trending today</h1>
        <MoviesList movies={movies} location={location} />
      </div>
    );
  }
}
