'use client';

import { motion } from 'framer-motion';
import { springs, entranceAnimations } from '@/lib/spring-animations';

interface TargetItem {
  icon: string;
  text: string;
}

interface TargetAudienceProps {
  title: string;
  items: TargetItem[];
}

export default function TargetAudience({ title, items }: TargetAudienceProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-primary-red mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={entranceAnimations}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, ...springs.smooth }}
              className="p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 flex flex-col items-center text-center group hover:bg-white/15 hover:shadow-glass-lg transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary-red/25 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-xl font-semibold text-white leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
