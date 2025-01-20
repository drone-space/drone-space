import { NextRequest, NextResponse } from 'next/server';

type DynamicRedirectMap = {
  pattern: RegExp;
  replacement: string;
}[];

type StaticRedirectMap = {
  [key: string]: string;
};

/**
 * Creates a redirect handler function that supports both static and dynamic routes
 * @param staticRedirects Object mapping old static routes to new routes
 * @param dynamicRedirects Array of pattern/replacement pairs for dynamic routes
 * @param options Configuration options for the redirect
 */

export const createRedirectHandler = (
  staticRedirects: StaticRedirectMap = {},
  dynamicRedirects: DynamicRedirectMap = [],
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

    // First check static redirects
    if (path in staticRedirects) {
      const newUrl = new URL(staticRedirects[path], url.origin);

      if (preserveQuery) {
        url.searchParams.forEach((value, key) => {
          newUrl.searchParams.append(key, value);
        });
      }

      if (preserveHash && url.hash) {
        newUrl.hash = url.hash;
      }

      return NextResponse.redirect(newUrl, {
        status: permanent ? 301 : 307,
      });
    }

    // Then check dynamic redirects
    for (const { pattern, replacement } of dynamicRedirects) {
      if (pattern.test(path)) {
        const newPath = path.replace(pattern, replacement);
        const newUrl = new URL(newPath, url.origin);

        if (preserveQuery) {
          url.searchParams.forEach((value, key) => {
            newUrl.searchParams.append(key, value);
          });
        }

        if (preserveHash && url.hash) {
          newUrl.hash = url.hash;
        }

        return NextResponse.redirect(newUrl, {
          status: permanent ? 301 : 307,
        });
      }
    }

    return null;
  };
};
