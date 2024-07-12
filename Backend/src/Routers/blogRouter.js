import express from 'express';
import {showBlog , createBlog , searchBlog , updateBlog , deleteBlog} from '../Controllers/blog.js'
import { verifyToken } from '../Middleware/auth.js';

const router = express.Router()

router.get('/show/blog' , showBlog);

router.post('/create/blog' ,verifyToken, createBlog) ;

router.get('/search/blog' , searchBlog);

router.put('/update/blog', verifyToken,  updateBlog);

router.delete('/delete/blog' , verifyToken , deleteBlog)

export default router
