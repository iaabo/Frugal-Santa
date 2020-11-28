import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar-container">
        <ul>
          <li>
            <Link to="/home">The Frugal Santa</Link>
          </li>
          <li>
            <Link to="/the-frugal-santa">Landing Page</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
