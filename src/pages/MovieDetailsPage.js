import React, { Component } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
// import ActorComponent from './ActorComponent';
import * as moviesAPI from '../services/moviesAPI';

export default class MovieDetailsPage extends Component {
  state = {};

  render() {
    const { movie, actors, reviews } = this.props;
    const styledLink = { color: 'red' };

    const CastComponent = () => {
      return (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                  alt="actors photo"
                  width="50px"
                />
              )}
              <p>{actor.name}</p>
              <p>{`Character: ${actor.character}`}</p>
            </li>
          ))}
        </ul>
      );
    };
    const ReviewsComponent = () => {
      return (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      );
    };
    return (
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div>
          <h2>{movie.title}</h2>
          <p>User score {movie.vote_average * 10 + '%'}</p>
          <h3>Overview </h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <ul>
            <li>
              <NavLink to={`/movies/${movie.id}/cast`} activeStyle={styledLink}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/movies/${movie.id}/reviews`}
                activeStyle={styledLink}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route
            path={`/movies/:id/cast`}
            component={CastComponent}
          />
          <Route
            path={`/movies/:id/reviews`}
            component={ReviewsComponent}
          />
        </Switch>
      </div>
    );
  }
}
