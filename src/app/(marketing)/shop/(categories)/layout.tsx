import React from 'react';

import LayoutBody from '@/components/layout/body';
// import AffixAssistant from '@/components/common/affixi/assistant';

export default function ShopLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody>
      {children}

      {/* <AffixAssistant /> */}
    </LayoutBody>
  );
}
