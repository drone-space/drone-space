import LayoutPage from '@repo/ui/layout/page';
import LayoutMain from '@repo/ui/layout/main';
import React from 'react';
import { COMPANY_NAME } from '@repo/constants/app';
import { Metadata } from 'next';
import PartialPageHome from '@/components/partial/page/home';

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
