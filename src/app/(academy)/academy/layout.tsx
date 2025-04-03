import React from 'react';
import LayoutBody from '@/components/layout/body';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import AffixNavbar from '@/components/common/affixi/navbar';
import AffixAssistant from '@/components/common/affixi/assistant';
import ProviderStore from '@/components/providers/store';
import { COOKIE_NAME } from '@/data/constants';
import { cookies } from 'next/headers';
import { createClient } from '@/libraries/supabase/server';

export default async function LayoutAcademy({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const colorSchemeState = cookies().get(COOKIE_NAME.COLOR_SCHEME_STATE)?.value;

  const supabase = await createClient();
  const { data: session } = await supabase.auth.getUser();

  return (
    <ProviderStore
      colorScheme={colorSchemeState || 'light'}
      session={session.user}
    >
      <LayoutBody nav={<NavbarMain />} footer={<FooterMain />}>
        <main>{children}</main>

        <AffixNavbar />
        <AffixAssistant />
      </LayoutBody>
    </ProviderStore>
  );
}
