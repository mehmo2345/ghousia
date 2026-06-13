'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buildWhatsAppUrl } from '@/lib/utils';

export function WhatsappFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          href={buildWhatsAppUrl(
            "Assalam o Alaikum Ghousia Nalli Biryani 🌙 I'd like to place an order."
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
          className="fixed bottom-6 right-6 z-50 group"
        >
          {/* Pulse */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping" />
          <span className="relative flex items-center gap-3 pl-4 pr-5 py-3.5 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:bg-[#1ebe57] transition-colors">
            <svg
              viewBox="0 0 32 32"
              className="w-6 h-6"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19.11 17.27c-.27-.13-1.6-.79-1.85-.88s-.43-.13-.61.13c-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07s-1.14-.42-2.17-1.34c-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48s.18-.27.27-.45c.09-.18.04-.34-.02-.47-.07-.13-.61-1.46-.83-2-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.47.07-.72.34s-.95.93-.95 2.27.97 2.63 1.11 2.81c.13.18 1.92 2.93 4.66 4.1.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28s.23-1.18.16-1.28c-.07-.11-.25-.18-.52-.31zM16.02 6.67c-5.16 0-9.36 4.2-9.36 9.36 0 1.65.43 3.27 1.25 4.69l-1.32 4.83 4.95-1.3a9.32 9.32 0 0 0 4.47 1.14h.01c5.16 0 9.36-4.2 9.36-9.36 0-2.5-.97-4.85-2.74-6.62a9.28 9.28 0 0 0-6.62-2.74zm5.46 13.4a7.95 7.95 0 0 1-1.13.93l-.16.1c-.06.03-.13.07-.19.1a7.78 7.78 0 0 1-9.69-1.06c-.07-.07-.13-.14-.2-.21l-.18-.21a7.79 7.79 0 0 1-1.7-4.86 7.79 7.79 0 0 1 7.78-7.78c2.08 0 4.03.81 5.5 2.28a7.74 7.74 0 0 1 2.28 5.5 7.77 7.77 0 0 1-2.31 5.21z" />
            </svg>
            <span className="hidden sm:inline font-semibold tracking-wide text-sm">
              Order Now
            </span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
