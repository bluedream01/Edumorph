import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type === 'checkbox' ? 'terms' : e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:4000/api/auth/register', formData);
      console.log(response.data); // ✅ See backend response
      alert('✅ Account created successfully!');
      
    } catch (err) {
      console.error("❌ SIGNUP ERROR:", err);
      alert(`❌ ${err.response?.data?.message || err.message || 'Something went wrong'}`);
    }

  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Create Account</h2>
        <p>Join us and start your journey</p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email address" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />

          <div className="signup-options">
            <label className="checkbox-inline">
              <input type="checkbox" required /> I agree to the <a href="#">Privacy Policy</a> & <a href="#">Terms</a>
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
