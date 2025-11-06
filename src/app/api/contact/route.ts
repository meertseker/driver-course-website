import { NextRequest, NextResponse } from 'next/server';

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Simple rate limiting: 5 requests per 15 minutes per IP
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    // Reset or create new limit
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT) {
    return false;
  }

  userLimit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Çok fazla istek gönderdiniz. Lütfen 15 dakika sonra tekrar deneyin.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message, kvkk } = body;

    // Validation
    if (!name || !email || !phone || !message || !kvkk) {
      return NextResponse.json(
        { error: 'Tüm alanları doldurunuz.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    // Phone validation (Turkish phone format)
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Geçerli bir telefon numarası giriniz.' },
        { status: 400 }
      );
    }

    // OPTION 1: Send to Formspree (recommended for production)
    // Uncomment and add your Formspree endpoint
    /*
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          _subject: `Yeni İletişim Formu - ${name}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Formspree submission failed');
      }
    }
    */

    // OPTION 2: Send email using a service (SendGrid, Resend, etc.)
    // Example with Resend:
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'info@avcilarsurucukursu.com',
      subject: `Yeni İletişim Formu - ${name}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
        <hr>
        <p style="font-size: 12px; color: #666;">KVKK onayı alınmıştır.</p>
      `,
    });
    */

    // OPTION 3: Save to database (for future reference)
    // Add your database logic here

    // For now, just log to console (REMOVE IN PRODUCTION)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message: message.substring(0, 50) + '...',
      timestamp: new Date().toISOString(),
    });

    // Return success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    );
  }
}

// Reject other methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

