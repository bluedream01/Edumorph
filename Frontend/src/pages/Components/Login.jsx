import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', formData);
      console.log("✅ Login Success:", res.data);

      // Save token and user data to localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.user.username);
      localStorage.setItem('email', res.data.user.email); // <-- Add this

      alert(`✅ Welcome ${res.data.user.username}!`);
      navigate('/'); // Redirect to home page instead of dashboard
    } catch (err) {
      console.error("❌ Login Error:", err.response?.data || err.message);
      alert(`❌ ${err.response?.data?.message || 'Login failed'}`);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Let's start the journey</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

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

        <p className="signup-text">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
