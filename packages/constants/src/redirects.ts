/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

export const staticRedirects = {
  '/about/contact': '/contact',
};

export const dynamicRedirects = [
  {
    // Matches "/resources/blog/any-title-123" and preserves the dynamic part
    pattern: /^\/resources\/blog\/([^/]+)$/,
    replacement: '/blog/$1',
  },
];
