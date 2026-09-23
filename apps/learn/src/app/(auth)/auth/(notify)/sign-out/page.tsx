import React from 'react';
import { Metadata } from 'next';
import { PartialPageNotifySignOut } from '@repo/ui';
import { getBaseUrl } from '@repo/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = { title: 'Sign Out' };

export default async function SignOut() {
  return (
    <div>
      <PartialPageNotifySignOut props={{ baseUrl: (await getBaseUrl()).LEARN }} />
    </div>
  );
}
