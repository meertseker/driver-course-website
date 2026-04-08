'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { springs, entranceAnimations } from '@/lib/spring-animations';
import { glassCard } from '@/lib/glass-effects';

interface StatsCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
  delay?: number;
}

export default function StatsCard({
  value,
  label,
  suffix = '',
  prefix = '',
  icon,
  delay = 0,
}: StatsCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        // Use 1 decimal place for values with decimals, otherwise floor
        const isDecimal = value % 1 !== 0;
        if (isDecimal) {
          setCount(Number(current.toFixed(1)));
        } else {
          setCount(Math.floor(current));
        }
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <motion.div
      variants={entranceAnimations}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      transition={{ delay, ...springs.smooth }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="relative group"
    >
      <div className="relative rounded-3xl p-8 transition-all duration-300 overflow-hidden flex flex-col items-center backdrop-blur-xl bg-white/10 border border-white/20 shadow-glass-lg">
        {/* Value with counter animation */}
        <div className="mb-2 relative">
          <motion.span 
            className="text-5xl md:text-6xl font-bold text-white"
          >
            {prefix}
            {count.toLocaleString('tr-TR')}
            {suffix}
          </motion.span>
        </div>

        {/* Label */}
        <p className="text-blue-100 font-bold text-center relative z-10">{label}</p>

        {/* Glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent group-hover:from-white/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
        
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-red/0 to-secondary-orange/0 rounded-3xl blur-xl"
          whileHover={{
            background: 'linear-gradient(to bottom right, rgba(154,50,34,0.15), rgba(212,96,62,0.15))',
          }}
          transition={springs.smooth}
        />
      </div>
    </motion.div>
  );
}
