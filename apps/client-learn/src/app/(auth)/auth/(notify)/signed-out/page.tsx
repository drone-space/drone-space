import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/ui/layout/page';
import { NotifySignedOut as PartialNotifySignedOut } from '@repo/ui/partial/page/notify';

export const metadata: Metadata = { title: 'Signed Out' };

export default function SignedOut() {
  return (
    <LayoutPage>
      <PartialNotifySignedOut />
    </LayoutPage>
  );
}
