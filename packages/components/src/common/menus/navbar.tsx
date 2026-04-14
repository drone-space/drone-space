'use client';

import React, { useState } from 'react';
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
import LayoutSection from '../../layout/section';
import { COMPANY_NAME } from '@repo/constants/app';

export default function Navbar({
  children,
  link,
  subLinks,
  cta,
}: {
  children: React.ReactNode;
  link?: typeMenuNavbar;
  subLinks?: typeMenuNavbar[];
  cta?: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

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
          p={!item.desc ? 5 : 'inherit'}
          px={!item.desc ? 'xs' : undefined}
          // style={{ borderRadius: !item.desc ? undefined : 0 }}
        >
          {!item.desc ? (
            <>{item.labelShort || item.label}</>
          ) : (
            <CardMenu props={item} />
          )}
        </MenuItem>
      </NextLink>
    ));

  return (
    <Menu
      onChange={setOpened}
      width="100vw"
      trigger="click-hover"
      offset={0}
      openDelay={100}
      position="bottom"
      withinPortal={true}
      keepMounted
      transitionProps={{ transition: 'fade' }}
      portalProps={{
        style: {
          left: 0,
          right: 0,
          position: 'absolute',
          width: '100%',
        },
      }}
      zIndex={10}
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
      <MenuTarget>
        <div
          style={{
            color:
              opened || subLinks?.some((sl) => sl.link == pathname)
                ? 'var(--mantine-color-sec-3)'
                : undefined,
          }}
        >
          {children}
        </div>
      </MenuTarget>

      {menuItems && (
        <MenuDropdown>
          <LayoutSection id={'navbar-dropdown'}>
            {!megaMenu ? (
              menuItems
            ) : (
              <Stack gap={'md'}>
                {/* <Group px={'sm'}>
                  <Title order={2} fz={'lg'}>
                    {COMPANY_NAME} {link?.label}
                  </Title>
                </Group> */}

                <Grid gutter={'xs'}>
                  {menuItems.map((menuItem, index) => (
                    <GridCol key={index} span={{ base: 12, md: 4, lg: 3 }}>
                      {menuItem}
                    </GridCol>
                  ))}

                  {cta && (
                    <GridCol span={12}>
                      <Stack gap={'lg'}>
                        <Divider />

                        {cta}
                      </Stack>
                    </GridCol>
                  )}
                </Grid>
              </Stack>
            )}
          </LayoutSection>
        </MenuDropdown>
      )}
    </Menu>
  );
}
