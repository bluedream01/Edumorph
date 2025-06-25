import React from 'react';
import './signup.css';

export default function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Create Account</h2>
        <p>Join us and start your journey</p>

        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          <div className="signup-options">
            <label className="checkbox-inline">
              <input type="checkbox" />
              I agree to the <a href="#">Privacy Policy</a> & <a href="#">Terms</a>
            </label>
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="login-redirect">
          Already have an account? <a href="/login" className='login'>Login</a>
        </p>
      </div>
    </div>
  );
}
