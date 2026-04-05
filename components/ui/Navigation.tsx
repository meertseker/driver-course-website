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
    setIsMounted(true);
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
    { name: 'Büyükçekmece', phone: '+90 (212) 883 08 83', phoneMobile: null },
  ];

  return (
    <>
      {/* Top info bar */}
      <div className="fixed top-0 left-0 right-0 z-[51] bg-[#071629]/95 backdrop-blur-md border-b border-white/10 text-white text-sm py-1.5 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-0.5">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-0.5">
            {branches.map((b) => (
              <div key={b.name} className="flex items-center gap-2">
                <span className="text-secondary-orange font-semibold text-xs">{b.name}:</span>
                <a href={`tel:${b.phone.replace(/[\s()]/g,'')}`} className="text-white hover:text-secondary-gold transition-colors font-medium">
                  {b.phone}
                </a>
                {b.phoneMobile && (
                  <>
                    <span className="text-white/30">·</span>
                    <a href={`tel:${b.phoneMobile.replace(/[\s()]/g,'')}`} className="text-white hover:text-secondary-gold transition-colors">
                      {b.phoneMobile}
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-1 text-white/60 text-xs">
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
      className={`fixed top-7 left-0 right-0 z-50 transition-all duration-500 ${isMounted ? glassNavbar(isScrolled) : glassNavbar(false)}`}
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
                  className="relative text-white dark:text-white hover:text-secondary-gold dark:hover:text-secondary-gold font-semibold transition-colors duration-300 group py-2"
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
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
              isMounted && isScrolled 
                ? 'backdrop-blur-lg bg-white/20 hover:bg-white/30' 
                : 'backdrop-blur-lg bg-white/10 hover:bg-white/20'
            }`}
            whileTap={{ scale: 0.9 }}
            transition={springs.snappy}
          >
            <motion.svg
              className="w-6 h-6 text-white"
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
