import React from 'react';
import LayoutBody from '@/components/layout/body';
import ProviderStore from '@/components/providers/store';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import { COOKIE_NAME } from '@/data/constants';
import { cookies } from 'next/headers';
import ModalFeatureDrone from '@/components/common/modals/feature-drone';
import AffixNavbar from '@/components/common/affixi/navbar';
import AlertShipment from '@/components/common/alerts/shipment';

export default async function LayoutShop({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const colorSchemeState = cookieStore.get(
    COOKIE_NAME.COLOR_SCHEME_STATE
  )?.value;

  return (
    <ProviderStore colorScheme={colorSchemeState || 'light'}>
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

        <AffixNavbar />
      </LayoutBody>
    </ProviderStore>
  );
}
