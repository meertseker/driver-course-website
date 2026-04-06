'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { springs } from '@/lib/spring-animations';
import { glassNavbar } from '@/lib/glass-effects';

interface NavigationProps {
  siteName: string;
  logo?: string;
}

export default function Navigation({ siteName, logo }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Kurslar', href: '/kurslar' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Blog', href: '/blog' },
    { label: 'Geri Bildirim', href: '/geri-bildirim' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  const branches = [
    { name: 'Avcılar', phone: '+90 (212) 590 23 25', phoneMobile: '+90 (546) 940 22 00' },
  ];

  return (
    <>
      {/* Top info bar */}
      <div className="fixed top-0 left-0 right-0 z-[51] bg-white backdrop-blur-md border-b border-gray-100 text-gray-600 text-sm py-1.5 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-0.5">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-0.5">
            <a href="tel:+902125902325" className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-primary-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span className="text-gray-900 hover:text-primary-red transition-colors font-semibold">+90 (212) 590 23 25</span>
            </a>
            <a href="tel:+905469402200" className="flex items-center gap-2 text-gray-500 hover:text-primary-red transition-colors">
              <svg className="w-3.5 h-3.5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              +90 (546) 940 22 00
            </a>
          </div>
          <div className="hidden md:flex items-center gap-1 text-gray-400 text-xs">
            <svg className="w-3 h-3 text-secondary-orange" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            20.000+ mezun · %94 başarı oranı
          </div>
        </div>
      </div>

      <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={springs.smooth}
      className={`fixed top-7 left-0 right-0 z-50 transition-all duration-500 ${isMounted && isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-100' : 'bg-white/50 backdrop-blur-sm'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              className="relative h-12 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={springs.bouncy}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={logo || "/logo.png"} 
                alt={siteName}
                className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(154,50,34,0.6)]"
              />
              
              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 bg-primary-red/30 rounded-full opacity-50 blur-xl -z-10"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, ...springs.smooth }}
              >
                <Link
                  href={item.href}
                    className="relative text-gray-700 hover:text-primary-red font-semibold transition-colors duration-300 group py-2"
                >
                  {item.label}
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-red to-secondary-orange rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={springs.snappy}
                  />
                  
                  {/* Hover glow effect */}
                  <span className="absolute inset-0 bg-primary-red/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, ...springs.bouncy }}
          >
            <Link href="/iletisim">
              <motion.div
                className="relative px-6 py-3 bg-gradient-to-r from-primary-red to-secondary-orange text-white rounded-2xl font-semibold shadow-glow-red overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(154, 50, 34, 0.7)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={springs.smooth}
              >
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                <span className="relative z-10">Bilgi Al</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl transition-all duration-300 bg-gray-100 hover:bg-gray-200"
            whileTap={{ scale: 0.9 }}
            transition={springs.snappy}
          >
            <motion.svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={springs.smooth}
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={springs.smooth}
            className="md:hidden backdrop-blur-2xl bg-primary-red/95 border-t border-primary-red/30 shadow-glass-lg"
          >
            <motion.div 
              className="container mx-auto px-4 py-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, ...springs.smooth }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl backdrop-blur-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 border border-white/20"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.05, ...springs.smooth }}
              >
                <Link
                  href="/iletisim"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 bg-gradient-to-r from-primary-red to-secondary-orange text-white rounded-xl font-semibold text-center shadow-glow-red"
                >
                  Bilgi Al
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
}
