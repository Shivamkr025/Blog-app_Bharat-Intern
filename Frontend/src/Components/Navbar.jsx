import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top shadow-sm ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
      <i className="bi bi-feather" style={{ fontSize: '2rem', color: 'white' }}></i>
        <Link className="navbar-brand" to="/">InspireJourney</Link>
        <button 
          className="navbar-toggler custom-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link active fw-bold" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blogs">Blog</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Me</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Let's Connect</Link></li>
          </ul>
          <Link to="/login"><button className="btn btn-outline-primary me-2">Login</button></Link>
          <Link to="/create-blog"><button className="btn btn-warning text-white">Get Started</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
