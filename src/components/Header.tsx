'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { trackPhoneCall } from '@/lib/analytics';

const navLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Şubelerimiz", href: "/subelerimiz" },
  { label: "Programlar", href: "/programlar" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMobile}>
          <Image
            src="/avcilarlogo.png"
            alt="Avcılar Sürücü Kursu Logo"
            width={80}
            height={30}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href + '/'));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-gray-700 transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+902120000000"
            onClick={() => trackPhoneCall('Avcılar')}
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-primary hover:text-primary"
          >
            +90 (212) 000 00 00
          </a>
          <Link
            href="#kayit"
            className="rounded-full bg-gradient-to-r from-accent to-orange-400 px-5 py-2 text-sm font-semibold text-accent-foreground shadow-[0_10px_25px_rgba(255,169,77,0.4)] transition hover:shadow-[0_12px_30px_rgba(255,169,77,0.5)]"
          >
            Hemen Kayıt Ol
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Menüyü Aç/Kapat"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-nav"
          className="md:hidden inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div 
            id="mobile-nav" 
            className="absolute inset-x-0 top-full md:hidden bg-white border-b border-border shadow-lg animate-slide-in-top z-40"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href + '/'));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMobile}
                    className={`block px-4 py-3 rounded-lg font-semibold transition ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-border flex flex-col gap-2">
                <a
                  href="tel:+902120000000"
                  onClick={() => trackPhoneCall('Avcılar')}
                  className="block px-4 py-3 rounded-lg border border-primary text-primary font-semibold text-center hover:bg-primary hover:text-white transition"
                >
                  +90 (212) 000 00 00
                </a>
                <Link
                  href="#kayit"
                  onClick={closeMobile}
                  className="block px-4 py-3 rounded-lg bg-gradient-to-r from-accent to-orange-400 text-accent-foreground font-semibold text-center shadow-lg"
                >
                  Hemen Kayıt Ol
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

