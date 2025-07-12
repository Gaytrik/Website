// const User = require('../models/User');
// const sendEmail = require('../utils/sendEmail');
// const now = new Date();
// exports.sendLoginPassword = async (req, res) => {
//   const { email } = req.body;
//   const fixedDoctorEmail = 'rbrickkstechnologyemployees@gmail.com';

//   if (email !== fixedDoctorEmail) {
//     return res.status(403).json({ message: 'Email not allowed' });
//   }

//   let user = await User.findOne({ email });
//   if (!user) user = new User({ email });

//   const password = Math.floor(100000 + Math.random() * 900000).toString();
//   user.tempPassword = password;
//   await user.save();

//   try {
//     await sendEmail(email, password);
//     res.status(200).json({ message: 'Password sent to email' });
//   } catch (err) {
//     console.error('❌ Email error:', err.message);
//     res.status(500).json({ message: 'Email send failed' });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, code } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user || user.tempPassword !== code.trim()) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Invalidate code after use
//     user.tempPassword = null;
//     await user.save();

//     // ✅ No JWT, just success message
//     return res.status(200).json({ message: 'Login successful' });
//   } catch (err) {
//     console.error('❌ Login error:', err.message);
//     return res.status(500).json({ message: 'Server error' });
//   }
// };


// controllers/authController.js
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

exports.sendLoginPassword = async (req, res) => {
  const { email } = req.body;
  const fixedDoctorEmail = 'rbrickkstechnologyemployees@gmail.com';

  if (email !== fixedDoctorEmail) {
    return res.status(403).json({ message: 'Email not allowed' });
  }

  try {
    let user = await User.findOne({ email });
    if (!user) user = new User({ email });

    const password = Math.floor(100000 + Math.random() * 900000).toString();
    user.tempPassword = password;
    await user.save();

    await sendEmail(email, password);
    res.status(200).json({ message: 'Password sent to email' });
  } catch (err) {
    console.error('❌ Email error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, code } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.tempPassword !== code.trim()) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    user.tempPassword = null;
    await user.save();

    return res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error('❌ Login error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
