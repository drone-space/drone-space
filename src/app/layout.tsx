import { Open_Sans } from 'next/font/google';

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles/global.css';
import '@mantine/core/styles.css';

import '@mantine/carousel/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/tiptap/styles.css';

import '@/styles/globals.scss';

import {
  ColorSchemeScript,
  MantineColorScheme,
  MantineProvider,
} from '@mantine/core';
import { COOKIE_NAME } from '@/data/constants';
import { cookies } from 'next/headers';
import { isProduction } from '@/utilities/helpers/environment';
import { GoogleAnalytics } from '@next/third-parties/google';
import appTheme from '@/styles/theme';
import appResolver from '@/styles/resolver';
import appData from '@/data/app';
import { linkify } from '@/utilities/formatters/string';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import AffixiCookies from '@/components/common/affixi/cookies';

const openSans = Open_Sans({ subsets: ['latin'] });

export default async function LayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const colorScheme = cookies().get(COOKIE_NAME.COLOR_SCHEME)?.value;
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

  return (
    <html
      lang="en"
      data-mantine-color-scheme={(colorScheme || 'light') as MantineColorScheme}
    >
      <head>
        <ColorSchemeScript
          defaultColorScheme={(colorScheme || 'light') as MantineColorScheme}
        />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>

      <body className={openSans.className}>
        <MantineProvider
          theme={appTheme}
          cssVariablesResolver={appResolver}
          defaultColorScheme={(colorScheme || 'light') as MantineColorScheme}
          classNamesPrefix={linkify(appData.name.app)}
        >
          <ModalsProvider>{children}</ModalsProvider>

          <Notifications limit={3} />
        </MantineProvider>

        {isProduction() && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
