import type { Metadata } from 'next';
import { Montserrat, Nova_Mono } from 'next/font/google';
import { APP_DESC, APP_NAME, getApiUrl } from '@repo/constants';
import { ProviderMantine } from '@repo/ui';
import { ProviderInitialize } from '@web/ui/provider/initialize';
import { ColorSchemeScript, MantineColorScheme, mantineHtmlProps } from '@mantine/core';
import { getAppTheme } from '@repo/constants';
import { getAppResolver } from '@web/resolver';
import { ColorScheme } from '@repo/types';
import { GoogleAnalytics } from '@next/third-parties/google';
import { isProduction } from '@repo/utils';

import './globals.css';

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import { createClientcloudbaseServer } from '@repo/cloudbase';
// import '@mantine/dates/styles.css';
// // ‼️ import schedule styles after core and dates package styles
// import '@mantine/schedule/styles.css';

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
  title: APP_NAME.WEB,
  description: APP_DESC.WEB,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const resolvedTheme = ColorScheme.LIGHT as MantineColorScheme;

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      data-mantine-color-scheme={resolvedTheme}
      className={`${montserrat.variable} ${novaMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          viewport-fit="cover"
        />

        <ColorSchemeScript defaultColorScheme={resolvedTheme} />
      </head>

      <body className={`${montserrat.variable} ${novaMono.variable} min-h-full flex flex-col`}>
        <ProviderMantine
          options={{ withNotifications: true }}
          colorScheme={resolvedTheme}
          theme={getAppTheme}
          cssVariablesResolver={getAppResolver}
        >
          <ProviderInitialize props={{ baseUrl: await getApiUrl(), sessionUser: null }}>
            {children}
          </ProviderInitialize>
        </ProviderMantine>

        {isProduction() && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
