import React, { Component } from 'react';
import * as moviesAPI from '../services/moviesAPI';
import MovieDetailsPage from './MovieDetailsPage';

export default class Movie extends Component {
  state = { movie: null, actors: null, fullInfo: null, reviews: null };
  componentDidMount() {
    const { id } = this.props.match.params;
    moviesAPI.fetchId(id).then(movie => this.setState({ movie }));
    moviesAPI.fetchActor(id).then(actors => this.setState({ actors }));
    moviesAPI.fetchFullInfo(id).then(fullInfo => this.setState({ fullInfo }));
    moviesAPI.fetchReviews(id).then(reviews => this.setState({ reviews }));
  }

  render() {
    console.log(this.state);
    const { movie, actors, fullInfo, reviews } = this.state;
    console.log(reviews);
    return (
      <div>
        {movie && actors && fullInfo && reviews && (
          <div>
            <MovieDetailsPage
              movie={movie}
              actors={actors}
              fullInfo={fullInfo}
              reviews={reviews}
            />
          </div>
        )}
      </div>
    );
  }
}
