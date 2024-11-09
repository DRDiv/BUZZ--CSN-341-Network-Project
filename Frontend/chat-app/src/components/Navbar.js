import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';  // Importing the updated CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Updated logo text */}
        <Link to="/" className="navbar-logo">
          BUZZ CHAT
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/chat" className="navbar-link">Chat</Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">About Us</Link>
          </li>
          <li>
            <Link to="/login" className="navbar-link login-btn">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
