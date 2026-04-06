'use client';

import { motion } from 'framer-motion';
import { springs } from '@/lib/spring-animations';

interface EmotionalConnectionProps {
  text: string;
  subtext: string;
  backgroundImage: string;
}

export default function EmotionalConnection({ text, subtext, backgroundImage }: EmotionalConnectionProps) {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Duygusal Bağ"
          className="w-full h-full object-cover scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springs.smooth}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {text}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 font-medium">
            {subtext}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
