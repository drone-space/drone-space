import React from 'react';

import LayoutBody from '@/components/layout/body';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import AffixNavbar from '@/components/common/affixi/navbar';
import AffixAssistant from '@/components/common/affixi/assistant';
import CtaNewsletter from '@/components/partial/cta/newsletter';
import ProviderStore from '@/components/providers/store';
import { COOKIE_NAME } from '@/data/constants';
import { cookies } from 'next/headers';

export default function LayoutMarketing({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const colorSchemeState = cookies().get(COOKIE_NAME.COLOR_SCHEME_STATE)?.value;

  return (
    <ProviderStore colorScheme={colorSchemeState || 'light'}>
      <LayoutBody nav={<NavbarMain />} footer={<FooterMain />}>
        <main>
          {children}
          <CtaNewsletter />
        </main>

        <AffixNavbar />
        <AffixAssistant />
      </LayoutBody>
    </ProviderStore>
  );
}
