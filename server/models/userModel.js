const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Firebase UID
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  photo: { type: String, required: true }, // Store photo as Base64 string
});

module.exports = mongoose.model('User', userSchema);