import React from "react";
import { Link } from "react-router-dom";
import "../Style/Footer.css"; // Ensure this CSS file is correctly linked

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row gy-4">

          {/* Left Brand Info */}
          <div className="col-md-3">
            <h4 className="text-warning">MyBlog</h4>
            <p>Your daily dose of quality blogs on technology, business, lifestyle, and more.</p>
          </div>

          {/* Quick Links with internal navigation */}
          <div className="col-md-3">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/blogs" className="text-light text-decoration-none">Blogs</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="col-md-3">
            <h5 className="text-warning">Subscribe</h5>
            <p>Get the latest blogs directly to your inbox.</p>
            <form>
              <div className="mb-2">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <button className="btn btn-warning btn-sm">Subscribe</button>
            </form>
          </div>

          {/* Social Links */}
          <div className="col-md-3">
            <h5 className="text-warning">Follow Us</h5>
            <div className="d-flex gap-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5"><i className="bi bi-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary mt-5" />

        <div className="text-center text-secondary">
          &copy; 2025 MyBlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
