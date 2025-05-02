import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'; // move your image to public or src/assets

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ width: 90, height: 55 }} />
        </Link>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crop">Crop</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
