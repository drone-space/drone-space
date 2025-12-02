'use client';

import { isProduction } from '@repo/utilities/misc';
/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React, { useEffect } from 'react';

export default function Redirects() {
  useEffect(() => {
    const url = window.location.href;
    const secure = url.includes('https');
    const www = url.includes('www');

    const needsCleaning = (isProduction() && !secure) || www;

    if (needsCleaning) {
      const cleanedUrl = cleanUrl(url);
      window.location.replace(cleanedUrl);
    }
  }, []);

  return <span id="redirects"></span>;
}

function cleanUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);

    // Force https
    parsedUrl.protocol = 'https:';

    // Remove 'www.' if present
    parsedUrl.hostname = parsedUrl.hostname.replace(/^www\./i, '');

    return parsedUrl.toString();
  } catch {
    console.error('Invalid URL:', url);
    return url; // fallback: return original if invalid
  }
}
