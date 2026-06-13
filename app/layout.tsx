import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces, Noto_Nastaliq_Urdu } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { BUSINESS } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  variable: '--font-noto-nastaliq',
  display: 'swap',
  weight: ['400', '700'],
});

export const viewport: Viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ghousianallibiryani.com'),
  title: {
    default: "Ghousia Nalli Biryani — Karachi's Most Famous Nalli Biryani | Liaquatabad",
    template: '%s | Ghousia Nalli Biryani',
  },
  description:
    "Experience Karachi's legendary Nalli Biryani at Ghousia. Authentic beef biryani, beef pulao, and traditional desserts — slow-cooked, bone-marrow rich, family recipe since decades. Liaquatabad, Karachi.",
  keywords: [
    'Best Biryani in Karachi',
    'Nalli Biryani Karachi',
    'Beef Biryani Karachi',
    'Ghousia Nalli Biryani',
    'Liaquatabad Biryani',
    'Karachi food',
    'Beef Pulao Karachi',
    'Sarafa Bazar biryani',
    'biryani delivery Karachi',
    'famous biryani Liaquatabad',
  ],
  authors: [{ name: 'Ghousia Nalli Biryani' }],
  creator: 'Ghousia Nalli Biryani',
  publisher: 'Ghousia Nalli Biryani',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://ghousianallibiryani.com',
    siteName: 'Ghousia Nalli Biryani',
    title: "Ghousia Nalli Biryani — Karachi's Most Famous Nalli Biryani",
    description:
      "Karachi's legendary Nalli Biryani. Slow-cooked beef biryani and pulao with bone marrow, made the original way in Liaquatabad since decades.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ghousia Nalli Biryani — Karachi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ghousia Nalli Biryani — Karachi's Most Famous Nalli Biryani",
    description:
      "Karachi's legendary Nalli Biryani. Slow-cooked beef biryani and pulao with bone marrow.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'restaurant',
};

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': 'https://ghousianallibiryani.com/#restaurant',
  name: BUSINESS.name,
  description:
    "Karachi's most famous Nalli Biryani — slow-cooked beef biryani and pulao with bone marrow, served from Liaquatabad since decades.",
  url: 'https://ghousianallibiryani.com',
  telephone: BUSINESS.phoneIntl,
  servesCuisine: ['Pakistani', 'Biryani', 'Beef Biryani', 'Beef Pulao', 'Nalli Biryani'],
  priceRange: 'Rs 60 – Rs 1200',
  image: 'https://ghousianallibiryani.com/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2/240, Liaquatabad Commercial Area, Main Sarafa Bazar',
    addressLocality: 'Karachi',
    addressRegion: 'Sindh',
    postalCode: '75900',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.9056,
    longitude: 67.0392,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '11:00',
    closes: '23:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.2',
    reviewCount: '1200',
    bestRating: '5',
    worstRating: '1',
  },
  acceptsReservations: 'False',
  hasMenu: 'https://ghousianallibiryani.com/#menu',
  sameAs: [
    BUSINESS.social.facebook,
    BUSINESS.social.instagram,
    BUSINESS.social.tiktok,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${nastaliq.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <Script
          id="restaurant-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-charcoal focus:rounded"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
