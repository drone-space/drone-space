import { NextRequest, NextResponse } from 'next/server';
import {
  createRedirectHandler,
  setCorsHeaders,
} from './utilities/helpers/middeware';

export async function middleware(request: NextRequest) {
  console.log('options', request.method === 'OPTIONS');

  // Handle preflight (OPTIONS) requests early
  if (request.method === 'OPTIONS') {
    return setCorsHeaders({
      crossOrigins,
      request,
      response: new NextResponse(null, { status: 204 }),
    });
  }

  // check for redirects
  const redirectResponse = handleRedirect(request);
  if (redirectResponse) return redirectResponse;

  // Proceed with normal request handling
  let response = NextResponse.next({ request });
  response = setCorsHeaders({ crossOrigins, request, response });

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

const crossOrigins = [
  'localhost',
  '127.0.0.1',
  'devokrann.vercel.app',
  'drone-space.vercel.app',
  'dronespace.co.ke',
  'conference-ai.vercel.app',
  'aiconference.co.ke',
];

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

  {
    pattern: /^\/resources\/blog\/categories\/([^\/]+)$/,
    replacement: '/resources/blog',
  },

  {
    pattern: /^\/resources\/blog\/tags\/([^\/]+)$/,
    replacement: '/resources/blog',
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
