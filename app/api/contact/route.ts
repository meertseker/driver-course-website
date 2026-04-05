import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createFeedbackEntry } from '@/lib/feedback';

async function sendEmailSafe(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  courseInterest?: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  try {
    const resend = new Resend(apiKey);
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const { error } = await resend.emails.send({
      from: `Avcılar Sürücü Kursu <${fromAddress}>`,
      to: process.env.CONTACT_EMAIL || 'info@avcilarehliyetkursu.com',
      replyTo: data.email,
      subject: `Yeni İletişim Formu - ${data.name}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${data.name}</p>
        <p><strong>E-posta:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        ${data.courseInterest ? `<p><strong>İlgilenilen Kurs:</strong> ${data.courseInterest}</p>` : ''}
        <p><strong>Mesaj:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });
    if (error) {
      console.error('Resend error (non-blocking):', error);
    }
  } catch (err) {
    console.error('Resend send exception (non-blocking):', err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, courseInterest } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Tüm alanları doldurunuz' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz' },
        { status: 400 }
      );
    }

    // Save to Firestore using the same Firebase SDK as FeedbackForm
    await createFeedbackEntry({
      type: 'iletisim',
      name,
      email,
      phone,
      message,
      courseInterest,
    });

    // Send email in the background (failure never affects user response)
    sendEmailSafe({ name, email, phone, message, courseInterest });

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
