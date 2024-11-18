const express = require('express');
const Order = require('../models/orderModel'); // Order model
const router = express.Router();

// Create a new order
router.post('/create', async (req, res) => {
  const { userId, orderItems, paymentInfo, totalAmount } = req.body;

  try {
    const order = new Order({
      user: userId,
      orderItems,
      paymentInfo,
      totalAmount,
    });

    await order.save();
    res.status(201).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;