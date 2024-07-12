import mongoose  from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export const blog = mongoose.model('blog', blogSchema);
