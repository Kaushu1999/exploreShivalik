import express from 'express';
import nodemailer from 'nodemailer';
import twilio from 'twilio';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Setup Email Transporter (using Gmail or your preferred email service)
const emailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use App Password for Gmail
  },
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate form data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email content
    const emailSubject = `New Contact Form Submission: ${subject}`;
    const emailBody = `
      <h2>New Lead from Contact Form</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `;

    // Send email to your address
    await emailTransporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: emailSubject,
      html: emailBody,
    });

    // Send SMS if phone is provided (optional)
    if (phone) {
      try {
        await twilioClient.messages.create({
          body: `New lead: ${name} (${email}) - Subject: ${subject}`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: process.env.OWNER_PHONE, // Your phone number in E.164 format
        });
      } catch (smsError) {
        console.log('SMS sending skipped:', smsError.message);
        // Continue even if SMS fails
      }
    }

    // Send confirmation email to the user
    await emailTransporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We Received Your Message - Explore Shivalik',
      html: `
        <h2>Thank You for Contacting Us!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p><strong>Your Subject:</strong> ${subject}</p>
        <p>In the meantime, if you have any urgent questions, feel free to call us at <strong>+91 81910 04719</strong></p>
        <p>Best regards,<br>Explore Shivalik Team</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully. We will contact you soon!',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process your request. Please try again later.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
