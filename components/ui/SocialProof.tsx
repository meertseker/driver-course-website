'use client';

import { motion } from 'framer-motion';
import { springs } from '@/lib/spring-animations';
import TestimonialCard from './TestimonialCard';

interface Review {
  name: string;
  course: string;
  rating: number;
  text: string;
  image?: string;
}

interface SocialProofProps {
  title: string;
  reviews: Review[];
}

export default function SocialProof({ title, reviews }: SocialProofProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-primary-red mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <TestimonialCard
              key={index}
              {...review}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
