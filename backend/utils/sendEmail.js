const nodemailer = require('nodemailer');
const email = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;
console.log('GMAIL_USER from env:', process.env.GMAIL_USER);
console.log('GMAIL_PASS from env:', process.env.GMAIL_PASS); // just to test
const sendEmail = async (to, password) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: pass
    }
  });

  await transporter.sendMail({
    from: `Event Portal <${email}>`,
    to,
    subject: 'Your One-Time Login Password',
    text: `Use this password to log in: ${password}`
  });
};

module.exports = sendEmail;
