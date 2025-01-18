import { NextRequest, NextResponse } from 'next/server';

type RedirectMap = {
  [key: string]: string;
};

/**
 * Creates a redirect handler function
 * @param redirects Object mapping old routes to new routes
 * @param options Configuration options for the redirect
 */
export const createRedirectHandler = (
  redirects: RedirectMap,
  options: {
    permanent?: boolean;
    preserveQuery?: boolean;
    preserveHash?: boolean;
  } = {}
) => {
  const {
    permanent = true,
    preserveQuery = true,
    preserveHash = true,
  } = options;

  return function handleRedirect(request: NextRequest): NextResponse | null {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path in redirects) {
      const newUrl = new URL(redirects[path], url.origin);

      if (preserveQuery) {
        url.searchParams.forEach((value, key) => {
          newUrl.searchParams.append(key, value);
        });
      }

      if (preserveHash && url.hash) {
        newUrl.hash = url.hash;
      }

      return NextResponse.redirect(newUrl, {
        status: permanent ? 308 : 307,
      });
    }

    return null;
  };
};
