// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const response = await fetch('https://api.vercel.com/v1/integrations/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.VERCEL_EMAIL_TOKEN}`,
      },
      body: JSON.stringify({
        to: process.env.CONTACT_EMAIL,
        from: 'noreply@seudominio.com',
        subject: `Novo contato de ${name}`,
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
      }),
    });

    if (!response.ok) throw new Error('Falha ao enviar email');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno' },
      { status: 500 }
    );
  }
}