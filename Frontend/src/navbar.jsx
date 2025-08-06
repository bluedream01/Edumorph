import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Edulogo from './assets/edumorph.svg';
import defaultProfilePic from './assets/user.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState(defaultProfilePic);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedImage = localStorage.getItem('profileImage');
    setIsLoggedIn(!!token);

    if (storedImage) {
      setProfileImage(storedImage);
    } else {
      setProfileImage(defaultProfilePic);
    }
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("profileImage");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const isProfilePage = location.pathname === '/profile';

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
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/summary" className="nav-link">Summary</Link>
        <Link to="/notes" className="nav-link">Notes</Link>
        <Link to="/courses" className="nav-link">Courses</Link>
        <Link to="/quizzes" className="nav-link">Quizzes</Link>

        {isLoggedIn ? (
          isProfilePage ? (
            <button className="btn" onClick={handleLogout}>Logout</button>
          ) : (
            <img
              src={profileImage}
              alt="Profile"
              onClick={handleProfileClick}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer'
              }}
            />
          )
        ) : (
          <button className="btn" onClick={handleSignUp}>
            Get Started
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
