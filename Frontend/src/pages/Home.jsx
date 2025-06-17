import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import HinataImage from '../assets/girl1.jpg';
import LuffyImage from '../assets/boy1.jpg';
import RobinImage from '../assets/girl2.jpg';
import WorkImage from '../assets/work.jpg';

export default function Home() {
    const handleSignUpRedirect = () => {
        window.location.href = '/signup'; // Redirect to sign-up page
    };

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <>
            {/* <header className="header">
                <div className="logo">EduMorph</div>

                <button className="burger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/features" className="nav-link">Features</Link>
                    <Link to="/pricing" className="nav-link">Pricing</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <button className="btn" onClick={handleSignUpRedirect}>
                        Get Started
                    </button>
                </nav>
            </header> */}

            <section className="hero">
                <div className="hero-content">
                    {/* <img src={WorkImage} className="hero-image" alt="Students studying with EduMorph" /> */}
                    <h1 className="hero-title">Unlock Your Academic Potential with AI</h1>
                    <p className="hero-text">StudyGenius leverages cutting-edge AI to transform your study experience. Upload your notes, ask questions, and get summaries and quizzes to master any subject.</p>
                    <button className="hero-btn" onClick={handleSignUpRedirect}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className="features">
                <h2 className="section-title">Key Features</h2>
                <p className="section-subtitle">
                    Explore the powerful tools that StudyGenius offers to enhance your learning journey.
                </p>
                <div className="features-grid">
                    <Link to="/upload-notes" className="feature-link">
                        <div className="feature-card">
                            <div className="feature-icon">⬆️</div>
                            <h3 className="feature-title">Upload Notes</h3>
                            <p className="feature-text">
                                Easily upload your lecture notes, study guides, and other materials in various formats.
                            </p>
                            <p className="feature-action">
                                <strong>Do:</strong> Upload your files to organize and access them anytime.
                            </p>
                        </div>
                    </Link>
                    <Link to="/ask-questions" className="feature-link">
                        <div className="feature-card">
                            <div className="feature-icon">❓</div>
                            <h3 className="feature-title">Ask Questions</h3>
                            <p className="feature-text">
                                Get instant answers to your questions with our clarity-powered AI Q&A feature.
                            </p>
                            <p className="feature-action">
                                <strong>Do:</strong> Type your question to receive quick, accurate answers.
                            </p>
                        </div>
                    </Link>
                    <Link to="/summary" className="feature-link">
                        <div className="feature-card">
                            <div className="feature-icon">📝</div>
                            <h3 className="feature-title">Summaries</h3>
                            <p className="feature-text">
                                Generate concise summaries of your key notes to review concepts and save time.
                            </p>
                            <p className="feature-action">
                                <strong>Do:</strong> Select your notes to create summaries for efficient review.
                            </p>
                        </div>
                    </Link>
                    <Link to="/quizzes" className="feature-link">
                        <div className="feature-card">
                            <div className="feature-icon">💡</div>
                            <h3 className="feature-title">Quizzes</h3>
                            <p className="feature-text">
                                Create custom quizzes based on your uploaded notes to test your knowledge and identify areas for improvement.
                            </p>
                            <p className="feature-action">
                                <strong>Do:</strong> Generate quizzes to practice and track your progress.
                            </p>
                        </div>
                    </Link>
                </div>
            </section>

            <section class="success-stories">
                <h2 class="section-title">Success Stories</h2>
                <div class="stories-grid">
                    <div class="story-card">
                        <img src={HinataImage} class="story-image" alt="Student 1" />
                        <p class="story-text">“StudyGenius has been a game-changer for my studies...”</p>
                        <p class="story-author">- Sarah Miller, University Student</p>
                    </div>
                    <div class="story-card">
                        <img src={LuffyImage} class="story-image" alt="Student 2" />
                        <p class="story-text">“I was struggling with complex topics...”</p>
                        <p class="story-author">- David Chan, College Student</p>
                    </div>
                    <div class="story-card">
                        <img src={RobinImage} class="story-image" alt="Student 3" />
                        <p class="story-text">“Thanks to StudyGenius, I can now study more effectively...”</p>
                        <p class="story-author">- Emily Rodriguez, High School Student</p>
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
    )
}
