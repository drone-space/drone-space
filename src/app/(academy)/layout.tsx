import React from 'react';
import LayoutBody from '@/components/layout/body';
import NavbarAcademy from '@/components/layout/navbars/academy';
// import LayoutHeroMain from '@/components/layout/hero/main';
// import HeaderMain from '@/components/layout/headers/main';
// import FooterMain from '@/components/layout/footers/main';
// import AffixNavbar from '@/components/common/affixi/navbar';
import AffixTop from '@/components/common/affixi/top';
import AffixAssistant from '@/components/common/affixi/assistant';
import AffixWhatsapp from '@/components/common/affixi/whatsapp';

export default function Academy({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody
      // header={<HeaderMain />}
      nav={<NavbarAcademy />}
      // hero={<LayoutHeroMain />}
      // footer={<FooterMain />}
    >
      <main>
        {children}

        {/* <AffixNavbar navbar={<NavbarMain />} /> */}
        <AffixTop />
        <AffixWhatsapp />
        <AffixAssistant />
      </main>
    </LayoutBody>
  );
}
