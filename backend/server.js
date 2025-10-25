
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your app password
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error configuring email transporter:', error);
  } else {
    console.log('Email transporter is ready to send messages');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Email to you (the portfolio owner)
  const mailOptionsToOwner = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Your email where you want to receive messages
    subject: `Portfolio Contact: Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
        <div style="background-color: #2dd4bf; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #ffffff; margin: 0;">New Portfolio Contact Message</h2>
        </div>
        <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px;">
          <h3 style="color: #0f172a; margin-top: 0;">Contact Details:</h3>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2dd4bf;">${email}</a></p>
          
          <h3 style="color: #0f172a; margin-top: 30px;">Message:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #2dd4bf;">
            <p style="margin: 0; color: #334155; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">This message was sent from your portfolio contact form</p>
          </div>
        </div>
      </div>
    `,
  };

  // Confirmation email to the sender
  const mailOptionsToSender = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for reaching out!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
        <div style="background-color: #2dd4bf; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #ffffff; margin: 0;">Thank You for Your Message!</h2>
        </div>
        <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="color: #334155; line-height: 1.6;">Hi ${name},</p>
          <p style="color: #334155; line-height: 1.6;">Thank you for getting in touch! I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #2dd4bf; margin: 20px 0;">
            <h3 style="color: #0f172a; margin-top: 0;">Your Message:</h3>
            <p style="margin: 0; color: #334155; line-height: 1.6;">${message}</p>
          </div>
          
          <p style="color: #334155; line-height: 1.6;">Best regards,<br/>Loka Surya Prakash Pentakota</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              Email: <a href="mailto:plsprakash2003@gmail.com" style="color: #2dd4bf;">plsprakash2003@gmail.com</a><br/>
              Portfolio: <a href="https://yourportfolio.com" style="color: #2dd4bf;">yourportfolio.com</a>
            </p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    // Send email to portfolio owner
    await transporter.sendMail(mailOptionsToOwner);
    
    // Send confirmation email to sender
    await transporter.sendMail(mailOptionsToSender);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! You should receive a confirmation email shortly.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later or contact me directly at plsprakash2003@gmail.com' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/contact`);
});

module.exports = app;

