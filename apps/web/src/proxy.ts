import { NextRequest, NextResponse } from 'next/server';
import { updateSession } from '@repo/cloudbase';
import { conditionalRedirect, getColorScheme, setCorsHeaders } from '@repo/utils';
import { getBaseUrl, staticRedirects } from '@repo/constants';

export async function proxy(request: NextRequest) {
  // Handle preflight
  if (request.method === 'OPTIONS') {
    const response = NextResponse.json({}, { status: 200 });
    setCorsHeaders({ request, response });
    return response;
  }

  // Handle static redirects (like /index -> /)
  const pathname = request.nextUrl.pathname;
  const target = staticRedirects[pathname as keyof typeof staticRedirects];
  const redirectResponse = conditionalRedirect(!!target, target!, request, { permanent: true });
  if (redirectResponse) {
    setCorsHeaders({ request, response: redirectResponse });
    return redirectResponse;
  }

  let response = NextResponse.next({ request });

  // Set CORS headers for the response
  setCorsHeaders({ request, response });

  // // Update the session in the response
  // response = await updateSession(request, response, (await getBaseUrl()).WEB);

  response = getColorScheme(request, response);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf)$).*)',
  ],
};
