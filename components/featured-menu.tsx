'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ShoppingBag, Sparkles } from 'lucide-react';
import { MENU, type MenuItem } from '@/lib/menu';
import { buildWhatsAppUrl } from '@/lib/utils';
import { SectionHeading } from './section-heading';

export function FeaturedMenu() {
  const [activeCat, setActiveCat] = useState(MENU[0].id);
  const category = MENU.find((c) => c.id === activeCat) ?? MENU[0];

  return (
    <section id="menu" className="relative py-24 sm:py-32 scroll-mt-24">
      {/* Decorative */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-gold/5 blur-[120px] -z-10" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-crimson/10 blur-[120px] -z-10" />

      <div className="container mx-auto container-px">
        <SectionHeading
          eyebrow="Our Menu"
          title={
            <>
              The <span className="gold-text">legendary</span> menu
            </>
          }
          description="From our signature Nalli Biryani to traditional desserts — every dish, made the original Karachi way."
        />

        {/* Category tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 p-2 rounded-full glass">
            {MENU.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCat === cat.id
                    ? 'bg-gold-gradient text-charcoal shadow-gold-soft'
                    : 'text-white/70 hover:text-gold'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-white/55 italic mt-6 max-w-xl mx-auto text-sm">
          {category.subtitle}
        </p>

        {/* Items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {category.items.map((item, i) => (
              <MenuItemCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-14">
          <a
            href={buildWhatsAppUrl(
              "Assalam o Alaikum, I'd like to see the full menu and place an order."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <ShoppingBag className="w-4 h-4" /> View Full Menu & Order
          </a>
        </div>
      </div>
    </section>
  );
}

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const selected = item.prices[selectedIdx];
  const total = selected.value * qty;

  const orderMessage =
    `Assalam o Alaikum Ghousia Nalli Biryani 🌙\n\n` +
    `I'd like to order:\n` +
    `• ${item.name} — ${selected.label}\n` +
    `• Quantity: ${qty}\n` +
    `• Total: Rs ${total}\n\n` +
    `Please confirm availability and delivery time.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-3xl overflow-hidden glass hover:border-gold/40 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
        {item.badge && (
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-gradient text-charcoal text-[11px] font-bold tracking-wider uppercase shadow-gold-soft">
            <Sparkles className="w-3 h-3" />
            {item.badge}
          </div>
        )}
        <div className="absolute bottom-4 right-4 inline-flex items-center px-3 py-1.5 rounded-full bg-charcoal/80 backdrop-blur border border-gold/30">
          <span className="text-xs font-medium text-gold">From Rs {Math.min(...item.prices.map(p => p.value))}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-sm text-white/65 leading-relaxed mb-5">{item.description}</p>
        )}

        {/* Price options */}
        <div className="flex flex-wrap gap-2 mb-5">
          {item.prices.map((p, idx) => (
            <button
              key={p.label}
              onClick={() => setSelectedIdx(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                selectedIdx === idx
                  ? 'bg-gold text-charcoal border-gold shadow-gold-soft'
                  : 'border-white/15 text-white/70 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {p.label} · Rs {p.value}
            </button>
          ))}
        </div>

        {/* Quantity + total */}
        <div className="flex items-center justify-between pt-5 border-t border-white/10">
          <div className="flex items-center gap-1 p-1 rounded-full border border-white/15">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              aria-label="Decrease quantity"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-charcoal transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center font-semibold text-white">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              aria-label="Increase quantity"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-charcoal transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-widest text-white/50">
              Total
            </div>
            <div className="font-display text-xl font-bold gold-text">
              Rs {total.toLocaleString()}
            </div>
          </div>
        </div>

        <a
          href={buildWhatsAppUrl(orderMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full mt-5 !py-3"
        >
          <ShoppingBag className="w-4 h-4" />
          Order on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
