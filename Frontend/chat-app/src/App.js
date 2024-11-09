// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/About';
import Navbar from './components/Navbar';
import Chat from './pages/Chat'; // Import Chat component

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include Navbar across all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/chat" element={<Chat />} /> {/* Add route for Chat */}
      </Routes>
    </Router>
  );
}

export default App;
