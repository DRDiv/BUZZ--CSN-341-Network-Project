import React from "react";
import { FaComments, FaLock, FaDesktop } from "react-icons/fa"; // Import icons from React Icons
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-box">
        <h1 className="home-title">Welcome to BUZZ CHAT</h1>
        <p className="home-description">
          Chat with friends and connect with people around the world in real-time.
        </p>
        <div className="card-container">
          <div className="card">
            <FaComments size={50} color="#fff" /> {/* Icon for messaging */}
            <h3 className="card-title">Instant Messaging</h3>
            <p className="card-description">
              Send and receive messages instantly. Stay connected in real-time.
            </p>
          </div>
          <div className="card">
            <FaLock size={50} color="#fff" /> {/* Icon for security */}
            <h3 className="card-title">Secure & Private</h3>
            <p className="card-description">
              Your messages are secure, ensuring privacy and protection.
            </p>
          </div>
          <div className="card">
            <FaDesktop size={50} color="#fff" /> {/* Icon for cross-platform */}
            <h3 className="card-title">Cross-Platform</h3>
            <p className="card-description">
              Access your chat on any device and continue your conversation seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
