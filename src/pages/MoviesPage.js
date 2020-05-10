import React, { Component } from 'react';
import FormQuery from '../components/FormQuery';
import { Route } from 'react-router-dom';

// import PropTypes from 'prop-types';

export class MoviesPage extends Component {
  static propTypes = {};
  render() {
    console.log(this.props);

    return (
      <div>
        <Route path="/movies" component={FormQuery} />
      </div>
    );
  }
}

export default MoviesPage;
