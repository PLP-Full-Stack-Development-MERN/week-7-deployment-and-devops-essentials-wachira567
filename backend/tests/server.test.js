const request = require('supertest');
const app = require('../server'); // Path to server.js
const mongoose = require('mongoose');

describe('GET /', () => {
  it('should return a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Backend API running');
  });
});

describe('POST /api/posts', () => {
  it('should create a new blog post', async () => {
    const newPost = {
      title: 'Test Post',
      content: 'This is a test.',
      author: 'Test Author'
    };
    const res = await request(app)
      .post('/api/posts')
      .send(newPost)
      .set('Accept', 'application/json');
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.title).toBe('Test Post');
  });
});

// Close MongoDB connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});
