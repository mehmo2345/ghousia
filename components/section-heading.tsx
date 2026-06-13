'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className={cn('eyebrow mb-4', align === 'center' && 'justify-center')}>
          <span className="w-8 h-px bg-gold/60" />
          {eyebrow}
          <span className="w-8 h-px bg-gold/60" />
        </div>
      )}
      <h2 className="section-heading text-balance">{title}</h2>
      {description && (
        <p className="mt-5 text-white/65 text-base sm:text-lg leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  );
}
