import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Navbar';
import BlogDashboard from './components/BlogDashboard';
import BlogForm from './components/BlogForm';

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

  return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BlogDashboard posts={posts} />} />
      <Route path="/add-blog" element={<BlogForm />} />
    </Routes>
  </Router>
  );
};

export default App;