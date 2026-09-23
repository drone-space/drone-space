import React from 'react';
import { LayoutMain } from '@repo/ui';
import NavbarMain from '@web/ui/layout/navbars/main';
import FooterMain from '@web/ui/layout/footers/main';
import ModalFeatureDrone from '@web/ui/common/modals/feature-drone';
// import AffixNavbar from '@repo/ui';
import { AffixAi } from '@repo/ui';
import { AlertShipment } from '@repo/ui';
// import AffixAi from '@web/ui/common/affixi/ai';

export default async function LayoutShop({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutMain
      nav={
        <>
          <AlertShipment />
          <NavbarMain />
        </>
      }
      footer={<FooterMain />}
    >
      <main>{children}</main>

      {/* <ModalNewsletter /> */}
      <ModalFeatureDrone />

      {/* <AffixNavbar>
        <NavbarMain />
      </AffixNavbar> */}
      <AffixAi />
    </LayoutMain>
  );
}
