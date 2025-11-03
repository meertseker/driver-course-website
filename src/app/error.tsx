'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="text-center px-6 py-12 max-w-2xl">
        <div className="inline-flex items-center justify-center rounded-full bg-red-100 p-4 mb-6">
          <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Bir şeyler yanlış gitti!
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Üzgünüz, beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin veya bize bildirin.
        </p>
        
        {error.message && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm font-mono text-red-800">{error.message}</p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-3 text-sm font-semibold shadow-lg hover:opacity-90 transition-all"
          >
            Tekrar Dene
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary px-8 py-3 text-sm font-semibold hover:bg-primary hover:text-white transition-all"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}

