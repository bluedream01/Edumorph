import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Edulogo from './assets/edumorph.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignUpRedirect = () => {
    // You can use useNavigate from react-router-dom if needed
    window.location.href = "/signup"; // or navigate("/signup")
  };

  return (
     <header className="header">
      <Link to="/" className="logo">
        <img src={Edulogo} alt="Logo" className="logo-icon" />
        <span className="logo-text">EduMorph</span>
      </Link>


      <button className="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <Link to="/" classname="nav-link">Home</Link>
        <Link to="/features" className="nav-link">Features</Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <button className="btn" onClick={handleSignUpRedirect}>
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
