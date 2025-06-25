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
          
          {/* <div className="options-inline">
  <label className="checkbox-inline">
    <input type="checkbox" />
    I agree to the <a href="#">Privacy Policy</a> & <a href="#">Terms</a>
  </label>
  <a href="#" className="forgot-link">Forgot Password?</a>
</div> */}
        <div class="form-options">
  <label class="checkbox-container">
    <input type="checkbox" required />
    <span class="checkmark"></span>
    I agree to the 
    <a href="#" class="link">Privacy Policy</a> &amp; 
    <a href="#" class="link">Terms</a>
  
  <a href="#" class="forgot-password">Forgot Password?</a></label>
</div>


          
          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="divider"><span>Or</span></div>

        <button className="social-btn google">
          <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
          Sign in with Google
        </button>
        {/* <button className="social-btn facebook">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
          Continue with Facebook
        </button> */}

        <p className="signup-text">Don’t have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
}
