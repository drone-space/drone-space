import React from 'react';

import { Metadata } from 'next';

import LayoutBody from '@/components/layout/body';
import HeaderMain from '@/components/layout/headers/main';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import AffixNavbar from '@/components/common/affixi/navbar';
import AffixTop from '@/components/common/affixi/top';
import AffixAssistant from '@/components/common/affixi/assistant';
import AffixWhatsapp from '@/components/common/affixi/whatsapp';
import CtaNewsletter from '@/components/partial/cta/newsletter';
import appData from '@/data/app';

export const metadata: Metadata = {
  title: `Drone Shop - Top Drones & Accessories at ${appData.name.app} Kenya`,
};

export default function ShopLayout({
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
      <main style={{ position: 'relative' }}>
        {children}
        <CtaNewsletter />
      </main>

      <AffixNavbar />
      <AffixTop />
      <AffixWhatsapp />
      <AffixAssistant />
    </LayoutBody>
  );
}
