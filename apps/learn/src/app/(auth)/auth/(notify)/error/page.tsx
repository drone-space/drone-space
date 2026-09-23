import React from 'react';
import { Metadata } from 'next';
import { PartialPageNotifyError } from '@repo/ui';
import { getBaseUrl } from '@repo/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = { title: 'Authentication Error' };

export default async function Error() {
  return (
    <div>
      <PartialPageNotifyError props={{ baseUrl: (await getBaseUrl()).LEARN }} />
    </div>
  );
}
