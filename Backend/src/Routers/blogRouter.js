import express from 'express';
import {showBlog , createBlog , searchBlog , updateBlog} from '../Controllers/blog.js'

const router = express.Router()

router.get('/show/blog' , showBlog);

router.post('/create/blog' , createBlog) ;

router.post('/search/blog' , searchBlog);

router.put('/update/blog', updateBlog);

export default router
