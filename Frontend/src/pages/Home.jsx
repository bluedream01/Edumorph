import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import HinataImage from '../assets/girl1.jpg';
import LuffyImage from '../assets/boy1.jpg';
import RobinImage from '../assets/girl2.jpg';

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Maximize Your Academic Performance with AI</h1>
          <p className="hero-text">
            EduMorph harnesses advanced AI to elevate your learning experience. Upload notes, ask questions, and receive summaries and quizzes to master any subject.
          </p>
          {!isLoggedIn && (
            <button className="hero-btn" onClick={() => navigate('/login')}>
              Get Started
            </button>
          )}
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Key Features</h2>
        <p className="section-subtitle">Discover the advanced features EduMorph provides to elevate your educational journey.</p>
        <div className="features-grid">
          <Link to="/notes" className="feature-link">
            <div className="feature-card">
              <div className="feature-icon">⬆</div>
              <h3 className="feature-title">Upload Notes</h3>
              <p className="feature-text">Upload lecture notes, guides, and more in various formats.</p>
              <p className="feature-action">
                <strong>Do:</strong> Upload your files to organize and access them anytime.
              </p>
            </div>
          </Link>
          <Link to="/mindmap" className="feature-link">
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">Mindmap</h3>
              <p className="feature-text">Create mind maps from your notes to better understand key concepts.</p>
              <p className="feature-action">
                <strong>Do:</strong> Convert your uploaded content into structured mind maps.
              </p>
            </div>
          </Link>
          <Link to="/summary" className="feature-link">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3 className="feature-title">Summaries</h3>
              <p className="feature-text">Generate clear summaries of YouTube videos for efficient review.</p>
              <p className="feature-action">
                <strong>Do:</strong> Input your video link to generate summaries for effective review.
              </p>
            </div>
          </Link>
          <Link to="/quizzes" className="feature-link">
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3 className="feature-title">Quizzes</h3>
              <p className="feature-text">Generate quizzes from your uploaded notes and test your knowledge.</p>
              <p className="feature-action">
                <strong>Do:</strong> Upload PDF of your notes to generate quizzes
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="success-stories">
        <h2 className="section-title">Success Stories</h2>
        <div className="stories-grid">
          <div className="story-card">
            <img src={HinataImage} className="story-image" alt="Student 1" />
            <p className="story-text">“EduMorph has been a game-changer for my studies...”</p>
            <p className="story-author">- Sarah Miller</p>
          </div>
          <div className="story-card">
            <img src={LuffyImage} className="story-image" alt="Student 2" />
            <p className="story-text">“I was struggling with complex topics...”</p>
            <p className="story-author">- David Chan</p>
          </div>
          <div className="story-card">
            <img src={RobinImage} className="story-image" alt="Student 3" />
            <p className="story-text">“Thanks to EduMorph, I can now study more effectively...”</p>
            <p className="story-author">- Emily Rodriguez</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-row">
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <span className="footer-text">©2025 EduMorph. All rights reserved.</span>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        </div>
      </footer>
    </>
  );
}
