'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { BUSINESS } from '@/lib/utils';
import { SectionHeading } from './section-heading';

export function Location() {
  return (
    <section id="visit" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="container mx-auto container-px">
        <SectionHeading
          eyebrow="Visit Us"
          title={
            <>
              Come taste it <span className="gold-text">in person</span>
            </>
          }
          description="Located in the heart of Liaquatabad, Karachi. Walk in for the full experience."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] lg:aspect-auto rounded-3xl overflow-hidden border border-gold/30 shadow-premium"
          >
            <iframe
              title="Ghousia Nalli Biryani location"
              src="https://www.google.com/maps?q=Ghousia+Nalli+Biryani+Liaquatabad+Karachi&output=embed"
              className="absolute inset-0 w-full h-full grayscale-[30%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 pointer-events-none rounded-3xl" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 sm:p-10 space-y-7"
          >
            <InfoRow icon={MapPin} label="Address" lines={[BUSINESS.address]} />
            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <InfoRow
              icon={Phone}
              label="Call Us"
              lines={[BUSINESS.phone]}
              href={`tel:${BUSINESS.phoneIntl}`}
            />
            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <InfoRow
              icon={Clock}
              label="Open Hours"
              lines={['Monday – Sunday', '11:00 AM – 11:00 PM']}
            />

            <a
              href={BUSINESS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full !py-3.5 mt-2"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  lines,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <>
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <div className="flex-1">
        <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">
          {label}
        </div>
        {lines.map((l) => (
          <div key={l} className="text-white/85 text-sm sm:text-base leading-relaxed">
            {l}
          </div>
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-start gap-4 group hover:opacity-90">
        {content}
      </a>
    );
  }
  return <div className="flex items-start gap-4">{content}</div>;
}
