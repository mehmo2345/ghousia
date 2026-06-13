'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS, buildWhatsAppUrl, cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#story', label: 'Story' },
  { href: '#awards', label: 'Awards' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Visit' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-charcoal/85 backdrop-blur-xl border-b border-gold/15 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <nav className="container mx-auto container-px flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full gold-border flex items-center justify-center bg-charcoal">
              <span className="font-display gold-text font-bold text-xl">G</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-lg gold-text font-bold">Ghousia</div>
              <div className="text-[9px] tracking-[0.3em] text-white/60 uppercase">
                Nalli Biryani
              </div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm text-white/80 hover:text-gold transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-8" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneIntl}`}
              className="hidden sm:flex items-center gap-2 text-sm text-white/80 hover:text-gold transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">{BUSINESS.phone}</span>
            </a>
            <a
              href={buildWhatsAppUrl(
                "Assalam o Alaikum Ghousia Nalli Biryani 🌙 I'd like to place an order."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-sm"
            >
              Order Now
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-charcoal/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between container mx-auto container-px py-5">
              <span className="font-display gold-text text-xl font-bold">Ghousia</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 text-white"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.07 } },
              }}
              className="flex flex-col items-center justify-center gap-4 mt-12 px-6"
            >
              {NAV_LINKS.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-white hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-6"
              >
                <a
                  href={buildWhatsAppUrl("Assalam o Alaikum, I'd like to order.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  onClick={() => setOpen(false)}
                >
                  Order on WhatsApp
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
