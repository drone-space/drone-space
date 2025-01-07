import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import LayoutHeroMain from '@/components/layout/hero/main';
import NavbarShop from '@/components/layout/navbars/shop';
import appData from '@/data/app';

export const metadata: Metadata = {
  title: {
    default: `Drones`,
    template: `%s - Drones - Drone Shop - ${appData.name.company}`,
  },
};

export default function DronesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody nav={<NavbarShop />} hero={<LayoutHeroMain />}>
      <main>{children}</main>
    </LayoutBody>
  );
}
