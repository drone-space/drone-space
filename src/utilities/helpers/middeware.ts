import { NextRequest, NextResponse } from 'next/server';

type DynamicRedirectMap = {
  pattern: RegExp;
  replacement: string;
}[];

type StaticRedirectMap = {
  [key: string]: string;
};

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

export const setCorsHeaders = (params: {
  crossOrigins: string[];
  request: NextRequest;
  response: NextResponse;
}): NextResponse => {
  const origin = params.request.headers.get('origin');

  console.log('origin', origin);

  if (!origin) return params.response;

  const isAllowedOrigin = params.crossOrigins.some((o) => origin.includes(o));

  if (!isAllowedOrigin) return params.response;

  // Clone response to modify Headers
  const newResponse = new NextResponse(params.response.body, params.response);

  newResponse.headers.set('Access-Control-Allow-Credentials', 'true');
  newResponse.headers.set('Access-Control-Allow-Origin', origin);
  newResponse.headers.set(
    'Access-Control-Allow-Methods',
    'GET,DELETE,PATCH,POST,PUT,OPTIONS'
  );
  newResponse.headers.set(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Authorization, Date, X-Api-Version, Access-Control-Allow-Origin'
  );

  // If it's a preflight request, return an empty 204 response with CORS headers
  if (params.request.method === 'OPTIONS') {
    newResponse.headers.set('Content-Length', '0');
    newResponse.headers.set('Content-Type', 'text/plain');
    return new NextResponse(null, {
      status: 204,
      headers: newResponse.headers,
    });
  }

  return newResponse;
};
