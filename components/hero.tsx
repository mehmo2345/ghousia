'use client';

import { motion } from 'framer-motion';
import { Star, Award, Users, Clock, ArrowDown } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl } from '@/lib/utils';

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/80 to-charcoal" />
        <div className="absolute inset-0 bg-hero-vignette opacity-90" />
        <div className="absolute inset-0 bg-gold-radial opacity-40" />
      </div>

      {/* Decorative ornament */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-gold blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, delay: 1.7 }}
        className="absolute -bottom-32 -right-20 w-[600px] h-[600px] rounded-full bg-crimson blur-[140px]"
      />

      <div className="container mx-auto container-px relative z-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs sm:text-sm tracking-widest uppercase text-white/80 font-medium">
            Karachi's Original • Since Decades
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.7 }}
          className="font-display font-bold text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-balance"
        >
          <span className="block text-white">Karachi's Most</span>
          <span className="block gold-text mt-1">Famous Nalli</span>
          <span className="block text-white">Biryani</span>
        </motion.h1>

        {/* Urdu accent */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="font-urdu text-2xl sm:text-3xl text-gold/90 mt-6"
          dir="rtl"
        >
          غوثیہ نلی بریانی
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          Experience the legendary taste that made Ghousia Nalli Biryani a household
          name. Slow-cooked, bone-marrow rich, and made the original way.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={buildWhatsAppUrl(
              "Assalam o Alaikum Ghousia Nalli Biryani 🌙 I'd like to place an order."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto animate-pulse-gold"
          >
            Order Now
          </a>
          <a href="#menu" className="btn-ghost w-full sm:w-auto">
            View Menu
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          <TrustBadge
            icon={<Star className="w-5 h-5 fill-gold text-gold" />}
            value={`${BUSINESS.rating}★`}
            label="Customer Rating"
          />
          <TrustBadge
            icon={<Users className="w-5 h-5 text-gold" />}
            value={`${BUSINESS.reviewsCount}+`}
            label="Happy Customers"
          />
          <TrustBadge
            icon={<Clock className="w-5 h-5 text-gold" />}
            value={`${BUSINESS.yearsOfService}+ Yrs`}
            label="Of Tradition"
          />
          <TrustBadge
            icon={<Award className="w-5 h-5 text-gold" />}
            value="Award"
            label="Winning Taste"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#why"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-scroll-down" />
      </motion.a>
    </section>
  );
}

function TrustBadge({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="glass rounded-2xl p-4 sm:p-5 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-center mb-2">{icon}</div>
      <div className="font-display text-xl sm:text-2xl font-bold gold-text">{value}</div>
      <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60 mt-1">
        {label}
      </div>
    </div>
  );
}
