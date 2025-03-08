import React from "react";
import { Link } from "react-router-dom";
import '../Style/Navbar.css'

const HeroSection = ({ bannerImage }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-overlay"></div>
      <div className="container text-center text-white banner-content">
        <h2>Best Drinks and Delicacies By</h2>
        <h1 className="fw-bold">Monica Grey</h1>
        <p>Discover amazing food and drinks experiences through my blog.</p>
        <Link to="/contact" className="btn btn-danger">Contact Me</Link>
      </div>
    </div>
  );
};


export default HeroSection;
