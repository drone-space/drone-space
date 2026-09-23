import type { Metadata } from 'next';
import { Montserrat, Geist_Mono, Nova_Mono } from 'next/font/google';
import { APP_DESC, APP_NAME, DEFAULT_COLOR_SCHEME, getApiUrl } from '@repo/constants';
import { createClientcloudbaseServer } from '@repo/cloudbase';
import { getCookieServer, isProduction } from '@repo/utils';
import { COOKIE_NAME } from '@repo/constants';
import { ProviderMantine } from '@repo/ui';
import { ProviderInitialize } from '@learn/ui/provider/initialize';
import { ProviderSync } from '@learn/ui/provider/sync';
import { ColorSchemeScript, MantineColorScheme, mantineHtmlProps } from '@mantine/core';
import { getAppTheme } from '@repo/constants';
import { getAppResolver } from '@learn/resolver';
import { ColorScheme } from '@repo/types';

// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
// import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';

// custom styles
import '../styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

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
  title: APP_NAME.LEARN,
  description: APP_DESC.LEARN,
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

  const supabase = await createClientcloudbaseServer();
  const { data: session } = await supabase.auth.getUser();

  // 1. Get the CALCULATED theme from middleware (not the 'auto' state)
  const theme = (await getCookieServer(COOKIE_NAME.COLOR_SCHEME)) || DEFAULT_COLOR_SCHEME;
  const resolvedTheme = (theme || DEFAULT_COLOR_SCHEME) as MantineColorScheme;

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

        {/* General Web App Metadata */}
        <meta name="application-name" content={APP_NAME.LEARN} />
        <meta name="theme-color" content={'#CBB399'} />
        <meta
          name="background-color"
          content={resolvedTheme == ColorScheme.LIGHT ? '#ffffff' : '#000000'}
        />

        <ColorSchemeScript defaultColorScheme={resolvedTheme} />
      </head>

      <body className="min-h-full flex flex-col">
        <ProviderMantine
          options={{ withNotifications: true }}
          colorScheme={resolvedTheme}
          theme={getAppTheme}
          cssVariablesResolver={getAppResolver}
        >
          <ProviderInitialize props={{ baseUrl: await getApiUrl(), sessionUser: session.user }}>
            <ProviderSync>{children}</ProviderSync>
          </ProviderInitialize>
        </ProviderMantine>

        {isProduction() && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
