import React from 'react';
import { LayoutMain } from '@repo/ui';
// import AffixNavbar from '@repo/ui';
import { AffixAi } from '@repo/ui';
import HeaderMain from '@web/ui/layout/headers/main';
import NavbarMain from '@web/ui/layout/navbars/main';
import FooterMain from '@web/ui/layout/footers/main';

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
