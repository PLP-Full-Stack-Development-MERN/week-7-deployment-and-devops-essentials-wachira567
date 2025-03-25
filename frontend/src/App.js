import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetch(`${API_URL}/api/posts`)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched posts:', data); // Debug log
        setPosts(data);
      })
      .catch(err => console.error('Error fetching posts:', err));
  }, [API_URL]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/api/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, author })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Created post:', data); // Debug log
        setPosts([...posts, data]);
        setTitle(''); setContent(''); setAuthor('');
      })
      .catch(err => console.error('Error creating post:', err));
  };

  return (
    <div className="App">
      <h1>Personal Blog Platform</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
      <h2>Blog Posts</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>By: {post.author}</p>
          </div>
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
}

export default App;