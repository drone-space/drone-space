'use server';

import { headers } from 'next/headers';
import { resolveHost, getUrlPrefix, SHARED_VERCEL_SUBSTRING } from './paths-client';

export async function getBaseUrl() {
  let hostHeader: string | null = null;

  try {
    const headersList = await headers();
    hostHeader = headersList.get('x-forwarded-host') || headersList.get('host');
  } catch {
    // Expected during static generation (e.g. force-static, generateStaticParams, ISR)
  }

  // Only log if you are in a runtime dynamic context where a host SHOULD exist but didn't
  if (!hostHeader && process.env.NODE_ENV === 'development' && false) {
    console.log('[INFO] -- Static context: Falling back to .env hosts');
  }

  const HOST_API = resolveHost(
    process.env.NEXT_PUBLIC_HOST_API_PROD,
    process.env.NEXT_PUBLIC_HOST_API_DEV,
    `${SHARED_VERCEL_SUBSTRING}-api`,
    hostHeader,
  );

  const HOST_WEB = resolveHost(
    process.env.NEXT_PUBLIC_HOST_WEB_PROD,
    process.env.NEXT_PUBLIC_HOST_WEB_DEV,
    `${SHARED_VERCEL_SUBSTRING}-web`,
    hostHeader,
  );

  const HOST_LEARN = resolveHost(
    process.env.NEXT_PUBLIC_HOST_LEARN_PROD,
    process.env.NEXT_PUBLIC_HOST_LEARN_DEV,
    `${SHARED_VERCEL_SUBSTRING}-learn`,
    hostHeader,
  );

  return {
    API: `${getUrlPrefix(HOST_API)}${HOST_API}`,
    WEB: `${getUrlPrefix(HOST_WEB)}${HOST_WEB}`,
    LEARN: `${getUrlPrefix(HOST_LEARN)}${HOST_LEARN}`,
  };
}

export const getApiUrl = async () => `${(await getBaseUrl()).API}/api`;
