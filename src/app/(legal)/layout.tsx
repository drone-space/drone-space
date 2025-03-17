import React from 'react';
import LayoutBody from '@/components/layout/body';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import AffixNavbar from '@/components/common/affixi/navbar';
import AffixAssistant from '@/components/common/affixi/assistant';

export default function Legal({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody nav={<NavbarMain />} footer={<FooterMain />}>
      <main>
        {children}

        <AffixNavbar />
        <AffixAssistant />
      </main>
    </LayoutBody>
  );
}
