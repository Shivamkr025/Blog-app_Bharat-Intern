import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({

    title: { type: String, require: true },
    body: { type: String, require: true },
    author: { type: String, require: true },
    date: { type: Date, default: Date.now }
})

export const blog = mongoose.model('blog' , blogSchema)
