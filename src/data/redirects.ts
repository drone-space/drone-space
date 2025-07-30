export const staticRedirects = {
  '/contact': '/about/contact',
  '/stories/gallery': '/about/gallery',
  '/stories/blog': '/resources/blog',
  '/services': '/drone-solutions',
  '/services/light-shows': '/drone-solutions/light-shows',
  '/training': '/drone-training',
  '/training/basic': '/drone-training',
  '/training/advanced': '/drone-training',
  '/pricing/training': '/drone-training/pricing',
  '/help/faq': '/resources/faq',
  '/terms-conditions': '/legal/terms',
  '/privacy-policy': '/legal/policy',
};

export const dynamicRedirects = [
  {
    // Matches "/stories/blog/any-title-123" and preserves the dynamic part
    pattern: /^\/stories\/blog\/([^\/]+)$/,
    replacement: '/resources/blog/$1',
  },

  {
    // Matches "/stories/blog/categories/any-title-123" and preserves the dynamic part
    pattern: /^\/stories\/blog\/categories\/([^\/]+)$/,
    replacement: '/resources/blog/categories/$1',
  },

  {
    // Matches "/stories/blog/tags/any-title-123" and preserves the dynamic part
    pattern: /^\/stories\/blog\/tags\/([^\/]+)$/,
    replacement: '/resources/blog/tags/$1',
  },

  {
    // Matches "/services/any-service-title" and redirects to /drone-solutions
    pattern: /^\/services\/[^\/]+$/,
    replacement: '/drone-solutions',
  },

  {
    pattern: /^\/resources\/blog\/categories\/([^\/]+)$/,
    replacement: '/resources/blog',
  },

  {
    pattern: /^\/resources\/blog\/tags\/([^\/]+)$/,
    replacement: '/resources/blog',
  },
];
