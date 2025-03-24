const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogPostRoutes = require('./routes/blogPosts'); // Import blog post routes
require('dotenv').config(); 


const app = express();

// Middleware
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic Route
app.get('/', (req, res) => {
  res.send('Backend API running');
});
app.use('/api/posts', blogPostRoutes); // Mount blog post routes



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
