import express from 'express';
import {showBlog , createBlog , searchBlog , updateBlog , deleteBlog , findBlogByEmail} from '../Controllers/blog.js'
import { verifyToken } from '../Middleware/auth.js';
import {upload} from '../config/cloudinary.js'

const router = express.Router()

router.get('/show/blog' , showBlog);

router.get('/find/blog/byEmail', findBlogByEmail);

router.post('/create/blog' ,upload.single('image'),  createBlog) ;

router.get('/search/blog' , searchBlog);

router.put('/update/blog', verifyToken,  updateBlog);

router.delete('/delete/blog' , verifyToken , deleteBlog)

export default router
