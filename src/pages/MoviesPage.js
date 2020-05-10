import React, { Component } from 'react';
import FormQuery from '../components/FormQuery';

// import PropTypes from 'prop-types';

export class MoviesPage extends Component {
  static propTypes = {};
  render() {
    console.log(this.props);

    return (
      <div>
        <FormQuery props={this.props} />
      </div>
    );
  }
}

export default MoviesPage;
