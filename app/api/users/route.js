import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { connectMongo } from '@/lib/mongoose';
import User from '@/lib/models/user';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const FROM = process.env.RESEND_FROM || 'KreditLinks <onboarding@resend.dev>';
const TO = process.env.RESEND_TO || 'office@kreditlinks.com';

async function sendNotificationEmail(userData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const resend = new Resend(apiKey);
  const { username, lastName, email, dateOfBirth, phone, state } = userData;

  const html = `
    <h3>Novi korisnik</h3>
    <p><strong>Ime:</strong> ${username} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${phone}</p>
    <p><strong>Opština:</strong> ${state}</p>
    <p><strong>Datum rođenja:</strong> ${dateOfBirth}</p>
  `;

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    subject: `KreditLinks - Novi korisnik: ${username} ${lastName}`,
    html,
  });

  if (error) {
    console.error('Resend error:', error);
    throw new Error(error.message || 'Failed to send email');
  }

  return data;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, lastName, email, dateOfBirth, phone, state, privacy } = body;

    await connectMongo();

    const newUser = new User({
      username,
      lastName,
      email,
      dateOfBirth,
      phone,
      state,
      privacy,
    });

    await newUser.save();
    await sendNotificationEmail(body);

    return NextResponse.json(
      { message: 'User created successfully', user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { message: 'Error creating user', error: error.message },
      { status: 500 }
    );
  }
}
