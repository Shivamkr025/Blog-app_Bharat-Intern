import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css"; // Custom CSS for styling

const HomeAbout = () => {
    return (
        <>
            <div className="HomeAbout">
                {/* Main Content Section */}
                <div className="container marketing about-Container">
                    <h4 className="text-center">
                        Hello, I’m <strong>Jordan Walsh</strong>, a Food and Drinks blogger from Florida. I started blogging in
                        2011. Lorem ipsum dolor sit amet.
                    </h4>

                    <div className="row featurette align-items-center">
                        {/* Text Content */}
                        <div className="col-lg-7 order-lg-2 text-center text-lg-start">
                            <h2 className="featurette-heading fw-bold lh-1">
                                Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span>
                            </h2>
                            <p className="lead mt-3">
                                Another featurette? Of course. More placeholder content here to give you an idea of how this
                                layout would work with some actual real-world content in place.
                            </p>
                        </div>

                        {/* Rounded Image */}
                        <div className="col-lg-5 order-lg-1 d-flex justify-content-center">
                            <img
                                src="https://via.placeholder.com/400"
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
