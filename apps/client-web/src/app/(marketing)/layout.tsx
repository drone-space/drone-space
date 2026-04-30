/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React from 'react';
import LayoutMain from '@repo/components/layout/main';
// import AffixNavbar from '@repo/components/common/affixi/navbar';
import AffixAi from '@repo/components/common/affixi/ai';
import HeaderMain from '@/components/layout/headers/main';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';

export default async function LayoutMarketing({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutMain
      header={<HeaderMain />}
      nav={<NavbarMain options={{ border: true }} />}
      footer={<FooterMain />}
    >
      <main>{children}</main>

      {/* <AffixNavbar>
        <NavbarMain />
      </AffixNavbar> */}
      <AffixAi />
    </LayoutMain>
  );
}
