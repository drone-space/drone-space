'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Menu, MenuDropdown, MenuItem, MenuTarget } from '@mantine/core';
import { typeMenuNavbar } from '@/types/menu';
import classes from './navbar.module.scss';
import NextLink from '@repo/components/common/anchor/next-link';

export default function Navbar({
  children,
  subLinks,
}: {
  children: React.ReactNode;
  subLinks?: typeMenuNavbar[];
}) {
  const pathname = usePathname();

  const menuItems =
    subLinks &&
    subLinks.map(
      (item, index) =>
        subLinks.indexOf(item) < 6 && (
          <NextLink key={index} href={item.link}>
            <MenuItem
              key={index}
              className={`${classes.item} ${pathname == item.link ? classes.itemActive : ''}`}
              h={'100%'}
            >
              {item.label}
            </MenuItem>
          </NextLink>
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

      {menuItems && <MenuDropdown w={720}>{menuItems}</MenuDropdown>}
    </Menu>
  );
}
