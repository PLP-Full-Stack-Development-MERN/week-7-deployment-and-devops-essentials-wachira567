import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });

  // Fetch all posts
  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  // Create a new post
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/posts', newPost)
      .then(res => {
        setPosts([res.data, ...posts]); // Add new post to list
        setNewPost({ title: '', content: '', author: '' }); // Reset form
      })
      .catch(err => console.error('Error creating post:', err));
  };

  return (
    <div className="App">
      <h1>Personal Blog Platform</h1>

      {/* Create Post Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          placeholder="Post Title"
          required
        />
        <textarea
          name="content"
          value={newPost.content}
          onChange={handleInputChange}
          placeholder="Post Content"
          required
        />
        <input
          type="text"
          name="author"
          value={newPost.author}
          onChange={handleInputChange}
          placeholder="Author Name"
        />
        <button type="submit">Add Post</button>
      </form>

      {/* Display Posts */}
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map(post => (
          <div key={post._id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p><em>By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</em></p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;