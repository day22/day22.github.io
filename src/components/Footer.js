import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4 fixed-bottom">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="social-links mb-3 mb-md-0">
          <a href="https://github.com/day22" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/aidan-day-991901198/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.instagram.com/aidan_day_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div className="footer-copy text-center text-md-end">
          &copy; {new Date().getFullYear()} Aidan Day. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
