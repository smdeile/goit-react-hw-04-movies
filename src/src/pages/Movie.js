import React, { Component } from 'react';
import * as MoviesAPI from '../services/moviesAPI';

const getIdFromProps = props => props.match.params.id;

export default class Movie extends Component {
  state = { articles: [] };
  id = getIdFromProps(this.props);

  fetchMovies = id => {
    MoviesAPI.fetchId(id)
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
  componentDidMount() {
    this.fetchMovies(this.id);
  }
  onGoBack = () => {
    const { history, location } = this.props;
    history.push(location.state.from);
  };
  render() {
    const { articles } = this.state;

    return (
      <>
        <p>{articles.title}</p>
        <button onClick={this.onGoBack}>Go back</button>
      </>
    );
  }
}
