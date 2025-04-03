import React, { useState, useEffect } from 'react';
import { Clipboard, Users, Lock, Globe, Brain, Menu } from 'lucide-react';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [showToaster, setShowToaster] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <Navbar expand="lg" className={`header ${scrolled ? 'scrolled' : ''}`}>
        <Container fluid>
          <Navbar.Brand href="#home" className="logo">Akari</Navbar.Brand>
          <div className="mission-link">
            <a href="#mission">Join the mission of Akari in AI</a>
          </div>
          <div className="right-section">
            <Nav.Link href="#contact" className="contact-link">Contact Us</Nav.Link>
            <div className="dropdown-container">
              <Button 
                variant="link"
                className="menu-icon" 
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <Menu size={24} />
              </Button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#products">Products</Nav.Link>
                  <Nav.Link href="#team">Team</Nav.Link>
                  <Nav.Link href="#careers">Careers</Nav.Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <h1 className="hero-title">akari: ai products for 2025+<br />considered and evolved design</h1>
          <div className="logo-bundle">
            {/* Placeholder for logo bundle */}
            <div className="placeholder-logos">
              
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Cards */}
      <section className="feature-cards">
        <Container>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <div className="card">
                <Clipboard className="card-icon" size={32} />
                <h3>Responsible AI</h3>
                <p>transparent building</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="card">
                <Users className="card-icon" size={32} />
                <h3>Dynamic Product</h3>
                <p>innovative considered practices</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="card">
                <Lock className="card-icon" size={32} />
                <h3>Open Systems</h3>
                <p>verified autonomy and security</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statement and Logos Section */}
      <section className="statement-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="statement-col">
              <h2 className="big-statement">Thoughtful product design</h2>
              <p className="statement-subtitle">Creating AI systems that enhance human capability while respecting autonomy and agency</p>
            </Col>
            <Col lg={5}>
              <Row>
                <Col sm={6} className="logo-box">
                  <Globe className="feature-icon" size={48} />
                  <h4>open world</h4>
                  <p className="logo-description">building systems that connect and empower across boundaries</p>
                </Col>
                <Col sm={6} className="logo-box">
                  <Brain className="feature-icon" size={48} />
                  <h4>thinking person</h4>
                  <p className="logo-description">centering human cognition and creativity in every design</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Toaster */}
      {showToaster && (
        <div className="toaster">
          <div className="toaster-content">
            <Button variant="link" className="toaster-button">Who</Button>
            <Button variant="link" className="toaster-button">What</Button>
            <Button variant="link" className="toaster-button">Why</Button>
            <Button 
              variant="link" 
              className="close-toaster" 
              onClick={() => setShowToaster(false)}
            >
              ×
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;