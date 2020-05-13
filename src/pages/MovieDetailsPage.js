import React, { Component } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import * as moviesAPI from '../services/moviesAPI';

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    actors: null,
    fullInfo: null,
    reviews: null,
    error: null,
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    moviesAPI
      .fetchId(id)
      .then(movie => this.setState({ movie }))
      .catch(error => this.setState({ error }));
    moviesAPI
      .fetchActor(id)
      .then(actors => this.setState({ actors }))
      .catch(error => this.setState({ error }));
    moviesAPI
      .fetchFullInfo(id)
      .then(fullInfo => this.setState({ fullInfo }))
      .catch(error => this.setState({ error }));
    moviesAPI
      .fetchReviews(id)
      .then(reviews => this.setState({ reviews }))
      .catch(error => this.setState({ error }));
  }
  handleClick = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.history.push('/movies');
  };
  render() {
    const styledLink = { color: 'red' };
    const { movie, actors, error, reviews } = this.state;

    const CastComponent = () => {
      return (
        <>
          <ul>
            {actors.map(actor => (
              <li key={actor.id}>
                {actor.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                    alt="image"
                    width="50px"
                  />
                )}
                <p>{actor.name}</p>
                <p>{`Character: ${actor.character}`}</p>
              </li>
            ))}
          </ul>
        </>
      );
    };
    const ReviewsComponent = () => {
      if (reviews !== null) {
        return <p>Reviews not found</p>;
      } else {
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
      }
    };
    return (
      <div>
        {movie && (
          <>
            <div>
              <button onClick={this.handleClick}>Go back</button>
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
                  <NavLink
                    to={`/movies/${movie.id}/cast`}
                    activeStyle={styledLink}
                  >
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
              <Route path={`/movies/:id/cast`} component={CastComponent} />
              <Route
                path={`/movies/:id/reviews`}
                component={ReviewsComponent}
              />
            </Switch>
          </>
        )}
        {error && (
          <div>
            <button onClick={this.handleClick}>Go back</button>
            <p>movie not found</p>
            <img
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/12/Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-...-8-1-796x417.png"
              alt="dead"
            />
          </div>
        )}
      </div>
    );
  }
}
