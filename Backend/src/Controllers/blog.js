import { blog } from "../Models/blogSchema.js";
import { User } from "../Models/userSchema.js";

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
    const { title, content , author} = req.body;
    try {

        const checkBlog = await blog.findOne({ title });
        if (checkBlog) {
            return res.status(401).json({ message: 'Please change the title...' });
        }

        const newPost = new blog({
            title,
            content,
            author
        });

        const submit = await newPost.save();
        console.log(submit);
        res.status(201).json({ submit });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong in create blog...' });
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