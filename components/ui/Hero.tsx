'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { springs } from '@/lib/spring-animations';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: { text: string; href: string };
  ctaSubtext?: string;
  trustIcons?: { label: string; icon: string }[];
}

export default function Hero({ title, subtitle, primaryCta, ctaSubtext, trustIcons }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 md:pt-40 md:pb-32">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary-red/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary-orange/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={springs.smooth}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ...springs.smooth }}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ...springs.smooth }}
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ...springs.smooth }}
              className="flex flex-col items-start gap-4"
            >
              <Link href={primaryCta.href}>
                <motion.div
                  className="px-10 py-5 bg-secondary-orange hover:bg-secondary-orange-dark text-white rounded-2xl font-bold text-xl shadow-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {primaryCta.text}
                </motion.div>
              </Link>
              
              {ctaSubtext && (
                <p className="text-gray-500 text-sm ml-2 font-medium">
                  {ctaSubtext}
                </p>
              )}

              {/* Trust Icons */}
              {trustIcons && (
                <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-gray-100 w-full">
                  {trustIcons.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-gray-700 font-semibold text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Right content - Video/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, ...springs.smooth }}
            className="relative"
          >
            <div className="aspect-video md:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=compress&cs=tinysrgb&w=1200"
                alt="Direksiyon Dersi"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white"
                >
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Decorative badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl hidden md:block"
            >
              <div className="text-primary-red font-bold text-2xl">%94</div>
              <div className="text-gray-600 text-xs font-semibold">Başarı Oranı</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
