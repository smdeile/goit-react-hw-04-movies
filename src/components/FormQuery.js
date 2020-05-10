import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as MoviesAPI from '../services/moviesAPI';
import MoviesList from '../pages/MoviesList';

export class FormQuery extends Component {
  static propTypes = {};
  state = { query: '', movies: [] };
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }

  handleSubmit = e => {
    e.preventDefault();
    const queryMovie = this.state.query;
    this.fetchMovie(queryMovie);
    // this.props.history.push({
    //   ...this.props.location,
    //   search: `?query=${queryMovie}`,
    // });
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
        {console.log(this.state.movies.length) &&
          this.state.movies.length > 0 && <MoviesList items={this.state} />}
      </div>
    );
  }
}

export default FormQuery;
