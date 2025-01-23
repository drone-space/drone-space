import { NextRequest, NextResponse } from 'next/server';
import { updateSession } from './libraries/supabase/middleware';
import { createRedirectHandler } from './utilities/helpers/middeware';

export async function middleware(request: NextRequest) {
  // First check for redirects
  const redirectResponse = handleRedirect(request);

  if (redirectResponse) {
    return redirectResponse;
  }

  // If no redirect, proceed with normal middleware
  const response = NextResponse.next({ request });

  // Get the origin from the request headers
  const origin = request.headers.get('origin') || '';

  console.log('origin', origin);

  if (
    origin.includes('localhost') ||
    origin.includes('127.0.0.1') ||
    origin.includes('vercel.app') ||
    origin.includes('dronespace.co.ke') ||
    origin.includes('aiconference.co.ke')
  ) {
    // Set CORS headers
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set(
      'Access-Control-Allow-Methods',
      'GET,DELETE,PATCH,POST,PUT,OPTIONS'
    );
    response.headers.set(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Authorization, Date, X-Api-Version, Access-Control-Allow-Origin'
    );
  }

  return await updateSession(request, response);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

const staticRedirects = {
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

const dynamicRedirects = [
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
];

const handleRedirect = createRedirectHandler(
  staticRedirects,
  dynamicRedirects,
  {
    permanent: true,
    preserveQuery: true,
    preserveHash: true,
  }
);
