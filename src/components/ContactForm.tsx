'use client';

import { useState, FormEvent } from 'react';
import { trackFormStart, trackFormComplete, trackFormError } from '@/lib/analytics';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [hasStarted, setHasStarted] = useState(false);

  const handleFocus = () => {
    if (!hasStarted) {
      trackFormStart('contact_form');
      setHasStarted(true);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    // Honeypot check - if filled, it's a bot
    if (formData.get('website')) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Replace with your actual form endpoint (Formspree, etc.)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          kvkk: formData.get('kvkk'),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        trackFormComplete('contact_form');
        (e.target as HTMLFormElement).reset();
        setHasStarted(false);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      trackFormError('contact_form', 'submission_failed');
      console.error('Form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center p-8 bg-success/10 border border-success/20 rounded-3xl animate-fade-in">
        <div className="inline-flex items-center justify-center rounded-full bg-success/20 p-4 mb-4">
          <svg className="w-12 h-12 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Mesajınız Gönderildi!</h3>
        <p className="text-gray-600 mb-6">
          En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz!
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-all"
        >
          Yeni Mesaj Gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
          Ad Soyad <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onFocus={handleFocus}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder:text-gray-500"
          placeholder="Adınız ve soyadınız"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          E-posta <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onFocus={handleFocus}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder:text-gray-500"
          placeholder="ornek@email.com"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
          Telefon <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          onFocus={handleFocus}
          pattern="[0-9]{10,11}"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder:text-gray-500"
          placeholder="5XX XXX XX XX"
        />
      </div>

      {/* Honeypot Field - Hidden from users, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Mesajınız <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          onFocus={handleFocus}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none placeholder:text-gray-500"
          placeholder="Hangi program hakkında bilgi almak istiyorsunuz?"
        />
      </div>

      {/* KVKK Consent */}
      <div className="flex items-start gap-3">
        <input
          id="kvkk"
          name="kvkk"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
        />
        <label htmlFor="kvkk" className="text-sm text-gray-600">
          <a href="/kvkk" target="_blank" className="text-primary hover:underline">KVKK</a> kapsamında kişisel verilerimin işlenmesine ilişkin aydınlatma metnini okudum ve onaylıyorum. <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div role="alert" aria-live="polite" className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm animate-fade-in">
          Gönderirken bir hata oluştu. Lütfen tekrar deneyin veya bizi telefonla arayın.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-red to-accent-dark text-white px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Gönderiliyor...
          </>
        ) : (
          'Mesaj Gönder'
        )}
      </button>

      <p className="text-xs text-center text-gray-600">
        Mesajınızı gönderdikten sonra en geç 1 iş günü içinde size dönüş yapacağız.
      </p>
    </form>
  );
}

