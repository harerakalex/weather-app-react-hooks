import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#F15B2A' };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/weather" activeStyle={activeStyle}>
        weather
      </NavLink>
    </nav>
  );
};

export default Header;