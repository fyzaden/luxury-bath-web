import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'GNL Dusakabin <onboarding@resend.dev>', //
      to: ['feyza.gazioglu8@gmail.com'], // Formun iletileceği adres
      subject: `Yeni Mesaj: ${name}`,
      html: `
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Mail gönderilemedi' }, { status: 500 });
  }
}
