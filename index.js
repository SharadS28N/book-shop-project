const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');

const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// ✅ Add this route to fix "Cannot GET /"
app.get('/', (req, res) => {
  res.send('📚 Welcome to the Book Shop API! Visit /api/books or /api/users');
});

// Book and User API routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
