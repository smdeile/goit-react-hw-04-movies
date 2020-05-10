import React, { Component } from 'react';
import * as MoviesAPI from '../services/moviesAPI';
import MoviesList from './MoviesList';

export default class HomePages extends Component {
  state = { articles: [] };
  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    MoviesAPI.fetchMovies()
      .then(articles =>
        this.setState({
          articles,
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { articles } = this.state;
    console.log(articles);
    return (
      <div>
        <h1>Trending today</h1>
        <MoviesList items={articles} />
      </div>
    );
  }
}
