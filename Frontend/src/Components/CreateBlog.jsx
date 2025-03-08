import React, { useState } from "react";
import "../Style/CreateBlog.css"; // Ensure to create a CSS file for styling

const CreateBlog = () => {
    const [blogData, setBlogData] = useState({
        title: "",
        category: "",
        content: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setBlogData((prevData) => ({
            ...prevData,
            image: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!blogData.title || !blogData.category || !blogData.content) {
            alert("Please fill in all required fields.");
            return;
        }

        const formData = new FormData();
        formData.append("title", blogData.title);
        formData.append("category", blogData.category);
        formData.append("content", blogData.content);
        if (blogData.image) {
            formData.append("image", blogData.image);
        }

        try {
            const response = await fetch("https://blog-app-bharat-intern.vercel.app/create/blog", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                alert("Blog created successfully!");
                window.location.href = "/showBlog"; // Adjust the route as per your project setup
            } else {
                alert(data.message || "Failed to create blog.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to create blog. Please try again.");
        }
    };

    return (
        <div className="create-container">
            <div className="blog-form shadow-lg rounded">
                <h3 className="text-center mb-4">Express Yourself: Write, Share, and Inspire</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="blogTitle" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="blogTitle"
                            name="title"
                            placeholder="Enter blog title"
                            value={blogData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="blogCategory" className="form-label">Category</label>
                        <select
                            className="form-control"
                            id="blogCategory"
                            name="category"
                            value={blogData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="Technology">Technology</option>
                            <option value="Health">Health</option>
                            <option value="Business">Business</option>
                            <option value="Lifestyle">Lifestyle</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="blogContent" className="form-label">Content</label>
                        <textarea
                            className="form-control"
                            id="blogContent"
                            name="content"
                            rows="6"
                            placeholder="Enter blog content"
                            value={blogData.content}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="blogImage" className="form-label">Upload Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="blogImage"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn-submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
