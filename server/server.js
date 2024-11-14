// server.js
const express = require('express');
const cors = require('cors');
const { connectToDb } = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const contactRoutes = require('./routes/contactRoutes'); // Import contact routes
const feedbackRoutes = require('./routes/feedbackRoutes'); // Import feedback routes
const Feedback = require('./models/feedback'); // Import Feedback model
require('dotenv').config(); // For environment variables
const path = require('path'); // Import the 'path' module

// Initialize Express app
const app = express();

// Middleware to parse JSON and enable CORS
app.use(cors());
app.use(express.json());

// Connect to MongoDB and start the server
connectToDb(() => {
  console.log('Connected to MongoDB');

  // Use the routes for handling requests
  app.use('/api', userRoutes);
  app.use('/api', contactRoutes); // Use the contact routes
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


  // Feedback route
  app.post('/api/feedback', async (req, res) => {
    const { name, email, feedback, rating } = req.body;

    // Validate input
    if (!name || !email || !feedback || rating === undefined) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      const newFeedback = new Feedback({ name, email, feedback, rating });
      await newFeedback.save();
      res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
      console.error('Error saving feedback:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
