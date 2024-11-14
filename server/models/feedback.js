const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  feedback: { type: String, required: true },
  rating: { type: Number, required: true },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports = Feedback;
