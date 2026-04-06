import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable. Emails cannot be sent.");
    return NextResponse.json({ error: 'Server misconfiguration: Email service not set up.' }, { status: 500 });
  }

  try {
    const { name, company, email, phone, product, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'AP Textile Website <onboarding@resend.dev>',
      to: 'aptextileindustries1@gmail.com', // User's requested delivery email
      subject: `New Inquiry from ${name} - ${product || 'General Inquiry'}`,
      replyTo: email,
      html: `
        <h2>New Inquiry from AP Textile Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Product Interest:</strong> ${product || 'None Selected'}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Inquiry
        Name: ${name}
        Company: ${company || 'N/A'}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Product Interest: ${product || 'None Selected'}
        
        Message:
        ${message}
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
