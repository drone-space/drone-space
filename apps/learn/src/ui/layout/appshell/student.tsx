'use client';

import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Box,
  Burger,
  Divider,
  Group,
  NavLink,
  Paper,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Transition,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useStoreAppShell, useStoreProfile } from '@repo/store';
import { useStoreSyncStatus } from '@repo/store';
import { ButtonAppshellNavbar } from '@repo/ui';
import { MenuUser } from '@repo/ui';
import { AnchorNextLink } from '@repo/ui';
import { COMPANY_NAME } from '@repo/constants';
import { ImageDefault } from '@repo/ui';
import { images } from '@repo/constants';
import { IndicatorNetworkStatus } from '@repo/ui';
import { AvatarUser } from '@repo/ui';
import { ICON_SIZE, ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE } from '@repo/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  IconChevronLeft,
  IconDashboard,
  IconFileText,
  IconHome,
  IconReportAnalytics,
  IconUserKey,
} from '@tabler/icons-react';
import { useStoreSession } from '@repo/store';
import { LayoutSection } from '@repo/ui';
import { IndicatorTheme } from '@repo/ui';
import { Role } from '@repo/types';
import { useScrollArea } from '@repo/hooks';

export default function Student({ children }: { children: React.ReactNode }) {
  // const desktop = useMediaQuery('(min-width: 62em)');
  const navbarActive = useStoreAppShell((s) => s.appshell?.child?.navbar);
  const { viewportRef } = useScrollArea();

  return (
    <AppShell
      // layout="alt"
      // withBorder={false}
      header={{ height: APPSHELL.HEADER.HEIGHT }}
      // footer={!desktop ? undefined : { height: APPSHELL.FOOTER.HEIGHT }}
      navbar={{
        width: APPSHELL.NAVBAR.WIDTH,
        breakpoint: 'md',
        collapsed: { mobile: !navbarActive, desktop: !navbarActive },
      }}
    >
      <AppShellHeader
      // hiddenFrom="md"
      >
        <Footer />
      </AppShellHeader>

      <AppShellNavbar>
        <Navbar />
      </AppShellNavbar>

      <AppShellMain
      // bg={'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'}
      >
        <ScrollArea
          h={`calc(100vh - ${APPSHELL.FOOTER.HEIGHT}px)`}
          scrollbars={'y'}
          viewportRef={viewportRef}
        >
          <Box mih={`calc(100vh - ${APPSHELL.FOOTER.HEIGHT + 61.7 + 1}px)`}>
            <LayoutSection id={'content-app-student'} padded>
              {children}
            </LayoutSection>
          </Box>
        </ScrollArea>
      </AppShellMain>

      {/* <AppShellFooter visibleFrom="md">
        <Footer />
      </AppShellFooter> */}
    </AppShell>
  );
}

export const APPSHELL = {
  HEADER: { HEIGHT: ICON_WRAPPER_SIZE + 16 },
  FOOTER: { HEIGHT: ICON_WRAPPER_SIZE + 16 },
  NAVBAR: { WIDTH: 260 },
};

// const brandImage = (
//   <AnchorNextLink href={'/admin'}>
//     <ImageDefault
//       src={images.brand.droneSpace.logo.landscape.default}
//       alt={COMPANY_NAME}
//       height={32}
//       width={160}
//       fit="contain"
//       radius={0}
//     />
//   </AnchorNextLink>
// );

const navlinksStudent = [
  {
    link: '/dashboard',
    label: 'Dashboard',
    icon: IconDashboard,
  },
  {
    link: '/quizzes',
    label: 'Quizzes',
    icon: IconFileText,
  },
  {
    link: '/attempts',
    label: 'Attempts',
    icon: IconReportAnalytics,
  },
];

function Navbar() {
  const pathname = usePathname();
  const session = useStoreSession((s) => s.session);
  const desktop = useMediaQuery('(min-width: 62em)');
  const navbarActive = useStoreAppShell((s) => s.appshell?.child.navbar);
  const toggleNavbarChild = useStoreAppShell((s) => s.toggleNavbarChild);
  const profiles = useStoreProfile((s) => s.profiles);
  const profile = profiles?.find((pi) => pi.id == session?.id);

  return (
    <Box p={'sm'} mih={`calc(100vh - ${APPSHELL.HEADER.HEIGHT + 1}px)`}>
      <Box visibleFrom="md">
        <MenuUser transitionProps={{ transition: 'pop-top-left' }} position={'bottom-start'}>
          <Paper
            bg={'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7))'}
            p={5}
            withBorder
          >
            <Group>
              <Group gap={'xs'}>
                <AvatarUser
                  size={
                    ICON_WRAPPER_SIZE
                    //  + 4
                  }
                />

                <Stack gap={0}>
                  <Title order={2} fz={'sm'} fw={500} lineClamp={1}>
                    {session?.user_metadata.name}
                  </Title>

                  {/* <Text fz={'xs'} c={'dimmed'} lineClamp={1}>
                  {session?.user_metadata.email}
                </Text> */}
                </Stack>
              </Group>
            </Group>
          </Paper>
        </MenuUser>

        <Divider my={'xs'} />
      </Box>

      <Stack gap={2}>
        <NavLink
          component={Link}
          href={'/'}
          label={'Back Home'}
          color="gray"
          leftSection={<IconChevronLeft size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
          styles={{
            root: {
              borderRadius: 'var(--mantine-radius-xl)',
            },
          }}
          onClick={() => {
            if (!desktop) {
              if (navbarActive) toggleNavbarChild();
            }
          }}
        />

        {navlinksStudent.map((nli) => {
          const active = nli.link == '/admin' ? pathname == nli.link : pathname.includes(nli.link);

          return (
            <NavLink
              key={nli.link}
              component={Link}
              href={nli.link}
              label={nli.label}
              color="gray"
              active={active}
              leftSection={<nli.icon size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
              styles={{
                root: {
                  borderRadius: 'var(--mantine-radius-xl)',
                },
              }}
              onClick={() => {
                if (!desktop) {
                  if (navbarActive) toggleNavbarChild();
                }
              }}
            />
          );
        })}

        {profile && profile.role != Role.STUDENT && (
          <>
            <Divider my={'xs'} />

            <NavLink
              component={Link}
              href={'/admin'}
              label={'Admin'}
              color="gray"
              leftSection={<IconUserKey size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
              styles={{
                root: {
                  borderRadius: 'var(--mantine-radius-xl)',
                },
              }}
              onClick={() => {
                if (!desktop) {
                  if (navbarActive) toggleNavbarChild();
                }
              }}
            />
          </>
        )}
      </Stack>
    </Box>
  );
}

function Footer() {
  const syncStatus = useStoreSyncStatus((s) => s.syncStatus);

  return (
    <Group gap={'xs'} px={'sm'} h={'100%'} justify="space-between">
      <ButtonAppshellNavbar />

      <Group gap={'xs'} justify="space-between">
        <IndicatorNetworkStatus props={{ syncStatus }} />
        <IndicatorTheme />

        <Box hiddenFrom="md" style={{ overflow: 'hidden' }}>
          <MenuUser transitionProps={{ transition: 'pop-top-right' }} position={'bottom-end'}>
            <AvatarUser size={ICON_WRAPPER_SIZE} />
          </MenuUser>
        </Box>
      </Group>
    </Group>
  );
}
