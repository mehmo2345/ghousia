'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function OurStory() {
  return (
    <section id="story" className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden">
      <div className="container mx-auto container-px">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
            className="relative h-[520px] sm:h-[560px]"
          >
            <div className="absolute top-0 left-0 w-[60%] aspect-[3/4] rounded-3xl overflow-hidden border border-gold/30 shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80"
                alt="Traditional biryani preparation at Ghousia"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] aspect-square rounded-3xl overflow-hidden border border-gold/30 shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80"
                alt="Ghousia Nalli Biryani signature plate"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-[40%] -right-2 sm:right-0 lg:-right-6 glass rounded-2xl p-5 w-48 z-10 animate-float"
            >
              <div className="text-[10px] uppercase tracking-widest text-gold mb-1">
                Family Legacy
              </div>
              <div className="font-display text-3xl font-bold gold-text">30+</div>
              <div className="text-xs text-white/70 mt-1">
                Years of perfecting one recipe
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
          >
            <div className="eyebrow mb-4">
              <span className="w-8 h-px bg-gold/60" />
              Our Story
            </div>
            <h2 className="section-heading text-balance">
              From a small Karachi corner to{' '}
              <span className="gold-text">every dinner table</span>
            </h2>
            <div className="mt-6 space-y-5 text-white/70 leading-relaxed text-pretty">
              <p>
                It started in the heart of Liaquatabad — a single karahi, a family
                recipe, and a belief that biryani is not just food, it's heritage.
                Long before food courts and apps, our grandfather served the first
                plate of Nalli Biryani that would later become a Karachi legend.
              </p>
              <p>
                Today, three decades later, the recipe hasn't changed. The whole
                spices are still hand-ground. The nalli is still slow-braised until
                the marrow melts. The rice is still layered, sealed, and dum-cooked
                the original way. Because shortcuts don't make legends.
              </p>
              <p>
                Every plate of Ghousia Nalli Biryani carries the trust of thousands
                of families across Karachi — the same families who have grown up on
                our taste, and whose children now bring their own.
              </p>
            </div>

            <div className="mt-8 relative glass rounded-2xl p-6 border-l-4 border-gold">
              <Quote className="absolute top-4 right-5 w-8 h-8 text-gold/20" />
              <p className="text-white/85 italic leading-relaxed">
                "We don't sell biryani. We serve a memory — the taste of old
                Karachi, kept alive on every plate."
              </p>
              <div className="mt-3 text-xs uppercase tracking-widest text-gold">
                — The Ghousia Family
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
