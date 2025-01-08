import { NextRequest, NextResponse } from 'next/server';
import { updateSession } from './libraries/supabase/middleware';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request });

  // Get the origin from the request headers
  const origin = request.headers.get('origin') || '';

  if (origin && origin.includes('vercel.app')) {
    // Set CORS headers
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', '*');
    // Optionally, specify allowed methods and headers
    response.headers.set(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE'
    );
    response.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
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
