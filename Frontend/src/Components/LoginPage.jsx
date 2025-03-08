import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://blog-app-bharat-intern.onrender.com/blog/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert(data.message);
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        navigate("/");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to login. Please try again.");
    }
  };

  return (
    <div className="login-container d-flex flex-column align-items-center justify-content-center min-vh-100" style={{ background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" }}>
      <div className="col-md-6 col-lg-4">
        <div className="card login-card text-center p-4" style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", borderRadius: "12px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}>
          <h3 className="text-white">🔐 Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <label className="text-white">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group mt-3">
              <label className="text-white">Password</label>
              <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-login w-100 mt-3" style={{ background: "#ff7b00", color: "#fff", borderRadius: "5px" }}>Login</button>
          </form>
          <hr className="text-white" />
          <Link to='/signup'>
          <button className="btn btn-signup w-100" style={{ border: "2px solid #ff7b00", color: "#ff7b00", borderRadius: "5px" }}>Sign Up</button></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
