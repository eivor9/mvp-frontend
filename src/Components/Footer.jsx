// Components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/" className="footer-link"> MVP </Link> |
        <Link to="/about" className="footer-link"> About </Link> |
        <Link to="/link1" className="footer-link"> Link 1 </Link> |
        <Link to="/link2" className="footer-link"> Link 2 </Link> |
        <Link to="/link3" className="footer-link"> Link 3 </Link>
      </nav>
      <p className="footer-copyright"> &copy; 2024 Mentor Volunteer Platform. All rights reserved. </p>
    </footer>
  );
};

export default Footer;