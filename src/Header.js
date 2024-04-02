// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Streaming App</h1>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><Link to="/">Home</Link></li>
            <li className="nav__item"><Link to="/category/gaming">Gaming</Link></li>
            <li className="nav__item"><Link to="/category/music">Music</Link></li>
            <li className="nav__item"><Link to="/category/tech">Tech</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
