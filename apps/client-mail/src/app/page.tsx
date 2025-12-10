/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import LayoutPage from '@repo/components/layout/page';
import LayoutBody from '@repo/components/layout/body';
import AffixNavbar from '@repo/components/common/affixi/navbar';
import LayoutSection from '@repo/components/layout/section';
import React from 'react';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';

export default function Home() {
  return (
    <HomeLayout>
      <LayoutSection id="home" padded containerized={'responsive'}>
        home
      </LayoutSection>
    </HomeLayout>
  );
}

async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutBody nav={<NavbarMain />} footer={<FooterMain />}>
      <LayoutPage>
        <main>{children}</main>

        <AffixNavbar>
          <NavbarMain />
        </AffixNavbar>
      </LayoutPage>
    </LayoutBody>
  );
}
