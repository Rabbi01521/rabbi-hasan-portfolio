// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['rabbihasan0113@gmail.com'],
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}