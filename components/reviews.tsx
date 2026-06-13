'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from './section-heading';

const reviews = [
  {
    name: 'Ahmed Raza',
    location: 'Liaquatabad, Karachi',
    rating: 5,
    text: 'Karachi mein iss se behtar Nalli Biryani aaj tak nahi khaayi. The bone marrow is heavenly — soft, melts in your mouth, and the masala balance is unmatched.',
    initials: 'AR',
  },
  {
    name: 'Fatima Siddiqui',
    location: 'PECHS, Karachi',
    rating: 5,
    text: 'I order from Ghousia for every family gathering. The Beef Pulao is incredible — light, flavorful, and the meat literally falls off the bone. Old Karachi taste at its best.',
    initials: 'FS',
  },
  {
    name: 'Bilal Khan',
    location: 'DHA, Karachi',
    rating: 5,
    text: 'Traveled across the city just for this. Worth every minute in traffic. Their Sheer Khurma during Eid is something I now wait for all year.',
    initials: 'BK',
  },
  {
    name: 'Sana Iqbal',
    location: 'Gulshan, Karachi',
    rating: 4,
    text: 'Real, original taste. No fancy marketing — just food the way our grandmothers made. Half-pao is perfect for two people. Highly recommended.',
    initials: 'SI',
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden">
      <div className="container mx-auto container-px">
        <SectionHeading
          eyebrow="Reviews"
          title={
            <>
              What <span className="gold-text">Karachi</span> says
            </>
          }
          description="Real words from real customers who keep coming back."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass rounded-3xl p-7 sm:p-8 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
            >
              <Quote className="absolute top-5 right-6 w-12 h-12 text-gold/10 group-hover:text-gold/25 transition-colors" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-4 h-4 ${
                      idx < r.rating ? 'fill-gold text-gold' : 'text-white/20'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 leading-relaxed text-pretty">"{r.text}"</p>

              {/* Author */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-700 flex items-center justify-center font-display font-bold text-charcoal">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-white">{r.name}</div>
                  <div className="text-xs text-white/55">{r.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 max-w-md mx-auto glass rounded-2xl p-6 text-center"
        >
          <div className="flex justify-center items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <div className="font-display text-3xl font-bold gold-text">4.2 / 5.0</div>
          <div className="text-sm text-white/65 mt-1">
            Based on 1,200+ verified reviews
          </div>
        </motion.div>
      </div>
    </section>
  );
}
