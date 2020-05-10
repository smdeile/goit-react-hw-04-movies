import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class List extends Component {
  render() {
    const { items, location } = this.props;
    console.log(items);
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
