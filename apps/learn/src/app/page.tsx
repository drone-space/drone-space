import { LayoutPage } from '@repo/ui';
import { LayoutMain } from '@repo/ui';
import React from 'react';
import { COMPANY_NAME } from '@repo/constants';
import { Metadata } from 'next';
import PartialPageHome from '@learn/ui/partial/page/home';

export const metadata: Metadata = {
  title: `${COMPANY_NAME} - The Leading Drone Training Academy in Kenya`,
};

export default function Home() {
  return (
    <HomeLayout>
      <PartialPageHome />
    </HomeLayout>
  );
}

async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutMain>
      <LayoutPage>{children}</LayoutPage>
    </LayoutMain>
  );
}
