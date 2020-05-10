import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

export default class List extends Component {
  render() {
    const { items, location } = this.props;
    return (
      <ul>
        {items.map(
          item =>
            item.title && (
              <li key={item.id}>
                <Link
                  to={{
                    pathname: `/movies/${item.id}`,
                    state: { from: location },
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ),
        )}
      </ul>
    );
  }
}
