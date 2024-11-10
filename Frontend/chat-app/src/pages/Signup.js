import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./signup.css";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await fetch('http://localhost:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: username, password: password }),
        });
  
        const result = await response.text();
        navigate("/chat");
      } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form');
      }
    } else {
      alert("Passwords do not match!");
    }
  };
  

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="signup-button-container">
          <button type="submit" className="signup-btn">Sign Up</button>
          </div>

          <p className="login-link">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
