import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type RequestBody = {
  name: string;
  email: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed', success: false });
  }

  const { name, email, message }: RequestBody = req.body;

  // Validação básica
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Missing required fields', 
      success: false 
    });
  }

  // Configure o transporter (exemplo com Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Ou para seu email pessoal
      subject: `Nova mensagem de ${name} (${email})`,
      text: message,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ 
      message: 'Message sent successfully!', 
      success: true 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      message: 'Error sending message', 
      success: false 
    });
  }
}