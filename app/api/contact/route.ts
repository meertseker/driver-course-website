import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

async function saveToFirestore(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  courseInterest?: string;
}) {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!projectId || !apiKey) return;

  try {
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/feedbackEntries?key=${apiKey}`;
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          type: { stringValue: 'iletisim' },
          name: { stringValue: data.name },
          email: { stringValue: data.email },
          phone: { stringValue: data.phone },
          message: { stringValue: data.message },
          courseInterest: { stringValue: data.courseInterest || '' },
          status: { stringValue: 'new' },
          createdAt: { timestampValue: new Date().toISOString() },
        },
      }),
    });
  } catch (err) {
    console.error('Firestore REST write failed (non-blocking):', err);
  }
}

export async function POST(request: NextRequest) {
  // Initialize Resend with API key from environment
  const resend = new Resend(process.env.RESEND_API_KEY || '');
  
  try {
    const body = await request.json();
    const { name, email, phone, message, courseInterest } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Tüm alanları doldurunuz' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz' },
        { status: 400 }
      );
    }

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured. Email will not be sent, saving to Firestore only.');
      await saveToFirestore({ name, email, phone, message, courseInterest });
      return NextResponse.json(
        { success: true, message: 'Mesajınız alındı' },
        { status: 200 }
      );
    }

    // Always save to Firestore first so no submission is lost
    await saveToFirestore({ name, email, phone, message, courseInterest });

    // Send email using Resend (non-blocking — failure does not affect the user response)
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const { error } = await resend.emails.send({
      from: `Avcılar Sürücü Kursu <${fromAddress}>`,
      to: process.env.CONTACT_EMAIL || 'info@avcilarehliyetkursu.com',
      replyTo: email,
      subject: `Yeni İletişim Formu - ${name}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        ${courseInterest ? `<p><strong>İlgilenilen Kurs:</strong> ${courseInterest}</p>` : ''}
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error (message still saved to Firestore):', error);
    }

    return NextResponse.json(
      { success: true, message: 'Mesajınız başarıyla gönderildi' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu, lütfen daha sonra tekrar deneyiniz' },
      { status: 500 }
    );
  }
}
