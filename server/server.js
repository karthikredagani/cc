const express = require('express');
const cors = require('cors');
const path = require('path'); // Import the 'path' module
const Razorpay = require('razorpay');
const crypto = require('crypto');
const { connectToDb } = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const contactRoutes = require('./routes/contactRoutes'); // Import contact routes
const feedbackRoutes = require('./routes/feedbackRoutes'); // Import feedback routes
const Feedback = require('./models/feedback'); // Import Feedback model
require('dotenv').config(); // For environment variables

// Initialize Express app
const app = express();

// Middleware to parse JSON and enable CORS
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Razorpay instance setup
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_MAk7r0iPLigO8e', // Replace with your actual Razorpay key_id
  key_secret: process.env.RAZORPAY_KEY_SECRET || '0Rn80Z0SDdUHtzFdKiJobHxN', // Replace with your actual Razorpay key_secret
});

// Connect to MongoDB and start the server
connectToDb(() => {
  console.log('Connected to MongoDB');

  // Use the routes for handling requests
  app.use('/api', userRoutes);
  app.use('/api', contactRoutes);
  app.use('/api', feedbackRoutes);

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

  // Razorpay: Create Order
  app.post('/api/create-razorpay-order', async (req, res) => {
    const { amount, currency = 'INR' } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount provided' });
    }

    try {
      const options = {
        amount: Math.round(amount * 100), // Convert to paise
        currency,
      };

      const order = await razorpay.orders.create(options);
      res.status(201).json(order);
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      res.status(500).json({ error: 'Failed to create Razorpay order' });
    }
  });

  // Razorpay: Verify Payment
  app.post('/api/verify-razorpay-payment', async (req, res) => {
    const {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      orderItems,
      totalPrice,
    } = req.body;

    if (
      !razorpayOrderId ||
      !razorpayPaymentId ||
      !razorpaySignature ||
      !orderItems ||
      !totalPrice
    ) {
      return res
        .status(400)
        .json({ error: 'Missing required fields for payment verification' });
    }

    try {
      const generatedSignature = crypto
        .createHmac('sha256', razorpay.key_secret)
        .update(`${razorpayOrderId}|${razorpayPaymentId}`)
        .digest('hex');

      if (generatedSignature === razorpaySignature) {
        // Save order details to the database (placeholder)
        console.log('Order verified successfully:', {
          items: orderItems.length,
          total: totalPrice,
        });

        res.json({ success: true, message: 'Payment verified successfully' });
      } else {
        res
          .status(400)
          .json({ success: false, message: 'Invalid Razorpay signature' });
      }
    } catch (error) {
      console.error('Error verifying Razorpay payment:', error);
      res.status(500).json({ error: 'Failed to verify Razorpay payment' });
    }
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
