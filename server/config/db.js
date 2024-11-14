// config/db.js
const mongoose = require('mongoose');

const connectToDb = (callback) => {
  mongoose.connect(process.env.MONGO_URI, )
  .then(() => callback())
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit if connection fails
  });
};

module.exports = { connectToDb };
