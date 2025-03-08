import React, { useEffect, useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://blog-app-bharat-intern.vercel.app/show/blog");
        const data = await response.json();

        if (response.ok) {
          setBlogs(data.seeBlog || []);
        } else {
          console.error("Failed to fetch blogs:", data.error);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const toggleReadMore = (blogId) => {
    setExpandedBlogs((prevState) => ({
      ...prevState,
      [blogId]: !prevState[blogId],
    }));
  };

  return (
    <div className="mt-5 container">
      {blogs.length === 0 ? (
        <p className="text-center">No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="d-flex flex-column align-items-center mb-4">
            <div className="card shadow-lg" style={{ width: "70vw", border: "none", borderRadius: "15px", overflow: "hidden" }}>
              {blog.image && (
                <img src={blog.image} alt="Blog" className="card-img-top" style={{ height: "400px", objectFit: "cover" }} />
              )}
            </div>
            <div className="card-body" style={{ width: "70vw" }}>
              <div className="blog-header">
                <h2 className="fw-bold">{blog.title}</h2>
              </div>
              <p className="featurette-box">
                {expandedBlogs[blog._id] ? blog.content : `${blog.content.substring(0, 250)}...`}
              </p>
              <p
                className="text-primary fw-bold mt-2"
                style={{ cursor: "pointer" }}
                onClick={() => toggleReadMore(blog._id)}
              >
                {expandedBlogs[blog._id] ? "Hide <<" : "Read More >>"}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
