import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showToaster, setShowToaster] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">Akari</div>
        <div className="mission-link">
          <a href="#mission">Join the mission of Akari in AI</a>
        </div>
        <div className="right-section">
          <a href="#contact" className="contact-link">Contact Us</a>
          <div className="dropdown-container">
            <button 
              className="menu-icon" 
              onClick={() => setShowDropdown(!showDropdown)}
            >
              ☰
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <a href="#about">About</a>
                <a href="#products">Products</a>
                <a href="#team">Team</a>
                <a href="#careers">Careers</a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>akari: ai products for 2025+<br />considered and evolved design</h1>
        <div className="logo-bundle">
          {/* Placeholder for logo bundle */}
          <div className="placeholder-logos">
            <div className="logo-item">AI</div>
            <div className="logo-item">ML</div>
            <div className="logo-item">NLP</div>
            <div className="logo-item">CV</div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="feature-cards">
        <div className="card">
          <h3>Responsible AI</h3>
          <p>transparent building</p>
        </div>
        <div className="card">
          <h3>Dynamic Product</h3>
          <p>innovative considered practices</p>
        </div>
        <div className="card">
          <h3>Open Systems</h3>
          <p>verified autonomy and security</p>
        </div>
      </section>

      {/* Toaster */}
      {showToaster && (
        <div className="toaster">
          <div className="toaster-content">
            <button className="toaster-button" onClick={() => {}}>Who</button>
            <button className="toaster-button" onClick={() => {}}>What</button>
            <button className="toaster-button" onClick={() => {}}>Why</button>
            <button 
              className="close-toaster" 
              onClick={() => setShowToaster(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;