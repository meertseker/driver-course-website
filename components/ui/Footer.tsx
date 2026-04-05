'use client';

import Link from 'next/link';

interface FooterProps {
  siteName: string;
  phone: string;
  email: string;
  address: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

export default function Footer({ siteName, phone, email, address, socialMedia }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Glass overlay similar to navigation */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20 border-t border-white/10"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/avcilarlogo.png" 
                alt={siteName}
                className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(29,104,169,0.6)]"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Avcılar Sürücü Kursu, İstanbul Avcılar&apos;da tüm ehliyet sınıfları için MEB onaylı teorik ve direksiyon eğitimi sunar. %94 başarı oranıyla 20.000&apos;den fazla mezun.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {[
                { label: 'Ana Sayfa', href: '/' },
                { label: 'Kurslar', href: '/kurslar' },
                { label: 'Hakkımızda', href: '/hakkimizda' },
                  { label: 'SSS', href: '/sss' },
                { label: 'Blog', href: '/blog' },
                  { label: 'Geri Bildirim', href: '/geri-bildirim' },
                { label: 'İletişim', href: '/iletisim' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-red to-secondary-orange group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-secondary-orange mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-secondary-gold transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-secondary-orange mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href={`mailto:${email}`} className="text-gray-300 hover:text-secondary-gold transition-colors">
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-secondary-orange mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300">{address}</span>
              </li>
            </ul>
          </div>

          {/* Sister Site - Büyükçekmece */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Büyükçekmece Şubemiz</h3>
            <a
              href="https://efesurucukursu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-secondary-orange/40 transition-all duration-300 group mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-red to-secondary-orange flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white text-sm group-hover:text-secondary-gold transition-colors">efesurucukursu.com</p>
                <p className="text-white/50 text-xs">Büyükçekmece Şubesi →</p>
              </div>
            </a>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="text-white/50 text-xs uppercase tracking-wide">İletişim</p>
              <a href="tel:+902128830883" className="flex items-center gap-2 hover:text-secondary-gold transition-colors">
                <svg className="w-4 h-4 text-secondary-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +90 (212) 883 08 83
              </a>
              <p className="text-white/50 text-xs leading-relaxed">19 Mayıs Mah. D100 Karayolu Cad. No:1079 Daire:4, Büyükçekmece</p>
            </div>
            {socialMedia?.facebook && (
              <div className="mt-4 flex gap-3">
                <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-primary-red/80 hover:border-primary-red transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {socialMedia?.instagram && (
                  <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-accent-rose/80 hover:border-accent-rose transition-all duration-300 hover:scale-110">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} {siteName}. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              <Link href="/gizlilik-politikasi" className="text-gray-300 hover:text-secondary-gold text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-gray-300 hover:text-secondary-gold text-sm transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button - matching navigation style */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-red to-secondary-orange text-white rounded-full shadow-glow-red hover:shadow-glow-red-lg hover:scale-110 transition-all duration-300 flex items-center justify-center backdrop-blur-xl border border-white/20"
        aria-label="Yukarı çık"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}
