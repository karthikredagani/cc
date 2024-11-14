const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback'); // Adjust the path according to your project structure

// POST route to submit feedback
router.post('/feedback', async (req, res) => {
  const { name, email, feedback, rating } = req.body;

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

module.exports = router;``
