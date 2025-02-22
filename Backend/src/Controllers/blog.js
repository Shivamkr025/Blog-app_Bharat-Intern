import { blog } from "../Models/blogSchema.js";
import { cloudinary } from '../config/cloudinary.js'
const showBlog = async (req, res) => {

    try {
        const seeBlog = await blog.find()

        res.status(200).json({seeBlog })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "something went wrong in showBlog function..." })
    }
}

const findBlogByEmail = async (req, res) => {
    const {email} = req.query
    try {
        const seeBlog = await blog.find({author : email});
        if (!seeBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ seeBlog });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong in findBlogByEmail function" });
    }
}


const createBlog = async (req, res) => {
    try {
      const { title, content, author } = req.body;
  
      // Check if the blog title already exists
      const existingBlog = await blog.findOne({ title });
      if (existingBlog) {
        return res.status(400).json({ message: 'Title already exists, please use a different one.' });
      }
  
      // Upload Image if available
      let imageUrl = '';
      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        imageUrl = result.secure_url; // Store image URL
      }
  
      // Create new blog post
      const newBlog = new Blog({
        title,
        content,
        author,
        image: imageUrl, // Store image URL in the blog document
      });
  
      // Save the blog post
      const savedBlog = await newBlog.save();
      res.status(201).json({ message: 'Blog created successfully!', blog: savedBlog });
    } catch (error) {
      console.error('Error creating blog:', error);
      res.status(500).json({ error: 'Something went wrong while creating the blog.' });
    }
  };
const searchBlog = async (req, res) => {

    let { title } = req.query;
    try {
        let searchQuery = {};

        if (title) {
            title = upperCase(title)
            searchQuery.title = { $regex: new RegExp(title, 'i') }
        }

        const searchResult = await blog.find(searchQuery)
        if (searchResult.length === 0) {
            return res.status(404).json({ message: 'No blogs found matching the search criteria.' });
        }

        res.status(200).json({ blogs: searchResult });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "something went wrong in search blog" })
    }
}


const updateBlog = async (req, res) => {
    const { title, newTitle, content } = req.body;

    try {
        const findPost = await blog.findOne({ title });

        if (!findPost) {
            return res.status(404).json({ message: 'Blog not found.' });
        }

        const updatedPost = await blog.findOneAndUpdate(
            { title },
            {
                title: newTitle || findPost.title,
                content: content || findPost.content
            },
            { new: true }
        );

        res.status(200).json({ message: 'Blog updated successfully.', updatedPost });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong in update blog.' });
    }
};


const deleteBlog = async (req, res) => {
    const { title } = req.body;

    try {
        const findPost = await blog.findOne({ title });

        if (!findPost) {
            return res.status(404).json({ message: 'Blog not found.' });
        }

        await blog.findOneAndDelete({ title });

        res.status(200).json({ message: 'Blog deleted successfully.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong in delete blog.' });
    }
};


export { showBlog, createBlog, searchBlog, updateBlog , deleteBlog , findBlogByEmail}