import dotenv from "dotenv";
import express from 'express';
import nodemailer from 'nodemailer';
dotenv.config();

// Create router instance
const router = express.Router();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email template function
const generateEmailTemplate = (name, email, phone, whyContact, message) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Reason for contact:</strong> ${whyContact}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${message}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

export const contact = async (req, res) => {
  const { name, email, phone, whyContact, message } = req.body;

  try {
    const mailOptions = {
      from: "Blog Site",
      to: process.env.EMAIL_USER,
      subject: `New Message From ${name}`,
      text: message,
      html: generateEmailTemplate(name, email, phone, whyContact, message),
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send message', error });
  }
};