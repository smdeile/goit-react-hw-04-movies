import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesPage from '../pages/MoviesPage';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/Movie';
import NotFoundPage from '../pages/NotFound';
import Nav from './Nav';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}
