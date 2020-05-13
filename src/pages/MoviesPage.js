import React, { Component } from 'react';
import FormQuery from '../components/FormQuery';
import { Route } from 'react-router-dom';

// import PropTypes from 'prop-types';

export class MoviesPage extends Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <Route path={`${this.props.match.path}`} component={FormQuery} />
      </div>
    );
  }
}

export default MoviesPage;
