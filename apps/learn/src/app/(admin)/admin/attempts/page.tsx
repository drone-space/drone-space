import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/ui/layout/page';

const metaTitle = `Attempts`;

export const metadata: Metadata = {
  title: metaTitle,
};

export default async function Attempts() {
  return (
    <LayoutPage>
      <div>attempts page</div>
    </LayoutPage>
  );
}
