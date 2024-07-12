import { blog } from "../Models/blogSchema.js";

const showBlog = async (req, res) => {

    try {
        const seeBlog = await blog.find({})
        if (!seeBlog) {
            return res.status(400).json({ message: "Sorry blog is not found ...!" })
        }

        res.status(200).json({ seeBlog })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "something went wrong in showBlog function..." })
    }
}

const createBlog = async (req, res) => {
    const { title, body } = req.body;
    try {

        const checkBlog = await blog.findOne({ title });
        if (checkBlog) {
            return res.status(401).json({ message: 'Please change the title...' });
        }

        const newPost = new blog({
            title,
            body,
            author: req.user.email
        });

        const submit = await newPost.save();
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
    const { title, newTitle, body } = req.body;

    try {
        const findPost = await blog.findOne({ title });

        if (!findPost) {
            return res.status(404).json({ message: 'Blog not found.' });
        }

        if (req.user.email !== findPost.author) {
            return res.status(401).json({ message: 'User not found or unauthorized' });
        }

        const updatedPost = await blog.findOneAndUpdate(
            { title },
            {
                title: newTitle || findPost.title,
                body: body || findPost.body
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

        if (req.user.email !== findPost.author) {
            return res.status(401).json({ message: 'User not found or unauthorized' });
        }

        await blog.findOneAndDelete({ title });

        res.status(200).json({ message: 'Blog deleted successfully.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong in delete blog.' });
    }
};


export { showBlog, createBlog, searchBlog, updateBlog , deleteBlog}