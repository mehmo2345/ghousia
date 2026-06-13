'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl } from '@/lib/utils';

export function OrderCta() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/80 to-crimson-900/60" />
      </div>

      <div className="container mx-auto container-px">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="eyebrow justify-center mb-5">
            <span className="w-8 h-px bg-gold/60" />
            Hungry?
            <span className="w-8 h-px bg-gold/60" />
          </div>

          <h2 className="section-heading text-balance">
            Order in <span className="gold-text">30 seconds</span> —
            <br className="hidden sm:block" /> delivered hot, fresh, and on time.
          </h2>

          <p className="mt-5 text-white/75 text-lg max-w-2xl mx-auto text-pretty">
            One message on WhatsApp, and your favorite Nalli Biryani is on its way.
            No apps, no forms — just the original taste, delivered to your door.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href={buildWhatsAppUrl(
                "Assalam o Alaikum Ghousia Nalli Biryani 🌙 I'd like to place an order."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group !px-8"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Order on WhatsApp
            </a>
            <a href={`tel:${BUSINESS.phoneIntl}`} className="btn-ghost !px-8">
              <Phone className="w-5 h-5" />
              {BUSINESS.phone}
            </a>
          </div>

          {/* Mini features */}
          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            {[
              { v: '11AM – 11PM', l: 'Open Daily' },
              { v: 'Cash & Card', l: 'Payments' },
              { v: 'Karachi Wide', l: 'Delivery' },
            ].map((m) => (
              <div key={m.l} className="text-center">
                <div className="font-display text-base sm:text-lg font-bold gold-text">
                  {m.v}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/55 mt-1">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
