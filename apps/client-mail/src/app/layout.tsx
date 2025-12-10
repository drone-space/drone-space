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
import { Inter } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import ProviderMantine from '@repo/components/provider/mantine';
import ProviderRedirects from '@repo/components/provider/redirect';
import ProviderStore from '@/components/provider/store';
import { appName } from '@repo/constants/app';
import { mantine } from '@/assets/styles';
import { ColorScheme } from '@repo/types/enums';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: `${appName} Mail`,
  description: 'Internal mail client for Drone Space',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      data-mantine-color-scheme={ColorScheme.DARK}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <ColorSchemeScript defaultColorScheme={ColorScheme.DARK} />
      </head>

      <body className={`${inter.variable}`}>
        <ProviderMantine
          options={{ withNotifications: true }}
          appThemeProps={{ styleSheets: { ...mantine } }}
          colorScheme={ColorScheme.DARK}
        >
          <ProviderStore>{children}</ProviderStore>
        </ProviderMantine>

        <ProviderRedirects />
      </body>
    </html>
  );
}
