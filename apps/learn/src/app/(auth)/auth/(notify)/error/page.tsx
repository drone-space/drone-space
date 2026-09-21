import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/ui/layout/page';
import { NotifyError as PartialNotifyError } from '@repo/ui/partial/page/notify';
import { BASE_URL_CLIENT } from '@repo/constants/paths';

export const metadata: Metadata = { title: 'Authentication Error' };

export default function Error() {
  return (
    <LayoutPage>
      <PartialNotifyError props={{ baseUrl: BASE_URL_CLIENT.LMS }} />
    </LayoutPage>
  );
}
