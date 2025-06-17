import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/imgs/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm py-2">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="Logo" width="40" height="40" className="rounded-circle me-2" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-2">
              <li className="nav-item">
                <Link className="nav-link custom-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
