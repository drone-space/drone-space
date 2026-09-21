import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/ui/layout/page';
import { NotifySignOut as PartialNotifySignOut } from '@repo/ui/partial/page/notify';
import { BASE_URL_CLIENT } from '@repo/constants/paths';

export const metadata: Metadata = { title: 'Sign Out' };

export default function SignOut() {
  return (
    <LayoutPage>
      <PartialNotifySignOut props={{ baseUrl: BASE_URL_CLIENT.LMS }} />
    </LayoutPage>
  );
}
