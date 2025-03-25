const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogPostRoutes = require('./routes/blogPosts');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: ['https://mernblogplp7.netlify.app', 'http://localhost:5000'] // Allow both Netlify domain and localhost
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => res.send('Backend API running'));
app.use('/api/posts', blogPostRoutes);

const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
