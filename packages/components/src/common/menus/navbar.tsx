'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { typeMenuNavbar } from '@repo/types/link';
import classes from './navbar.module.scss';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import CardMenu from '../cards/menu';
import { IconFileDownload } from '@tabler/icons-react';
import ModalDownloadDocument from '../modals/download/document';
import NextLink from '@repo/components/common/anchor/next-link';

export default function Navbar({
  children,
  subLinks,
}: {
  children: React.ReactNode;
  subLinks?: typeMenuNavbar[];
}) {
  const pathname = usePathname();

  const megaMenu = subLinks && subLinks[0].desc;

  const menuItems =
    subLinks &&
    subLinks.map((item, index) => (
      <NextLink href={item.link} key={item.link}>
        <MenuItem
          key={index}
          className={`${classes.item} ${pathname == item.link ? classes.itemActive : ''}`}
          h={'100%'}
          leftSection={
            !item.leftSection ? undefined : item.leftSection ==
              ('empty' as any) ? (
              <Box h={ICON_SIZE} w={ICON_SIZE}></Box>
            ) : (
              <ThemeIcon size={ICON_SIZE} variant="light">
                <item.leftSection size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              </ThemeIcon>
            )
          }
        >
          {!item.desc ? (
            <>
              <Group gap={'xs'}>
                {item.leftSection && (
                  <Divider
                    orientation="vertical"
                    h={16}
                    my={'auto'}
                    opacity={item.leftSection != ('empty' as any) ? 1 : 0}
                  />
                )}

                {item.labelShort || item.label}
              </Group>
            </>
          ) : (
            <CardMenu props={item} />
          )}
        </MenuItem>
      </NextLink>
    ));

  return (
    <Menu
      width={'auto'}
      trigger="hover"
      position="bottom-start"
      // openDelay={50}
      offset={{ mainAxis: 0, crossAxis: -(ICON_SIZE + 20) }}
      transitionProps={{ transition: 'fade', duration: 200 }}
      shadow="xs"
      classNames={{
        dropdown: classes.dropdown,
        arrow: classes.arrow,
        divider: classes.divider,
        label: classes.label,
        item: classes.item,
        itemLabel: classes.itemLabel,
        itemSection: classes.itemSection,
      }}
    >
      <MenuTarget>{children}</MenuTarget>

      {menuItems && (
        <MenuDropdown>
          {!megaMenu ? (
            menuItems
          ) : (
            <Stack gap={0} w={720}>
              <Grid gutter={0}>
                {menuItems.map((menuItem, index) => (
                  <GridCol key={index} span={{ base: 12, xs: 6 }}>
                    {menuItem}
                  </GridCol>
                ))}
              </Grid>

              <Divider color={'sec.3'} size={ICON_STROKE_WIDTH} />

              <Card
                bg={'var(--mantine-color-pri-8)'}
                c={'var(--mantine-color-body)'}
                radius={0}
              >
                <Grid>
                  <GridCol span={8}>
                    <Stack gap={'xs'}>
                      <Title order={3} fz={'sm'} lh={1} c={'white'}>
                        Downloads
                      </Title>
                      <Text fz={'xs'}>
                        Get a quick overview of our services, solutions, and
                        offerings in our brochure. Discover in-depth details
                        about our mission, expertise, and accomplishments in our
                        company profile.
                      </Text>
                    </Stack>
                  </GridCol>

                  <GridCol span={4}>
                    <Stack align="end" justify={'end'} h={'100%'} gap={'xs'}>
                      <ModalDownloadDocument props={{ type: 'brochure' }}>
                        <Button
                          justify="space-between"
                          rightSection={
                            <IconFileDownload
                              size={ICON_SIZE}
                              stroke={ICON_STROKE_WIDTH}
                              color="var(--mantine-color-pri-8)"
                            />
                          }
                          color="sec.3"
                          c="pri.8"
                          size="sm"
                        >
                          Brochure
                        </Button>
                      </ModalDownloadDocument>

                      {/* <ModalDownloadDocument props={{ type: 'profile' }}>
                        <Button
                          justify="space-between"
                          rightSection={
                            <IconFileDownload
                              size={ICON_SIZE}
                              stroke={ICON_STROKE_WIDTH}
                              color="var(--mantine-color-white)"
                            />
                          }
                          variant="outline"
                          color="white"
                          size="sm"
                        >
                          Profile
                        </Button>
                      </ModalDownloadDocument> */}
                    </Stack>
                  </GridCol>
                </Grid>
              </Card>
            </Stack>
          )}
        </MenuDropdown>
      )}
    </Menu>
  );
}
