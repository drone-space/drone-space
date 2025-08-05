import { cleanPaths } from '@/utilities/helpers/string';
import links from './links';

export const authRoues = [
  '/auth/password',
  '/auth/sign-in',
  '/auth/sign-up',
  '/auth/verify',
  // Add other auth routes
];

export const protectedRoutes = [
  '/account',
  '/dashboard',
  '/auth/sign-out',
  // Add other protected routes
];

const mainLinks = links.map((l) => l.link);
const subLinks: string[] = [];

links.map((l) => {
  if (l.subLinks) {
    l.subLinks.map((sl) => {
      subLinks.push(sl.link);
    });
  }
});

export const unprotectedRoutes = [
  '/',

  ...cleanPaths([...mainLinks, ...subLinks]),

  '/legal/terms',
  '/legal/policy',
];

export const sitemapRoutes = [...unprotectedRoutes].filter((l) => l != '/');

export const sessionRoutes = [...unprotectedRoutes].filter((l) => l != '/shop');
