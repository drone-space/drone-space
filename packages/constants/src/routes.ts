/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

export const authRoutes = [
  '/api/auth',
  '/auth/sign-in',
  // '/auth/error',
  // '/auth/signed-out',

  // Add other auth routes
];

export const protectedRoutes = [
  '/',
  '/admin',
  '/quizzes',

  // Add other protected routes
];

export const ignoredRoutes = [
  '/manifest.webmanifest',
  '/auth/error',
  '/auth/signed-out',

  // Add other ignored routes
];

export const protectedDeadEndRoutes = [
  '/auth/sign-out',

  // Add other protected dead-end routes
];
