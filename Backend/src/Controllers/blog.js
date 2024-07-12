import { blog } from "../Models/blogSchema";

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

