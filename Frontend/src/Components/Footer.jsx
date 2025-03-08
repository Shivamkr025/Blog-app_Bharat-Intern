import React from "react";
import { Link } from "react-router-dom";
import "../Style/Footer.css"; // Ensure this CSS file is correctly linked

const Footer = () => {
  return (
    <footer className="footer py-4 bg-dark text-white">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 text-center text-md-start mb-3">
            <h5 className="fw-bold">About Me</h5>
            <p className="small">
              I’m Jordan Walsh, a Food & Drinks blogger from Florida. I love sharing my experiences, recipes, and food
              adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-white text-decoration-none">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="fw-bold">Follow Me</h5>
            <div className="social-icons">
              <a href="#" className="me-3 text-white">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="me-3 text-white">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="me-3 text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-youtube fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <hr className="border-light my-3" />
        <div className="text-center small">&copy; 2024 Jordan Walsh | All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
