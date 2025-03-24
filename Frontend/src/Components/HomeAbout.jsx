import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css"; // Custom CSS for styling
import avtar from '../assets/shivam.jpeg'

const HomeAbout = () => {
    return (
        <>
            <div className="HomeAbout">
                {/* Main Content Section */}
                <div className="container marketing about-Container">
                    <h4 className="text-center">
                        Hello, I’m <strong>Shivam</strong>, a Tech Blogger from India. I started my blogging journey in 2023. I love sharing knowledge about web development, coding, and the latest trends in technology.
                    </h4>

                    <div className="row featurette align-items-center">
                        {/* Text Content */}
                        <div className="col-lg-7 order-lg-2 text-center text-lg-start">
                            <h2 className="featurette-heading fw-bold lh-1">
                                Building ideas into reality. <span className="text-muted">Let’s innovate together.</span>
                            </h2>
                            <p className="lead mt-3">
                                I write about real-world web development tips, tutorials, and project-building strategies. Whether you're a beginner or an experienced developer, you'll find valuable insights and inspiration here.
                            </p>
                        </div>
                        {/* Rounded Image */}
                        <div className="col-lg-5 order-lg-1 d-flex justify-content-center">
                            <img
                                src={avtar}
                                alt="Jordan Walsh"
                                className="img-fluid rounded-circle shadow-lg"
                                width="400"
                                height="400"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Fixed Blog Image Section */}
            <div className="blog-banners"></div>

            {/* Footer Section */}
            <div class="blog-banner d-flex flex-column justify-content-center align-items-center text-center text-white">
                <h2 className="fw-bold">"Great stories begin with a simple hello!"</h2>
                <p className="mt-3 px-4" style={{ maxWidth: "600px" }}>
                    Whether you have a question, a new idea, or just want to share a little joy, I’d love to hear from you!
                    Let's create something beautiful together.
                    Reach out and let’s make magic happen! ✨
                </p>
                <Link to="/contact">
                    <button className="btn btn-warning text-white mt-3 px-4 py-2 fw-bold">Get in Touch</button>
                </Link>
            </div>
        </>
    );
};

export default HomeAbout;
