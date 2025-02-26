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
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';

const metaTitle = `Drone Shop - Top Drones & Accessories at ${appData.name.app} Kenya`;
const metaDesc = `Discover the best drones for every need at ${appData.name.app}. Shop top-rated drones for beginners, professionals, and enthusiasts. Elevate your aerial experience today!`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DRONE_SPACE}/shop`,
    type: 'website',
    images: [
      {
        url: images.brand.droneSpace.logo.potrait.meta,
        width: 1200,
        height: 1200,
        alt: appData.name.company,
      },
    ],
  },
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

      <AffixNavbar navbar={<NavbarMain />} />
      <AffixTop />
      <AffixWhatsapp />
      <AffixAssistant />
    </LayoutBody>
  );
}
