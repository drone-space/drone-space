import React from 'react';

import { Metadata } from 'next';

import LayoutBody from '@/components/layout/body';
import HeaderMain from '@/components/layout/headers/main';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import appData from '@/data/app';
import AffixTop from '@/components/common/affixi/top';
import AffixNavbar from '@/components/common/affixi/navbar';
import AffixAssistant from '@/components/common/affixi/assistant';
import AffixWhatsapp from '@/components/common/affixi/whatsapp';

export const metadata: Metadata = {
  title: { default: `Drone Space`, template: `%s - ${appData.name.company}` },
};

export default function Shows({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody
      header={<HeaderMain />}
      nav={<NavbarMain />}
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
