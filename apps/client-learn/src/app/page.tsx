/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import LayoutPage from '@repo/components/layout/page';
import LayoutMain from '@repo/components/layout/main';
import React from 'react';
import { COMPANY_NAME } from '@repo/constants/app';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${COMPANY_NAME} - The Leading Drone Training Academy in Kenya`,
};

export default function Home() {
  return (
    <HomeLayout>
      {/* <LayoutSection
        id="home-cta1"
        padded={SECTION_SPACING / 2}
        bg={'var(--mantine-color-pri-9)'}
      >
      </LayoutSection> */}
      home
    </HomeLayout>
  );
}

async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutMain>
      <LayoutPage>
        <main>{children}</main>
      </LayoutPage>
    </LayoutMain>
  );
}
