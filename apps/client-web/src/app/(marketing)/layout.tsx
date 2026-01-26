/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React from 'react';
import LayoutBody from '@repo/components/layout/body';
import AffixNavbar from '@repo/components/common/affixi/navbar';
import HeaderMain from '@/components/layout/headers/main';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';

export default async function LayoutMarketing({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody
      header={<HeaderMain />}
      nav={<NavbarMain />}
      footer={<FooterMain />}
    >
      <main>{children}</main>

      <AffixNavbar>
        <NavbarMain />
      </AffixNavbar>
    </LayoutBody>
  );
}
