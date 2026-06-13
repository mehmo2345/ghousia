import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BUSINESS = {
  name: 'Ghousia Nalli Biryani',
  tagline: "Karachi's Original Famous Nalli Biryani",
  phone: '03242524303',
  phoneIntl: '+923242524303',
  whatsapp: '923242524303',
  address: '2/240, Liaquatabad Commercial Area, Main Sarafa Bazar, Block 6 Liaquatabad Town, Karachi',
  addressShort: 'Liaquatabad, Karachi',
  hours: '11:00 AM – 11:00 PM',
  rating: 4.2,
  reviewsCount: 1200,
  yearsOfService: 30,
  mapsQuery: 'Ghousia Nalli Biryani Liaquatabad Karachi',
  mapsEmbed: 'https://www.google.com/maps?q=Ghousia+Nalli+Biryani+Liaquatabad+Karachi&output=embed',
  mapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=Ghousia+Nalli+Biryani+Liaquatabad+Karachi',
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    tiktok: 'https://tiktok.com/',
  },
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
