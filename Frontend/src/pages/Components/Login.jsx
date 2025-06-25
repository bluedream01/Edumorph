import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Let's start the journey</p>
        <form>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" required />
              <span className="checkmark"></span>
              I agree to the 
              <a href="#" className="link"> Privacy Policy</a> &nbsp;
              <a href="#" className="link">Terms</a>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </label>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="divider"><span>Or</span></div>

        <button className="social-btn google">
          <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
          Sign in with Google
        </button>

        <p className="signup-text">Don’t have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
}
