'use client';

import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Box,
  Burger,
  Divider,
  Group,
  NavLink,
  ScrollArea,
  ScrollAreaAutosize,
  Stack,
  Transition,
} from '@mantine/core';
import { useStoreAppShell } from '@repo/store';
import { ButtonAppshellNavbar } from '@repo/ui';
import { ImageDefault } from '@repo/ui';
import { images } from '@repo/constants';
import { COMPANY_NAME } from '@repo/constants';
import { AnchorNextLink } from '@repo/ui';
import {
  IconDashboard,
  IconFileAnalytics,
  IconIdBadge,
  IconQuestionMark,
  IconReportAnalytics,
} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { ICON_SIZE, ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE } from '@repo/constants';
import Link from 'next/link';
import FooterMain from '@learn/ui/layout/footer/admin';
import { useStoreSyncStatus } from '@repo/store';
import { IndicatorNetworkStatus } from '@repo/ui';
import { AvatarUser } from '@repo/ui';
import { MenuUser } from '@repo/ui';

export default function Admin({ children }: { children: React.ReactNode }) {
  const navbarActive = useStoreAppShell((s) => s.appshell?.child?.navbar);

  return (
    <AppShell
      layout="alt"
      // withBorder={false}
      header={{ height: APPSHELL.HEADER.HEIGHT }}
      navbar={{
        width: APPSHELL.NAVBAR.WIDTH,
        breakpoint: 'sm',
        collapsed: { mobile: true, desktop: !navbarActive },
      }}
    >
      <AppShellHeader>
        <Header />
      </AppShellHeader>

      <AppShellNavbar>
        <Navbar />
      </AppShellNavbar>

      <AppShellMain bg={'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'}>
        <ScrollArea h={`calc(100vh - ${APPSHELL.HEADER.HEIGHT}px)`} scrollbars={'y'}>
          <Box
            mih={`calc(100vh - ${APPSHELL.HEADER.HEIGHT + 61.7 + 1}px)`}
            p={{ base: 'sm', md: 'xl' }}
          >
            {children}
          </Box>
          <FooterMain />
        </ScrollArea>
      </AppShellMain>
    </AppShell>
  );
}

const APPSHELL = {
  HEADER: { HEIGHT: 60 },
  NAVBAR: { WIDTH: 300 },
};

const brandImage = (
  <AnchorNextLink href={'/admin'}>
    <ImageDefault
      src={images.brand.droneSpace.logo.landscape.left.default}
      alt={COMPANY_NAME}
      height={32}
      width={160}
      fit="contain"
      radius={0}
    />
  </AnchorNextLink>
);

function Header() {
  const navbarActive = useStoreAppShell((s) => s.appshell?.child?.navbar);
  const syncStatus = useStoreSyncStatus((s) => s.syncStatus);

  return (
    <Group px={'sm'} h={'100%'} justify="space-between">
      <Group>
        <Transition mounted={!navbarActive}>
          {(styles) => (
            <div style={styles}>
              <Group>
                <ButtonAppshellNavbar />

                <div>{brandImage}</div>
              </Group>
            </div>
          )}
        </Transition>
      </Group>

      <Group justify="end">
        <IndicatorNetworkStatus props={{ syncStatus }} />
        <MenuUser>
          <AvatarUser size={ICON_WRAPPER_SIZE + 4} />
        </MenuUser>
      </Group>
    </Group>
  );
}

const navlinksAdmin = [
  {
    link: '/admin',
    label: 'Dashboard',
    icon: IconDashboard,
  },
  {
    link: '/admin/quizzes',
    label: 'Quizzes',
    icon: IconFileAnalytics,
  },
  {
    link: '/admin/questions',
    label: 'Questions',
    icon: IconQuestionMark,
  },
  {
    link: '/admin/attempts',
    label: 'Attempts',
    icon: IconReportAnalytics,
  },
  {
    link: '/admin/srpls',
    label: "ID's/Passport Numbers",
    icon: IconIdBadge,
  },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <div>
      <Group h={APPSHELL.HEADER.HEIGHT - 1} p={'sm'}>
        <ButtonAppshellNavbar />

        <div>{brandImage}</div>
      </Group>

      <Divider />

      <Stack gap={2} p={'sm'}>
        {navlinksAdmin.map((nli) => {
          const active = nli.link == '/admin' ? pathname == nli.link : pathname.includes(nli.link);

          return (
            <NavLink
              key={nli.link}
              component={Link}
              href={nli.link}
              label={nli.label}
              active={active}
              color="gray"
              leftSection={<nli.icon size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
              styles={{
                root: {
                  borderRadius: 'var(--mantine-radius-xl)',
                },
              }}
            />
          );
        })}
      </Stack>
    </div>
  );
}
