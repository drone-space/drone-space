import React from 'react';
import { LayoutMain } from '@repo/ui';
import AppshellStudent from '@learn/ui/layout/appshell/student';
import { Metadata } from 'next';
import { APP_NAME } from '@repo/constants';
import { isProduction } from '@repo/utils';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ScrollProvider } from '@repo/hooks';

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
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

  return (
    <LayoutMain>
      <ScrollProvider>
        <AppshellStudent>{children}</AppshellStudent>
      </ScrollProvider>

      {isProduction() && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </LayoutMain>
  );
}
