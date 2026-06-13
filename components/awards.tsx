'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Crown } from 'lucide-react';
import { SectionHeading } from './section-heading';

const awards = [
  {
    icon: Trophy,
    title: 'Consumer Choice Award',
    year: '2024',
    desc: 'Voted #1 Biryani in Liaquatabad by Karachi diners.',
  },
  {
    icon: Crown,
    title: 'Brand of the Year',
    year: '2023',
    desc: 'Recognized for heritage, quality, and customer loyalty.',
  },
  {
    icon: Medal,
    title: 'Best Nalli Biryani',
    year: '2022',
    desc: 'Awarded by Karachi Food Critics Circle.',
  },
  {
    icon: Award,
    title: 'Customer Excellence',
    year: '2024',
    desc: '4.2★ rating across thousands of reviews.',
  },
];

export function Awards() {
  return (
    <section id="awards" className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal-100 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-radial opacity-50" />
      </div>

      <div className="container mx-auto container-px">
        <SectionHeading
          eyebrow="Recognition"
          title={
            <>
              Awarded by <span className="gold-text">Karachi</span>,
              <br className="hidden sm:block" /> loved by generations
            </>
          }
          description="A taste worth honoring — and a brand worth trusting."
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div className="absolute -inset-1 rounded-3xl bg-gold-gradient opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-500" />

              <div className="relative h-full glass rounded-3xl p-6 sm:p-8 text-center overflow-hidden border-gold/20 group-hover:border-gold/50 transition-all duration-500">
                {/* Ribbon corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-3 -right-8 rotate-45 bg-gold-gradient text-charcoal text-[9px] font-bold tracking-widest uppercase py-1 w-28 text-center shadow-md">
                    {a.year}
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative inline-flex w-20 h-20 mb-5"
                >
                  <div className="absolute inset-0 rounded-full bg-gold-gradient opacity-20 blur-md group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-charcoal border-2 border-gold/50 flex items-center justify-center">
                    <a.icon className="w-9 h-9 text-gold" strokeWidth={1.5} />
                  </div>
                </motion.div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                  {a.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
