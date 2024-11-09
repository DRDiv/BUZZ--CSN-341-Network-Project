import React from "react";
import './About.css'; // Importing the About page CSS

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About BUZZ CHAT</h1>
        <p className="about-description">
          BUZZ CHAT is a modern chat application designed to help people stay connected in real-time. 
          With a sleek user interface and a fast, responsive backend, BUZZ CHAT offers seamless communication
          for friends, family, or team members.
        </p>
        <h2 className="about-section-title">Our Mission</h2>
        <p className="about-mission">
          Our mission is to provide a simple, effective, and secure platform for communication, 
          where users can chat with anyone across the globe instantly. We believe that communication is key to building stronger relationships.
        </p>
        <h2 className="about-section-title">Who We Are</h2>
        <p className="about-team">
          BUZZ CHAT was developed by a team of passionate engineers and designers who wanted to create an app 
          that provides the best chat experience. Our goal is to make chatting faster, easier, and more fun!
        </p>
      </div>
    </div>
  );
}

export default About;
