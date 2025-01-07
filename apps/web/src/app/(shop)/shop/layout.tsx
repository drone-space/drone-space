import React from 'react';
// import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
// import appData from '@/data/app';

// export const metadata: Metadata = {
// 	title: { default: `Shop`, template: `%s - Shop - ${contact.name.company}` },
// };

export default function Shop({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody>
      <main>{children}</main>
    </LayoutBody>
  );
}
