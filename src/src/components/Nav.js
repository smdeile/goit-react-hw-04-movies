import React from 'react';
import { NavLink } from 'react-router-dom';
const activeStyle = { color: 'red' };
const Nav = () => (
  <ul>
    {/* <li>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
    </li> */}
    <li>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" activeStyle={activeStyle}>
        Movies
      </NavLink>
    </li>
  </ul>
);
export default Nav;
