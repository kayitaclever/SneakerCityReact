import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './style.css';

function Navbar() {
  const navigate = useNavigate(); // Initialize navigate function

  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  // Function to handle navigation to the Shop page
  const handleNavigateToShop = () => {
    navigate('/shop'); // Navigate to the Shop page
  };

  return (
    <nav>
      <div className={`navbar-wrapper ${isNavOpen ? 'nav-open' : ''}`}>
        <span className="brand-container">
          <a className="logo-link" href="#logo">
            <img
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              alt="Logo"
              className="logo-img"
            />
          </a>
          <a className="brand-name" href="#logoBrand">
            SneakerCity
          </a>
        </span>
        <div
          data-testid="hamburger-menu"
          className={`hamburger-menu ${isNavOpen ? 'open' : ''}`}
          onClick={toggleNav}
        >
          {isNavOpen ? (
            <div className="close-icon">
              <span></span>
              <span></span>
            </div>
          ) : (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          )}
        </div>
        <ul data-testid="nav-list" className={`nav-list ${isNavOpen ? 'open' : ''}`}>
          <div className="centered-links">
            <li><a href="Home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Product">How To Shop</a></li>
            <li><a onClick={handleNavigateToShop}>Our Shoes</a></li> {}
            <li><a href="#Contact-Us">Contact Us</a></li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
