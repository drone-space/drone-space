import React from 'react';
import LayoutMain from '@repo/ui/layout/main';
// import AffixNavbar from '@repo/ui/common/affixi/navbar';
import AffixAi from '@repo/ui/common/affixi/ai';
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
