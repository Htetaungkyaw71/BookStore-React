/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="navBar">
        <h1>BookStore CMS</h1>
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn" type="button">CATEGORIES</button>
              <div className="dropdown-content">
                <Link to="/categories/comedy">Comedy</Link>
                <Link to="/categories/adventure">Adventure</Link>
                <Link to="/categories/crime">Crime</Link>
                <Link to="/categories/fantasy">Fantasy</Link>
                <Link to="/categories/horror">Horror</Link>
                <Link to="/categories/history">History</Link>
              </div>
            </div>

          </li>

        </ul>

      </div>

    </div>

  );
}

export default Navbar;
