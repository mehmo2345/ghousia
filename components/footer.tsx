import { Facebook, Instagram, MapPin, Phone, Clock, Crown } from 'lucide-react';
import { BUSINESS } from '@/lib/utils';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold/20 bg-gradient-to-b from-charcoal to-black">
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto container-px py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#top" className="inline-flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gold blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-700 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-charcoal" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <div className="font-display text-xl font-bold gold-text leading-none">
                  Ghousia
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/60 mt-1">
                  Nalli Biryani · Karachi
                </div>
              </div>
            </a>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-md">
              Karachi's legendary Nalli Biryani — slow-cooked beef biryani and pulao,
              served the original way since decades. A family legacy of taste, trust,
              and tradition.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Facebook, href: BUSINESS.social.facebook, label: 'Facebook' },
                { Icon: Instagram, href: BUSINESS.social.instagram, label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/60 transition-all hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-5">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { l: 'Our Menu', h: '#menu' },
                { l: 'Our Story', h: '#story' },
                { l: 'Awards', h: '#awards' },
                { l: 'Gallery', h: '#gallery' },
                { l: 'Reviews', h: '#reviews' },
                { l: 'Visit Us', h: '#visit' },
              ].map((l) => (
                <li key={l.l}>
                  <a
                    href={l.h}
                    className="text-white/65 hover:text-gold transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold transition-all duration-300 group-hover:w-4" />
                    {l.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/65">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{BUSINESS.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phoneIntl}`}
                  className="flex items-center gap-3 text-white/65 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/65">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  Open Daily
                  <br />
                  11:00 AM – 11:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <div className="flex items-center gap-2">
            <span>© {year} Ghousia Nalli Biryani.</span>
            <span className="hidden sm:inline text-gold">·</span>
            <span className="hidden sm:inline">
              The taste of old Karachi, kept alive.
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms
            </a>
            <span className="text-white/30">
              Crafted with <span className="text-gold">✦</span> in Karachi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
