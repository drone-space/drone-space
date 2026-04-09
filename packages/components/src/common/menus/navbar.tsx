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

export default function Navbar({
  children,
  subLinks,
  cta,
}: {
  children: React.ReactNode;
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
          style={{ borderRadius: !item.desc ? undefined : 0 }}
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
      position="bottom"
      withinPortal={true}
      transitionProps={{ transition: 'fade', duration: 200 }}
      portalProps={{
        style: {
          left: 0,
          right: 0,
          position: 'absolute',
          width: '100%',
        },
      }}
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
          style={{ color: opened ? 'var(--mantine-color-sec-4)' : undefined }}
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
              <Stack gap={0}>
                <Grid gutter={'lg'}>
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
