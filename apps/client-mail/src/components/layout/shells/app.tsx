'use client';

import React from 'react';
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  AppShellSection,
  Center,
  Divider,
  Loader,
  ScrollArea,
} from '@mantine/core';
import { useStoreAppShell } from '@/libraries/zustand/stores/shell';
import HeaderShellApp from '../headers/shell/app';
import NavbarShellApp from '../navbars/shell/app';
import MainShellApp from '../main/shell/app';
import FooterShellApp from '../footers/shell/app';
import { ICON_STROKE_WIDTH, SECTION_SPACING } from '@repo/constants/sizes';

export const appShellDimensions = {
  header: { height: 60 },
  navbar: { width: 280 },
  footer: { height: 30 },
};

export default function App({ children }: { children: React.ReactNode }) {
  const { appshell } = useStoreAppShell();

  if (!appshell)
    return (
      <Center py={SECTION_SPACING} h={'100vh'}>
        <Loader />
      </Center>
    );

  return (
    <AppShell
      // padding="md"
      withBorder={false}
      header={{ height: appShellDimensions.header.height }}
      navbar={{
        width: appShellDimensions.navbar.width,
        breakpoint: 'sm',
        collapsed: {
          mobile: !appshell.child.navbar,
          desktop: !appshell.child.navbar,
        },
      }}
      footer={{ height: appShellDimensions.footer.height }}
    >
      <AppShellHeader bg={'var(--mantine-color-body)'}>
        <AppShellSection px="xs" h={'100%'}>
          <HeaderShellApp />
        </AppShellSection>
      </AppShellHeader>

      <AppShellNavbar
        bg={
          'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))'
        }
      >
        <AppShellSection
          grow
          component={ScrollArea}
          scrollbarSize={ICON_STROKE_WIDTH * 4}
          type="auto"
          scrollbars={'y'}
        >
          <NavbarShellApp />
        </AppShellSection>
      </AppShellNavbar>

      <AppShellMain>
        <AppShellSection
          component={ScrollArea}
          scrollbarSize={ICON_STROKE_WIDTH * 4}
          type="auto"
          scrollbars={'y'}
        >
          <MainShellApp>{children}</MainShellApp>
        </AppShellSection>
      </AppShellMain>

      <AppShellFooter
        bg={
          'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))'
        }
      >
        <Divider />

        <AppShellSection px="xs" h={'100%'}>
          <FooterShellApp />
        </AppShellSection>
      </AppShellFooter>
    </AppShell>
  );
}
