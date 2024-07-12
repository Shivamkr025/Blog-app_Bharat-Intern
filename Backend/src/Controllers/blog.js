import { blog } from "../Models/blogSchema.js";

const showBlog = async(req , res) =>{

    try {
        const seeBlog = await blog.find({})
        if (!seeBlog){
            return res.status(400).json({message:"Sorry blog is not found ...!"})
        }
        
        res.status(200).json({seeBlog})
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "something went wrong in showBlog function..."})
    }
}

const createBlog = async(res , req) => {

    const {title} = req.body
    try {
        const checkBlog = await blog.findOne({title})
        if (checkBlog){
            return res.status(401).json({message: "please change the title..."})
        }

        const submit = new blog(req.body)
        await submit.save()
        res.status(201).json({submit})

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"something went wrong in create blog..."})
    }
}

const searchBlog = async(req , res) => {
    const {title} = req.query
    try {
        const search = await blog.find({})
        if (!search){
            return res.status(401).json({message:"sorry Blog is not found ..."})
        }

        res.status(200).json({search})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"something went wrong in search blog"})
    }
}

const updateBlog = async(req , res) =>{
    
    const {title , body} = req.body
    try {
        const findPost = await blog.findOne(title);
        if(!findPost){
            return res.status(401).json({message:'title not found'})
        }
        if (!body){
            return res.status(401).json({message:'Post not found'})
        }
        if (!author){
            return res.status(401).json({message:'author not found'})
        }
        if (findPost.author.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'You are not authorized to update this post' });
          }
        

        const updatePost = await blog
    } catch (error) {
        
    }
}


export {showBlog , createBlog , searchBlog , updateBlog}