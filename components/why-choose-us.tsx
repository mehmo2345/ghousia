'use client';

import { motion } from 'framer-motion';
import { Flame, BeefIcon, ChefHat, Sparkles } from 'lucide-react';
import { SectionHeading } from './section-heading';

const features = [
  {
    icon: Flame,
    title: 'Original Nalli Biryani',
    desc: 'The signature bone-marrow biryani Karachi fell in love with. Made the original way, no shortcuts.',
  },
  {
    icon: BeefIcon,
    title: 'Premium Beef Quality',
    desc: 'Hand-picked, fresh beef cuts and slow-braised nalli for unmatched depth, tenderness, and richness.',
  },
  {
    icon: ChefHat,
    title: 'Traditional Karachi Taste',
    desc: 'A family masala balance perfected over generations — bold, layered, and unforgettable.',
  },
  {
    icon: Sparkles,
    title: 'Fresh Daily Preparation',
    desc: 'Cooked fresh every single day. No leftovers — only the taste that earned our name.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="container mx-auto container-px">
        <SectionHeading
          eyebrow="Why Ghousia"
          title={
            <>
              The taste people <span className="gold-text">remember</span>,
              <br className="hidden sm:block" /> the legacy they trust
            </>
          }
          description="Four reasons why thousands choose Ghousia Nalli Biryani over every other biryani in Karachi."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-7 rounded-2xl glass overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-gold-soft">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-transparent transition-all duration-500" />
                {/* Number */}
                <div className="absolute top-4 right-5 font-display text-5xl text-gold/10 group-hover:text-gold/20 transition-colors">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <f.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
