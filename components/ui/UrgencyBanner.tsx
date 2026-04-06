'use client';

import { motion } from 'framer-motion';

interface UrgencyBannerProps {
  text: string;
}

export default function UrgencyBanner({ text }: UrgencyBannerProps) {
  return (
    <div className="bg-primary-red py-4 relative overflow-hidden">
      {/* Animated Shine Effect */}
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 -skew-x-12"
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="text-white font-bold text-lg md:text-xl flex items-center justify-center gap-3">
          <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
          {text}
        </p>
      </div>
    </div>
  );
}
