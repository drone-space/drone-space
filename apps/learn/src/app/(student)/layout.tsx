import React from 'react';
import { LayoutMain } from '@repo/ui';
import AppshellStudent from '@learn/ui/layout/appshell/student';
import { Metadata } from 'next';
import { APP_NAME, getApiUrl } from '@repo/constants';
import { isProduction } from '@repo/utils';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ScrollProvider } from '@repo/hooks';
import { createClientcloudbaseServer } from '@repo/cloudbase';
import { ProviderInitialize } from '@learn/ui/provider/initialize';
import { ProviderSync } from '@learn/ui/provider/sync';

export const metadata: Metadata = {
  title: {
    default: 'Student Portal',
    template: `%s - Student Portal - ${APP_NAME.LEARN}`,
  },
};

export default async function LayoutStudent({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClientcloudbaseServer();
  const { data: session } = await supabase.auth.getUser();

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

  return (
    <LayoutMain>
      <ProviderInitialize props={{ baseUrl: await getApiUrl(), sessionUser: session.user }}>
        <ProviderSync>
          <ScrollProvider>
            <AppshellStudent>{children}</AppshellStudent>
          </ScrollProvider>
        </ProviderSync>
      </ProviderInitialize>

      {isProduction() && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </LayoutMain>
  );
}
