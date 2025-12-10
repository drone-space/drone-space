import React, { useState } from 'react';
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  ScrollArea,
  Skeleton,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import LayoutSection from '@repo/components/layout/section';
import { appShellDimensions } from '../../shells/app';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import { useStoreAppShell } from '@/libraries/zustand/stores/shell';
import {
  IconAdjustments,
  IconCornerUpLeft,
  IconCornerUpRight,
  IconDotsVertical,
  IconFlame,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpandFilled,
  IconTrash,
} from '@tabler/icons-react';
import InputSearch from '@/components/common/inputs/search';
import CardEmail from '@/components/common/cards/email';
import CardSender from '@/components/common/cards/sender';
import MenuEmailSender from '@/components/common/menus/email/sender';
import MenuEmailActions from '@/components/common/menus/email/actions';
import MenuEmailFilter from '@/components/common/menus/email/filter';
import { generateUUID } from '@repo/utilities/generators';
import { Status, SyncStatus } from '@repo/types/models/enums';

export default function App({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState(false);
  const { appshell, setAppShell } = useStoreAppShell();

  const appShellProps = {
    icon: appshell?.child.navbar
      ? IconLayoutSidebarLeftCollapse
      : IconLayoutSidebarLeftExpandFilled,
    label: appshell?.child.navbar ? 'Collapse' : 'Expand',
  };

  return (
    <LayoutSection id={'main-shell-app'} containerized={false}>
      <Grid h={'100%'} gutter={0}>
        <GridCol
          span={{ base: 12, md: appshell?.child.navbar ? 4.5 : 3.5 }}
          style={{
            borderRight: `${ICON_STROKE_WIDTH}px solid var(--mantine-color-default-border)`,
            borderLeft: `${ICON_STROKE_WIDTH}px solid var(--mantine-color-default-border)`,
          }}
        >
          <ScrollArea
            h={`calc(100vh - ${appShellDimensions.header.height}px - ${appShellDimensions.footer.height}px)`}
            scrollbars={'y'}
          >
            <Box
              bg={
                'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))'
              }
              style={{ position: 'sticky', top: 0, zIndex: 10 }}
            >
              <Group p={'xs'} pr={'md'} justify="space-between">
                <Group gap={'xs'}>
                  {appshell === undefined || !appshell ? (
                    <>
                      <Skeleton h={28} w={28} radius={'sm'} />
                    </>
                  ) : (
                    <Tooltip label={`${appShellProps.label} folder pane`}>
                      <Group>
                        <ActionIcon
                          variant="default"
                          size={ICON_WRAPPER_SIZE}
                          onClick={() =>
                            setAppShell({
                              ...appshell,
                              child: {
                                ...appshell.child,
                                navbar: !appshell.child.navbar,
                              },
                            })
                          }
                        >
                          <appShellProps.icon
                            size={ICON_SIZE}
                            stroke={ICON_STROKE_WIDTH}
                          />
                        </ActionIcon>
                      </Group>
                    </Tooltip>
                  )}

                  <Title order={2} c={'var(--mantine-color-text)'} fz={'md'}>
                    Inbox
                  </Title>

                  <Text fz={'sm'}>
                    <NumberFormatter thousandSeparator value={871} /> Messages
                  </Text>
                </Group>

                <Group gap={'xs'}>
                  <Tooltip label={'Toogle Quick Filter Bar'}>
                    <Button
                      size="xs"
                      onClick={() => setSearch(!search)}
                      variant="default"
                      leftSection={
                        <IconAdjustments
                          size={ICON_SIZE}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      }
                    >
                      Quick Filter
                    </Button>
                  </Tooltip>
                </Group>
              </Group>

              {search && (
                <>
                  <Divider />

                  <Group p={'xs'} pr={'md'} wrap="nowrap" gap={'xs'}>
                    <InputSearch size="xs" placeholder="Filter messages..." />

                    <MenuEmailFilter>
                      <Tooltip label={'Quick Filter Menu'}>
                        <Group>
                          <ActionIcon
                            size={ICON_WRAPPER_SIZE}
                            variant="default"
                          >
                            <IconAdjustments
                              size={ICON_SIZE}
                              stroke={ICON_STROKE_WIDTH}
                            />
                          </ActionIcon>
                        </Group>
                      </Tooltip>
                    </MenuEmailFilter>
                  </Group>
                </>
              )}

              <Divider />
            </Box>

            <Stack
              p={'xs'}
              pr={'md'}
              gap={'xs'}
              // mih={'150vh'}
            >
              {sampleEmails
                .concat(sampleEmails.concat(sampleEmails).concat(sampleEmails))
                .map((se, i) => (
                  <CardEmail key={i} props={se} />
                ))}
            </Stack>
          </ScrollArea>
        </GridCol>

        <GridCol span={{ base: 12, md: appshell?.child.navbar ? 7.5 : 8.5 }}>
          <ScrollArea
            h={`calc(100vh - ${appShellDimensions.header.height}px - ${appShellDimensions.footer.height}px)`}
            scrollbars={'y'}
          >
            <Box
              bg={
                'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))'
              }
              style={{ position: 'sticky', top: 0, zIndex: 10 }}
            >
              <Stack p={'xs'} pr={'md'} gap={'xs'}>
                <Group justify="space-between">
                  <MenuEmailSender>
                    <CardSender />
                  </MenuEmailSender>

                  <Group gap={5}>
                    <Tooltip label={'Reply to the sender of this message'}>
                      <Button
                        size="compact-sm"
                        fz={'xs'}
                        variant="default"
                        leftSection={
                          <IconCornerUpLeft
                            size={ICON_SIZE - 4}
                            stroke={ICON_STROKE_WIDTH}
                          />
                        }
                      >
                        Reply
                      </Button>
                    </Tooltip>

                    <Tooltip label={'Forward this message'}>
                      <Button
                        size="compact-sm"
                        fz={'xs'}
                        variant="default"
                        leftSection={
                          <IconCornerUpRight
                            size={ICON_SIZE - 4}
                            stroke={ICON_STROKE_WIDTH}
                          />
                        }
                      >
                        Forward
                      </Button>
                    </Tooltip>

                    <Tooltip label={'Mark this message as junk'}>
                      <Button
                        size="compact-sm"
                        fz={'xs'}
                        variant="default"
                        leftSection={
                          <IconFlame
                            size={ICON_SIZE - 4}
                            stroke={ICON_STROKE_WIDTH}
                          />
                        }
                      >
                        Junk
                      </Button>
                    </Tooltip>

                    <Tooltip label={'Delete this message'}>
                      <Button
                        size="compact-sm"
                        fz={'xs'}
                        variant="default"
                        leftSection={
                          <IconTrash
                            size={ICON_SIZE - 4}
                            stroke={ICON_STROKE_WIDTH}
                          />
                        }
                      >
                        Delete
                      </Button>
                    </Tooltip>

                    <MenuEmailActions>
                      <Button
                        size="compact-sm"
                        fz={'xs'}
                        variant="default"
                        leftSection={
                          <IconDotsVertical
                            size={ICON_SIZE - 4}
                            stroke={ICON_STROKE_WIDTH}
                          />
                        }
                      >
                        More
                      </Button>
                    </MenuEmailActions>
                  </Group>
                </Group>

                <Group justify="space-between" fz={'sm'}>
                  <Group gap={'xs'}>
                    <Text inherit>To:</Text>

                    <MenuEmailSender>
                      <Card
                        padding={0}
                        bg={
                          'light-dark(var(--mantine-color-gray-light), var(--mantine-color-dark-6))'
                        }
                        px={'xs'}
                        py={2.5}
                      >
                        <Text inherit>kevon@dronespace.co.ke</Text>
                      </Card>
                    </MenuEmailSender>
                  </Group>

                  <Text inherit ta={'end'}>
                    09/12/2025, 13:36
                  </Text>
                </Group>

                <Group justify="space-between">
                  <Title order={2} c={'var(--mantine-color-text)'} fz={'md'}>
                    Small Changes, Stronger Security: Login Security
                    Recommendations
                  </Title>
                </Group>
              </Stack>

              <Divider />
            </Box>

            <Box mih={'150vh'} p={'xs'}>
              {children}
              scroll box
            </Box>
          </ScrollArea>
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}

const sampleEmails = [
  {
    id: generateUUID(),
    body: '',
    category_id: '',
    created_at: new Date(),
    from_email: 'noreply@notifications.hubspot.com',
    from_name: 'Hubspot',
    to_name: 'Kevon',
    to_email: 'kevon@dronespace.co.ke',
    profile_id: '',
    status: Status.ACTIVE,
    subject: 'Small Changes, Stronger Security: Login Security Recommendations',
    sync_status: SyncStatus.SYNCED,
    updated_at: new Date(),
  },
  {
    id: generateUUID(),
    body: '',
    category_id: '',
    created_at: new Date(),
    from_email: 'bingwb@microsoft.com',
    from_name: 'Bing Webmaster Tools',
    to_name: 'Kevon',
    to_email: 'kevon@dronespace.co.ke',
    profile_id: '',
    status: Status.ACTIVE,
    subject:
      'Comprehensive Performance Insights from Bing Webmaster Tools for site: http://dronespace.co.ke/ - 2025 November',
    sync_status: SyncStatus.SYNCED,
    updated_at: new Date(),
  },
  {
    id: generateUUID(),
    body: '',
    category_id: '',
    created_at: new Date(),
    from_email: 'noreply@notifications.hubspot.com',
    from_name: 'Hubspot',
    to_name: 'Kevon',
    to_email: 'kevon@dronespace.co.ke',
    profile_id: '',
    status: Status.ACTIVE,
    subject: 'Small Changes, Stronger Security: Login Security Recommendations',
    sync_status: SyncStatus.SYNCED,
    updated_at: new Date(),
  },
  {
    id: generateUUID(),
    body: '',
    category_id: '',
    created_at: new Date(),
    from_email: 'bingwb@microsoft.com',
    from_name: 'Bing Webmaster Tools',
    to_name: 'Kevon',
    to_email: 'kevon@dronespace.co.ke',
    profile_id: '',
    status: Status.ACTIVE,
    subject:
      'Comprehensive Performance Insights from Bing Webmaster Tools for site: http://dronespace.co.ke/ - 2025 November',
    sync_status: SyncStatus.SYNCED,
    updated_at: new Date(),
  },
  {
    id: generateUUID(),
    body: '',
    category_id: '',
    created_at: new Date(),
    from_email: 'noreply@notifications.hubspot.com',
    from_name: 'Hubspot',
    to_name: 'Kevon',
    to_email: 'kevon@dronespace.co.ke',
    profile_id: '',
    status: Status.ACTIVE,
    subject: 'Small Changes, Stronger Security: Login Security Recommendations',
    sync_status: SyncStatus.SYNCED,
    updated_at: new Date(),
  },
  {
    id: generateUUID(),
    body: '',
    category_id: '',
    created_at: new Date(),
    from_email: 'bingwb@microsoft.com',
    from_name: 'Bing Webmaster Tools',
    to_name: 'Kevon',
    to_email: 'kevon@dronespace.co.ke',
    profile_id: '',
    status: Status.ACTIVE,
    subject:
      'Comprehensive Performance Insights from Bing Webmaster Tools for site: http://dronespace.co.ke/ - 2025 November',
    sync_status: SyncStatus.SYNCED,
    updated_at: new Date(),
  },
  {
    id: generateUUID(),
    body: '',
    category_id: '',
    created_at: new Date(),
    from_email: 'noreply@notifications.hubspot.com',
    from_name: 'Hubspot',
    to_name: 'Kevon',
    to_email: 'kevon@dronespace.co.ke',
    profile_id: '',
    status: Status.ACTIVE,
    subject: 'Small Changes, Stronger Security: Login Security Recommendations',
    sync_status: SyncStatus.SYNCED,
    updated_at: new Date(),
  },
  {
    id: generateUUID(),
    body: '',
    category_id: '',
    created_at: new Date(),
    from_email: 'bingwb@microsoft.com',
    from_name: 'Bing Webmaster Tools',
    to_name: 'Kevon',
    to_email: 'kevon@dronespace.co.ke',
    profile_id: '',
    status: Status.ACTIVE,
    subject:
      'Comprehensive Performance Insights from Bing Webmaster Tools for site: http://dronespace.co.ke/ - 2025 November',
    sync_status: SyncStatus.SYNCED,
    updated_at: new Date(),
  },
  {
    id: generateUUID(),
    body: '',
    category_id: '',
    created_at: new Date(),
    from_email: 'noreply@notifications.hubspot.com',
    from_name: 'Hubspot',
    to_name: 'Kevon',
    to_email: 'kevon@dronespace.co.ke',
    profile_id: '',
    status: Status.ACTIVE,
    subject: 'Small Changes, Stronger Security: Login Security Recommendations',
    sync_status: SyncStatus.SYNCED,
    updated_at: new Date(),
  },
  {
    id: generateUUID(),
    body: '',
    category_id: '',
    created_at: new Date(),
    from_email: 'bingwb@microsoft.com',
    from_name: 'Bing Webmaster Tools',
    to_name: 'Kevon',
    to_email: 'kevon@dronespace.co.ke',
    profile_id: '',
    status: Status.ACTIVE,
    subject:
      'Comprehensive Performance Insights from Bing Webmaster Tools for site: http://dronespace.co.ke/ - 2025 November',
    sync_status: SyncStatus.SYNCED,
    updated_at: new Date(),
  },
  {
    id: generateUUID(),
    body: '',
    category_id: '',
    created_at: new Date(),
    from_email: 'noreply@notifications.hubspot.com',
    from_name: 'Hubspot',
    to_name: 'Kevon',
    to_email: 'kevon@dronespace.co.ke',
    profile_id: '',
    status: Status.ACTIVE,
    subject: 'Small Changes, Stronger Security: Login Security Recommendations',
    sync_status: SyncStatus.SYNCED,
    updated_at: new Date(),
  },
  {
    id: generateUUID(),
    body: '',
    category_id: '',
    created_at: new Date(),
    from_email: 'bingwb@microsoft.com',
    from_name: 'Bing Webmaster Tools',
    to_name: 'Kevon',
    to_email: 'kevon@dronespace.co.ke',
    profile_id: '',
    status: Status.ACTIVE,
    subject:
      'Comprehensive Performance Insights from Bing Webmaster Tools for site: http://dronespace.co.ke/ - 2025 November',
    sync_status: SyncStatus.SYNCED,
    updated_at: new Date(),
  },
];
