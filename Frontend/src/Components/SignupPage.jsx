import React, { useState } from "react";
import '../Style/Signup.css'

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://blog-app-bharat-intern.onrender.com/blog/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert(data.message);
        setFormData({ name: "", email: "", password: "" });
        window.location.href = "/login"; // Redirect to login page
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="col-md-6 col-lg-4">
        <div className="card login-card">
          <div className="card-header text-center">
            <h3 className="login-title">📝 Sign Up</h3>
          </div>
          <div className="card-body">
            <form id="signupForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-login">
                Sign Up
              </button>
              <hr />
              <a href="/login" className="btn btn-signup">
                Already have an account? Login
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
