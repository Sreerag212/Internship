import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogDashboard from './components/BlogDashboard';
import BlogForm from './components/BlogForm';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleAddBlog = (blog) => {
    setPosts([...posts, blog]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BlogDashboard posts={posts} />} />
          <Route path="/add-blog" element={<BlogForm onAddBlog={handleAddBlog} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;