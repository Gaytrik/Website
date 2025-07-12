// ✅ routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { sendLoginPassword, login } = require('../controllers/authController');
const User = require('../models/User'); 
router.post('/register', async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Already registered' });

    const newUser = new User({ email });
    await newUser.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    console.error('Registration Error:', err); // 👈 Add this
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/send-login-password', sendLoginPassword);
router.post('/login', login);

module.exports = router;
