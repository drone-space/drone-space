import React from 'react';
import LayoutBody from '@repo/components/layout/body';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import ModalFeatureDrone from '@/components/common/modals/feature-drone';
import AffixNavbar from '@repo/components/common/affixi/navbar';
import AlertShipment from '@/components/common/alerts/shipment';
// import AffixAi from '@/components/common/affixi/ai';

export default async function LayoutShop({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody
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

      <AffixNavbar>
        <NavbarMain />
      </AffixNavbar>
      {/* <AffixAi /> */}
    </LayoutBody>
  );
}
