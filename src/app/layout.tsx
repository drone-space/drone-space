import type { Metadata } from 'next';
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';
import { Montserrat, Geist_Mono } from 'next/font/google';

// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';

// custom styles
import '../styles/globals.scss';

import appTheme from '@/styles/theme';
import appResolver from '@/styles/resolver';
import { appName } from '@/data/app';
import { linkify } from '@/utilities/formatters/string';
import { Notifications } from '@mantine/notifications';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: appName,
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <ColorSchemeScript />
      </head>

      <body className={`${montserrat.variable} ${geistMono.variable}`}>
        <MantineProvider
          theme={appTheme}
          cssVariablesResolver={appResolver}
          classNamesPrefix={linkify(appName)}
        >
          <Notifications limit={3} position="bottom-right" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
