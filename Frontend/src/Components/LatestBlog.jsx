import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/Home.css'

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://blog-app-bharat-intern.vercel.app/show/blog");
        const data = await response.json();

        if (response.ok) {
          // Fetch last 3 blogs and reverse for latest first
          setBlogs(data.seeBlog.slice(-3).reverse());
        } else {
          console.error("Failed to fetch blogs:", data.error);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="Latest-blog-container">
      <div className="container blog-demo-container">
        <h2 className="text-center mb-4">Latest Blogs</h2>
        <div className="row g-3">
          {blogs.length === 0 ? (
            <p className="text-center">No blogs available.</p>
          ) : (
            blogs.map((blog) => (
              <div className="col-md-4" key={blog._id}>
                <div className="card shadow-sm border-0 rounded">
                  {blog.image && (
                    <img
                      src={blog.image}
                      className="card-img-top"
                      alt="Blog Image"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{ cursor: "pointer", color: "black" }}
                      onClick={() => navigate(`/blog/${blog._id}`)}
                    >
                      {blog.title}
                    </h5>
                    <p className="card-text">{blog.content.substring(0, 100)}...</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
