import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/components/layout/page';
import LayoutSection from '@repo/components/layout/section';

export const dynamic = 'force-static';

export const metadata: Metadata = { title: `Inbox` };

export default async function Inbox() {
  return (
    <LayoutPage>
      <LayoutSection id="training" containerized={false}>
        inbox
      </LayoutSection>
    </LayoutPage>
  );
}
