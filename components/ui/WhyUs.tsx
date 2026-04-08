'use client';

import { motion } from 'framer-motion';
import { springs, entranceAnimations } from '@/lib/spring-animations';

interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

interface WhyUsProps {
  title: string;
  items: WhyItem[];
  image: string;
}

export default function WhyUs({ title, items, image }: WhyUsProps) {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springs.smooth}
              className="text-3xl md:text-5xl font-bold text-white mb-12 leading-tight"
            >
              {title}
            </motion.h2>

            <div className="space-y-10">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={entranceAnimations}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, ...springs.smooth }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-red text-white flex items-center justify-center text-2xl shadow-lg shadow-primary-red/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ...springs.smooth }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={image}
                alt="Sadece öğretmiyoruz kazandırıyoruz"
                className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            {/* Floating Decoration */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-orange/10 blur-3xl rounded-full -z-10" />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-red/10 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
