import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.module.css';

const Nav = () => {
  const location = useLocation();
  return (
    <nav>
      <h1>math magicians</h1>
      <ul>
        <li className={location.pathname === '/' ? 'selected' : ''}><Link to="/">home</Link></li>
        <li className={location.pathname === '/calculator' ? 'selected' : ''}><Link to="/calculator">calculator</Link></li>
        <li className={location.pathname === '/quote' ? 'selected' : ''}><Link to="/quote">quote</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
