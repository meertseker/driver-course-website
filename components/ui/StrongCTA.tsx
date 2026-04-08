'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { springs } from '@/lib/spring-animations';

interface StrongCTAProps {
  title: string;
  buttonText: string;
  buttonHref: string;
  subtext: string;
}

export default function StrongCTA({ title, buttonText, buttonHref, subtext }: StrongCTAProps) {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary-red/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={springs.smooth}
          className="text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 md:p-16 shadow-glass-xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
            {title}
          </h2>

          <div className="flex flex-col items-center gap-6">
            <Link href={buttonHref}>
              <motion.div
                className="px-12 py-6 bg-secondary-orange hover:bg-secondary-orange-dark text-white rounded-2xl font-bold text-2xl shadow-2xl shadow-secondary-orange/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {buttonText}
              </motion.div>
            </Link>

            <p className="text-blue-100 text-lg font-medium">
              {subtext}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
