export const staticRedirects = {
  '/about/contact': '/contact',
  '/stories/gallery': '/gallery',
  '/about/gallery': '/gallery',
  '/stories/blog': '/blog',
  '/resources/blog': '/blog',
  '/services': '/drone-solutions',
  '/services/light-shows': '/drone-solutions/light-shows',
  '/training': '/drone-training',
  '/training/basic': '/drone-training',
  '/training/advanced': '/drone-training',
  '/pricing/training': '/drone-training/pricing',
  '/help/faq': '/faq',
  '/resources/faq': '/faq',
  '/terms-conditions': '/legal/terms',
  '/privacy-policy': '/legal/policy',

  '/shop/drones/camera': '/shop?category=camera&layout=grid&listSize=6#listing',
  '/shop/drones/cinematography':
    '/shop?category=cinematography&layout=grid&listSize=6#listing',
  '/shop/drones/enterprise':
    '/shop?category=enterprise&layout=grid&listSize=6#listing',
  '/shop/drones/mapping':
    '/shop?category=mapping&layout=grid&listSize=6#listing',
  '/shop/drones/agriculture':
    '/shop?category=agriculture&layout=grid&listSize=6#listing',
  '/shop/drones/upcoming':
    '/shop?category=upcoming&layout=grid&listSize=6#listing',
};

export const dynamicRedirects = [
  {
    // Matches "/stories/blog/any-title-123" and preserves the dynamic part
    pattern: /^\/stories\/blog\/([^\/]+)$/,
    replacement: '/blog/$1',
  },

  {
    // Matches "/resources/blog/any-title-123" and preserves the dynamic part
    pattern: /^\/resources\/blog\/([^\/]+)$/,
    replacement: '/blog/$1',
  },

  {
    // Matches "/stories/blog/categories/any-title-123" and preserves the dynamic part
    pattern: /^\/stories\/blog\/categories\/([^\/]+)$/,
    replacement: '/blog/categories/$1',
  },

  {
    // Matches "/resources/blog/categories/any-title-123" and preserves the dynamic part
    pattern: /^\/resources\/blog\/categories\/([^\/]+)$/,
    replacement: '/blog/categories/$1',
  },

  {
    // Matches "/stories/blog/tags/any-title-123" and preserves the dynamic part
    pattern: /^\/stories\/blog\/tags\/([^\/]+)$/,
    replacement: '/blog/tags/$1',
  },

  {
    // Matches "/resources/blog/tags/any-title-123" and preserves the dynamic part
    pattern: /^\/resources\/blog\/tags\/([^\/]+)$/,
    replacement: '/blog/tags/$1',
  },

  {
    // Matches "/services/any-service-title" and redirects to /drone-solutions
    pattern: /^\/services\/[^\/]+$/,
    replacement: '/drone-solutions',
  },

  {
    pattern: /^\/resources\/blog\/categories\/([^\/]+)$/,
    replacement: '/blog',
  },

  {
    pattern: /^\/resources\/blog\/tags\/([^\/]+)$/,
    replacement: '/blog',
  },
];
