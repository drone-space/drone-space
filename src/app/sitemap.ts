import { HOSTED_BASE_URL } from '@/data/constants';
import { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes = [
    '', // homepage
  ].map((route) => ({
    url: `${HOSTED_BASE_URL.DEFAULT}${route}`,
    lastModified: now.toISOString().split('T')[0], // formatted date
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticRoutes];
}
