'use client';

import { motion } from 'framer-motion';
import { springs, entranceAnimations } from '@/lib/spring-animations';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  steps: Step[];
}

export default function HowItWorks({ title, steps }: HowItWorksProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-100 -z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={entranceAnimations}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, ...springs.smooth }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white border-4 border-primary-red flex items-center justify-center text-2xl font-black text-primary-red mb-8 shadow-xl">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
