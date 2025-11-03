import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="text-center px-6 py-12 max-w-2xl">
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-primary/10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-24 h-24 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Sayfa Bulunamadı
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8">
          Aradığınız sayfa mevcut değil, taşınmış veya silinmiş olabilir.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-3 text-sm font-semibold shadow-lg hover:opacity-90 transition-all"
          >
            Anasayfaya Dön
          </Link>
          
          <Link
            href="#kayit"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary px-8 py-3 text-sm font-semibold hover:bg-primary hover:text-white transition-all"
          >
            İletişime Geç
          </Link>
        </div>
        
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Popüler sayfalar:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/programlar" className="text-sm text-primary hover:underline">
              Programlar
            </Link>
            <Link href="/subelerimiz" className="text-sm text-primary hover:underline">
              Şubelerimiz
            </Link>
            <Link href="/hakkimizda" className="text-sm text-primary hover:underline">
              Hakkımızda
            </Link>
            <Link href="/sss" className="text-sm text-primary hover:underline">
              SSS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

