import { MetadataRoute } from 'next';
import { HOSTED_BASE_URL } from '@/data/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/*?ref=*', // Prevent crawling of referral URLs
        '/*?utm_*', // Prevent crawling of UTM URLs
        // Add more private routes here
      ],
    },
    sitemap: `${HOSTED_BASE_URL.DEFAULT}/sitemap.xml`,
  };
}
