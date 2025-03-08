import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Style/About.css'
import Shivam from '../assets/shivam.jpeg'
const AboutMe = () => {
  return (
    <>
      {/* About Me Section */}
      <section className="about-me container-fluid d-flex align-items-center justify-content-center about-sections">
        <div className="row w-75 align-items-center">
          {/* Image Section */}
          <div className="col-lg-5 text-center">
            <img src={Shivam} alt="Shivam Profile" className="profile-img" />
          </div>

          {/* Text Section */}
          <div className="col-lg-7 about-content">
            <h2 className="section-title">My Journey</h2>
            <p className="about-text">
              Hi, I'm <span className="highlight">Shivam</span>, a passionate
              <span className="highlight"> MERN Stack Developer</span>. My journey started with a deep interest in web
              technologies, leading me to master
              <strong> React.js, Node.js, Express.js, and MongoDB</strong>.
            </p>
            <p className="about-text">
              Over time, I have developed multiple <strong>real-world projects</strong> including
              <strong> e-commerce platforms, dashboards, and full-stack applications</strong>. My expertise lies in crafting
              <strong> scalable, high-performance web solutions</strong> with a keen focus on
              <strong> user experience & functionality</strong>.
            </p>

            {/* Skills List */}
            <h4 className="fw-bold skills-title">Skills & Expertise</h4>
            <ul className="skills-list">
              <li>✔ React.js, Node.js, Express.js, MongoDB</li>
              <li>✔ Frontend: HTML, CSS, JavaScript, Bootstrap</li>
              <li>✔ Backend: REST APIs, Authentication (JWT, OAuth)</li>
              <li>✔ Database: MongoDB, Mongoose</li>
              <li>✔ Tools: Git, Trello, Postman, Figma</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blog Banner */}
      <div className="blog-banners"></div>

      {/* Footer Section */}
      <div className="blog-banner d-flex flex-column justify-content-center align-items-center text-center text-white">
        <h2 className="fw-bold">"Great stories begin with a simple hello!"</h2>
        <p className="mt-3 px-4" style={{ maxWidth: "600px" }}>
          Whether you have a question, a new idea, or just want to share a little joy, I’d love to hear from you! Let's create
          something beautiful together. Reach out and let’s make magic happen! ✨
        </p>
        <a href="contact.html">
          <button className="btn btn-warning text-white mt-3 px-4 py-2 fw-bold">Get in Touch</button>
        </a>
      </div>
    </>
  );
};

export default AboutMe;
