import React from 'react';
import { NavLink } from 'react-router-dom';
const styledLink = { color: 'red' };
const Nav = () => (
  <ul>
    <li>
      <NavLink to="/" exact activeStyle={styledLink}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" activeStyle={styledLink}>
        Movies
      </NavLink>
    </li>
  </ul>
);
export default Nav;
