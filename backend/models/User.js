// ✅ models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  tempPassword: String,
  event: {
    heading: String,
    description: String,
    images: [String],
    createdAt: Date
  }
});

module.exports = mongoose.model('User', userSchema);
