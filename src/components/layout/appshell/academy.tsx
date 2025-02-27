'use client';

import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Box,
  Burger,
  Group,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import NavbarAcademyDashboard from '../navbars/academy/dashboard';
import HeaderAcademyDashboard from '../headers/academy/dashboard';
import { APPSHELL } from '@/data/constants';

export default function Academy({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: APPSHELL.HEADER_HEIGHT }}
      navbar={{
        width: APPSHELL.NAVBAR_WIDTH,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShellHeader>
        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div> */}

        <Group h={'100%'}>
          <HeaderAcademyDashboard />
        </Group>
      </AppShellHeader>

      <AppShellNavbar py={'xs'}>
        <NavbarAcademyDashboard />
      </AppShellNavbar>

      <AppShellMain bg={'var(--mantine-color-gray-0)'}>{children}</AppShellMain>
    </AppShell>
  );
}
