'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import {
  Button,
  Card,
  Divider,
  Grid,
  GridCol,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  NavLink,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { typeMenuNavbar } from '@/types/menu';
import classes from './navbar.module.scss';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import CardMenu from '../cards/menu';
import { IconFileDownload } from '@tabler/icons-react';
import ModalDownloadDocument from '@/components/common/modals/download/document';

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
          <NavLink href={item.link}>
            <MenuItem
              key={index}
              className={`${classes.item} ${pathname == item.link ? classes.itemActive : ''}`}
              h={'100%'}
            >
              {!item.desc ? item.label : <CardMenu props={item} />}
            </MenuItem>
          </NavLink>
        )
    );

  return (
    <Menu
      width={'auto'}
      trigger="click-hover"
      openDelay={50}
      closeDelay={50}
      offset={{
        mainAxis: 0,
      }}
      transitionProps={{ transition: 'fade-up', duration: 100 }}
      classNames={{
        dropdown: classes.dropdown,
        arrow: classes.arrow,
        divider: classes.divider,
        label: classes.label,
        item: classes.item,
        itemLabel: classes.itemLabel,
        itemSection: classes.itemSection,
      }}
      keepMounted
    >
      <MenuTarget>{children}</MenuTarget>

      {menuItems && (
        <MenuDropdown w={720}>
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

                      <ModalDownloadDocument props={{ type: 'profile' }}>
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
                      </ModalDownloadDocument>
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
