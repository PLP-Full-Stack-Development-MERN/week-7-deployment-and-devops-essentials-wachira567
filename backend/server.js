const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogPostRoutes = require('./routes/blogPosts');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Backend API running');
});
app.use('/api/posts', blogPostRoutes);

// Export app for testing, only listen if run directly
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
