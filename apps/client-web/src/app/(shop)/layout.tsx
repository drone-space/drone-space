import React from 'react';
import LayoutMain from '@repo/components/layout/main';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import ModalFeatureDrone from '@/components/common/modals/feature-drone';
// import AffixNavbar from '@repo/components/common/affixi/navbar';
import AffixAi from '@repo/components/common/affixi/ai';
import AlertShipment from '@repo/components/common/alerts/shipment';
// import AffixAi from '@/components/common/affixi/ai';

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
