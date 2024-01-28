import React from 'react';
import { Table } from 'reactstrap';
import './BlogDashboard.css';

const BlogDashboard = ({ posts }) => {
  return (
    <div>
      <center>
        <div id='title'>
          <h1>Welcome To BlogSpot</h1>
        </div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
     </center>
    </div>
  );
};

export default BlogDashboard;