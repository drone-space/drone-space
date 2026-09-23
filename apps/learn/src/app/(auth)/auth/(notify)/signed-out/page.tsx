import React from 'react';
import { Metadata } from 'next';
import { PartialPageNotifySignedOut } from '@repo/ui';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = { title: 'Signed Out' };

export default function SignedOut() {
  return (
    <div>
      <PartialPageNotifySignedOut />
    </div>
  );
}
