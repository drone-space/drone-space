import React from 'react';

import { Metadata } from 'next';

import LayoutBody from '@/components/layout/body';
import LayoutHeroMain from '@/components/layout/hero/main';
import HeaderMain from '@/components/layout/headers/main';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import AffixNavbar from '@/components/common/affixi/navbar';
import AffixTop from '@/components/common/affixi/top';
import AffixAssistant from '@/components/common/affixi/assistant';
import AffixWhatsapp from '@/components/common/affixi/whatsapp';
import appData from '@/data/app';

export const metadata: Metadata = {
  title: { default: `Drone Space`, template: `%s - ${appData.name.company}` },
};

export default function Legal({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody
      header={<HeaderMain />}
      nav={<NavbarMain />}
      hero={<LayoutHeroMain />}
      footer={<FooterMain />}
    >
      <main>
        {children}

        <AffixNavbar />
        <AffixTop />
        <AffixWhatsapp />
        <AffixAssistant />
      </main>
    </LayoutBody>
  );
}
