export const staticRedirects = {
  '/about/contact': '/contact',
  '/index': '/',
};

export const dynamicRedirects = [
  {
    // Matches "/resources/blog/any-title-123" and preserves the dynamic part
    pattern: /^\/resources\/blog\/([^/]+)$/,
    replacement: '/blog/$1',
  },
];
