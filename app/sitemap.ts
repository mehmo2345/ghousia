import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ghousianallibiryani.com';
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/#menu`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/#story`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#visit`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
