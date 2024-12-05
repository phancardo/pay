const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to our platform!',
    text: `Hello ${name},\n\nThank you for joining us! We're excited to have you onboard.\n\nBest regards,\nThe Team`,
  };

  return await transporter.sendMail(mailOptions);
};
