'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Button,
  Card,
  Grid,
  GridCol,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { typeMenuNavbar } from '@/types/components/menu';
import classes from './navbar.module.scss';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import CardMenu from '../cards/menu';
import { IconFileDownload } from '@tabler/icons-react';
import ModalDownloadBrochure from '../modals/download/brochure';
import ModalDownloadProfile from '../modals/download/profile';

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
    subLinks.map(
      (item, index) =>
        subLinks.indexOf(item) < 6 && (
          <MenuItem
            key={index}
            component={Link}
            href={item.link}
            leftSection={
              item.leftSection &&
              !megaMenu && (
                <item.leftSection size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              )
            }
            rightSection={
              item.rightSection &&
              !megaMenu && (
                <item.rightSection
                  size={ICON_SIZE}
                  stroke={ICON_STROKE_WIDTH}
                />
              )
            }
            className={`${classes.item} ${pathname == item.link ? classes.itemActive : ''}`}
          >
            {!item.desc ? item.label : <CardMenu props={item} />}
          </MenuItem>
        )
    );

  return (
    <Menu
      shadow="xs"
      width={'auto'}
      trigger="click-hover"
      openDelay={50}
      closeDelay={50}
      keepMounted={true}
      offset={{
        mainAxis: 4,
      }}
      transitionProps={{ transition: 'fade-up', duration: 250 }}
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
        <MenuDropdown maw={720}>
          {!megaMenu ? (
            menuItems
          ) : (
            <Stack gap={0}>
              <Grid gutter={0}>
                {menuItems.map((menuItem, index) => (
                  <GridCol key={index} span={{ base: 12, xs: 6 }}>
                    {menuItem}
                  </GridCol>
                ))}
              </Grid>

              <Card
                bg={'var(--mantine-color-pri-9)'}
                c={'var(--mantine-color-body)'}
                radius={0}
              >
                <Grid>
                  <GridCol span={9}>
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

                  <GridCol span={3}>
                    <Stack gap={0} h={'100%'} justify="space-between">
                      <ModalDownloadBrochure>
                        <Button
                          justify="space-between"
                          rightSection={
                            <IconFileDownload
                              size={ICON_SIZE - 4}
                              stroke={ICON_STROKE_WIDTH}
                              color="var(--mantine-color-pri-9)"
                            />
                          }
                          fullWidth
                          color="sec.3"
                          c="pri.9"
                          size="compact-sm"
                        >
                          Brochure
                        </Button>
                      </ModalDownloadBrochure>

                      <ModalDownloadProfile>
                        <Button
                          justify="space-between"
                          rightSection={
                            <IconFileDownload
                              size={ICON_SIZE - 4}
                              stroke={ICON_STROKE_WIDTH}
                              color="var(--mantine-color-white)"
                            />
                          }
                          fullWidth
                          variant="outline"
                          color="white"
                          size="compact-sm"
                        >
                          Profile
                        </Button>
                      </ModalDownloadProfile>
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
