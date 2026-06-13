'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { SectionHeading } from './section-heading';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Signature Nalli Biryani plate',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80',
    alt: 'Aromatic spices and rice',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
    alt: 'Slow-cooked beef pulao',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=80',
    alt: 'Traditional sheer khurma dessert',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=80',
    alt: 'Karachi street food vibe',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80',
    alt: 'Biryani with raita and salad',
    span: 'md:col-span-2',
  },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const open = (i: number) => setActive(i);
  const close = () => setActive(null);
  const prev = () =>
    setActive((a) => (a === null ? null : (a - 1 + photos.length) % photos.length));
  const next = () =>
    setActive((a) => (a === null ? null : (a + 1) % photos.length));

  return (
    <section id="gallery" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="container mx-auto container-px">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Moments worth <span className="gold-text">savoring</span>
            </>
          }
          description="A glimpse into the food, the kitchen, and the spirit of Ghousia."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <motion.button
              key={p.src}
              type="button"
              onClick={() => open(i)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 hover:border-gold/50 transition-all duration-500 ${p.span}`}
              aria-label={`Open ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-3 left-4 right-4 text-left text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold mb-1">
                  <Camera className="w-3 h-3" /> View
                </div>
                <div className="text-sm font-medium line-clamp-2">{p.alt}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-gold"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-gold hover:border-gold"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={photos[active].src}
              alt={photos[active].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain border border-gold/30"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-gold hover:border-gold"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
