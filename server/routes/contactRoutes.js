// routes/contactRoutes.js
const express = require('express');
const Feedback = require('../models/contact'); // Ensure this path is correct
const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Check if the required fields are present
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  try {
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ message: 'An error occurred while submitting feedback' });
  }
});

module.exports = router;
