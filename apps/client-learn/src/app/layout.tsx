/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';

// custom styles
import '../styles/globals.scss';

import type { Metadata } from 'next';
import { Montserrat, Nova_Mono } from 'next/font/google';
import {
  ColorSchemeScript,
  MantineColorScheme,
  mantineHtmlProps,
} from '@mantine/core';
import ProviderMantine from '@repo/components/provider/mantine';
import { mantine } from '@/assets/styles';
import { DEFAULT_COLOR_SCHEME } from '@repo/constants/other';
import { APP_DESC, COMPANY_NAME } from '@repo/constants/app';
import { GoogleAnalytics } from '@next/third-parties/google';
import { isProduction } from '@repo/utilities/misc';
import ProviderStore from '@/components/provider/store';
import ProviderSync from '@/components/provider/sync';
import { createClient } from '@repo/libraries/supabase/server';
import { getCookieServer } from '@repo/utilities/cookie-server';
import { COOKIE_NAME } from '@repo/constants/names';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const novaMono = Nova_Mono({
  variable: '--font-nova-mono',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: COMPANY_NAME,
  description: APP_DESC.LMS,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

  const supabase = await createClient();
  const { data: session } = await supabase.auth.getUser();

  // 1. Get the CALCULATED theme from middleware (not the 'auto' state)
  const theme =
    (await getCookieServer(COOKIE_NAME.COLOR_SCHEME)) || DEFAULT_COLOR_SCHEME;
  const resolvedTheme = (theme || DEFAULT_COLOR_SCHEME) as MantineColorScheme;

  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      data-mantine-color-scheme={resolvedTheme}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <ColorSchemeScript defaultColorScheme={resolvedTheme} />
      </head>

      <body className={`${montserrat.variable} ${novaMono.variable}`}>
        <ProviderMantine
          options={{ withNotifications: true }}
          appThemeProps={{ styleSheets: { ...mantine } }}
          colorScheme={resolvedTheme}
        >
          <ProviderStore props={{ sessionUser: session.user }}>
            <ProviderSync>{children}</ProviderSync>
          </ProviderStore>
        </ProviderMantine>

        {isProduction() && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
