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
import appTheme from '@/styles/theme';
import appResolver from '@/styles/resolver';
import appData from '@/data/app';
import { linkify } from '@/utilities/formatters/string';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { createClient } from '@/libraries/supabase/server';
import { COOKIE_NAME } from '@/data/constants';
import ProviderStore from '@/components/providers/store';
import { cookies } from 'next/headers';
import { GoogleAnalytics } from '@next/third-parties/google';
import { isProduction } from '@/utilities/helpers/environment';
import { projectsGet } from '@/handlers/requests/database/project';
import { coursesGet } from '@/handlers/requests/database/course';
import { sectionsGet } from '@/handlers/requests/database/section';
import { modulesGet } from '@/handlers/requests/database/module';
import { pagesGet } from '@/handlers/requests/database/page';
import { assignmentsGet } from '@/handlers/requests/database/assignment';
import { quizzesGet } from '@/handlers/requests/database/quiz';
import { questionsGet } from '@/handlers/requests/database/question';
import { profilesGet } from '@/handlers/requests/database/profiles';
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import AffixOffline from '@/components/common/affixi/offline';
// import AffixiCookies from '@/components/common/affixi/cookies';

const openSans = Open_Sans({ subsets: ['latin'] });

export default async function LayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const colorScheme = cookies().get(COOKIE_NAME.COLOR_SCHEME)?.value;
  const colorSchemeState = cookies().get(COOKIE_NAME.COLOR_SCHEME_STATE)?.value;

  const supabase = await createClient();
  const { data: session } = await supabase.auth.getUser();

  // academy
  const { profiles } = await profilesGet();
  const { projects } = await projectsGet();
  const { courses } = await coursesGet();
  const { sections } = await sectionsGet();
  const { modules } = await modulesGet();
  const { pages } = await pagesGet();
  const { assignments } = await assignmentsGet();
  const { quizzes } = await quizzesGet();
  const { questions } = await questionsGet();

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
        <ProviderStore
          session={session.user}
          colorScheme={colorSchemeState || 'light'}
          academy={{
            profiles,
            projects,
            courses,
            sections,
            modules,
            pages,
            assignments,
            quizzes,
            questions,
          }}
        >
          <MantineProvider
            theme={appTheme}
            cssVariablesResolver={appResolver}
            defaultColorScheme={(colorScheme || 'light') as MantineColorScheme}
            classNamesPrefix={linkify(appData.name.app)}
          >
            <ModalsProvider>{children}</ModalsProvider>

            <Notifications limit={3} />
          </MantineProvider>
        </ProviderStore>

        {isProduction() && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
