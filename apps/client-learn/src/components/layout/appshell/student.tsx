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
import { useDisclosure } from '@mantine/hooks';
import { useStoreAppShell } from '@repo/libraries/zustand/stores/shell';
import { useStoreSyncStatus } from '@repo/libraries/zustand/stores/sync-status';
import ButtonAppshellNavbar from '@repo/components/common/buttons/appshell/navbar';
import MenuUser from '@repo/components/common/menus/user';
import NextLink from '@repo/components/common/anchor/next-link';
import { COMPANY_NAME } from '@repo/constants/app';
import ImageDefault from '@repo/components/common/images/default';
import { images } from '@repo/constants/images';
import IndicatorNetworkStatus from '@repo/components/common/indicators/network-status';
import AvatarMain from '@repo/components/common/avatars/main';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  IconChevronLeft,
  IconDashboard,
  IconFileText,
  IconHome,
  IconReportAnalytics,
} from '@tabler/icons-react';
import { useStoreSession } from '@repo/libraries/zustand/stores/session';
import LayoutSection from '@repo/components/layout/section';
import IndicatorTheme from '@repo/components/common/indicators/theme';

export default function Student({ children }: { children: React.ReactNode }) {
  const navbarActive = useStoreAppShell((s) => s.appshell?.child?.navbar);

  return (
    <AppShell
      // layout="alt"
      // withBorder={false}
      // header={{ height: APPSHELL.HEADER.HEIGHT }}
      footer={{ height: APPSHELL.FOOTER.HEIGHT }}
      navbar={{
        width: APPSHELL.NAVBAR.WIDTH,
        breakpoint: 'sm',
        collapsed: { mobile: true, desktop: !navbarActive },
      }}
    >
      {/* <AppShellHeader bg={'gray.0'}>
        <Header />
      </AppShellHeader> */}

      <AppShellNavbar
        bg={
          'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'
        }
      >
        <Navbar />
      </AppShellNavbar>

      <AppShellMain>
        <ScrollArea
          h={`calc(100vh - ${APPSHELL.FOOTER.HEIGHT}px)`}
          scrollbars={'y'}
        >
          <Box mih={`calc(100vh - ${APPSHELL.FOOTER.HEIGHT + 61.7 + 1}px)`}>
            <LayoutSection id={'content-app-student'} padded>
              {children}
            </LayoutSection>
          </Box>
        </ScrollArea>
      </AppShellMain>

      <AppShellFooter
        bg={
          'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))'
        }
      >
        <Footer />
      </AppShellFooter>
    </AppShell>
  );
}

export const APPSHELL = {
  HEADER: { HEIGHT: 60 },
  FOOTER: { HEIGHT: ICON_WRAPPER_SIZE + 16 },
  NAVBAR: { WIDTH: 260 },
};

// const brandImage = (
//   <NextLink href={'/admin'}>
//     <ImageDefault
//       src={images.brand.droneSpace.logo.landscape.default}
//       alt={COMPANY_NAME}
//       height={32}
//       width={160}
//       fit="contain"
//       radius={0}
//     />
//   </NextLink>
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

  return (
    <Box p={'sm'}>
      <Paper
        bg={
          'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7))'
        }
        p={5}
        withBorder
      >
        <Group>
          <MenuUser
            transitionProps={{ transition: 'pop-top-left' }}
            position={'bottom-start'}
          >
            <Group gap={'xs'}>
              <AvatarMain
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
          </MenuUser>
        </Group>
      </Paper>

      <Divider my={'xs'} />

      <Stack gap={2}>
        <NavLink
          component={Link}
          href={'/'}
          label={'Back Home'}
          leftSection={
            <IconChevronLeft size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
          styles={{
            root: {
              borderRadius: 'var(--mantine-radius-xl)',
            },
          }}
        />

        {navlinksStudent.map((nli) => {
          const active =
            nli.link == '/admin'
              ? pathname == nli.link
              : pathname.includes(nli.link);

          return (
            <NavLink
              key={nli.link}
              component={Link}
              href={nli.link}
              label={nli.label}
              active={active}
              leftSection={
                <nli.icon size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
              styles={{
                root: {
                  borderRadius: 'var(--mantine-radius-xl)',
                },
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
}

function Footer() {
  const syncStatus = useStoreSyncStatus((s) => s.syncStatus);

  return (
    <SimpleGrid cols={{ md: 2 }} px={'sm'} h={'100%'}>
      <Group gap={'xs'}>
        <ButtonAppshellNavbar />

        <IndicatorTheme />

        <IndicatorNetworkStatus props={{ syncStatus }} />
      </Group>

      {/* <Group justify={'center'}>
        <div>{brandImage}</div>
      </Group> */}

      <Group justify="end"></Group>
    </SimpleGrid>
  );
}
