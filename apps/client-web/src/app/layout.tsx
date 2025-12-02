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
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import ProviderMantine from '@repo/components/provider/mantine';
import ProviderRedirects from '@repo/components/provider/redirect';
import ProviderStore from '@/components/provider/store';
import { appName } from '@repo/constants/app';
import { mantine } from '@/assets/styles';
import { DEFAULT_COLOR_SCHEME } from '@repo/constants/other';
import { GoogleAnalytics } from '@next/third-parties/google';
import { isProduction } from '@repo/utilities/misc';

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
  title: appName,
  description: '',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      data-mantine-color-scheme={DEFAULT_COLOR_SCHEME}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <ColorSchemeScript defaultColorScheme={DEFAULT_COLOR_SCHEME} />
      </head>

      <body className={`${montserrat.variable} ${novaMono.variable}`}>
        <ProviderMantine
          options={{ withNotifications: true }}
          appThemeProps={{ styleSheets: { ...mantine } }}
          colorScheme={DEFAULT_COLOR_SCHEME}
        >
          <ProviderStore>{children}</ProviderStore>
        </ProviderMantine>

        <ProviderRedirects />
        {isProduction() && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
