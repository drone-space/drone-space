import React from 'react';

import LayoutBody from '@/components/layout/body';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import AffixNavbar from '@/components/common/affixi/navbar';
import AffixAssistant from '@/components/common/affixi/assistant';
import CtaNewsletter from '@/components/partial/cta/newsletter';

export default function ShopLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody nav={<NavbarMain />} footer={<FooterMain />}>
      <main style={{ position: 'relative' }}>
        {children}
        <CtaNewsletter />
      </main>

      <AffixNavbar />
      <AffixAssistant />
    </LayoutBody>
  );
}
