import React, { useState } from 'react';
import './BlogForm.css';

const BlogForm = ({ onAddBlog }) => {
  const [blog, setBlog] = useState({ title: '', body: '', authorName: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBlog(blog);
    setBlog({ title: '', body: '', authorName: '' });
  };

  return (
    <div class="container">
    <div class="comment-box gradient-bg">
    <h2 class="comment-title">Add Blog</h2>
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label htmlFor="title">Blog Name:</label>
        <input type="text" id="title" name="title" onChange={handleChange} value={blog.title}></input>
      </div>
      <div class="form-group">
        <label htmlFor="authorName">Author:</label>
        <input type='text' name="authorName" id='authorName' onChange={handleChange} value={blog.authorName}></input>
      </div>
      <div class="form-group">
        <label htmlFor="body">Description:</label>
        <input type='text' name="body" id='body' onChange={handleChange} value={blog.body}></input>
      </div>
      <button type="submit" class="btn-submit">Submit</button>
    </form>
  </div>
  </div>
  );
};

export default BlogForm;