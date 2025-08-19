'use client';

import React from 'react';
import Link from 'next/link';
import {
  Burger,
  Button,
  // Button,
  Drawer,
  Group,
  NavLink,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { SignIn as WrapperSignIn } from '../../../wrapper/auth';
import classes from './main.module.scss';
import { typeMenuNavbar } from '@/types/components/menu';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
// import { useAppSelector } from '@/hooks/redux';
import { usePathname } from 'next/navigation';
import ModalContactCallback from '../../modals/contact/callback';

export default function Main({
  props,
  options,
  ...restProps
}: {
  props: typeMenuNavbar[];
  options?: { absolute?: boolean };
} & React.ComponentProps<typeof Burger>) {
  const [opened, { toggle, close }] = useDisclosure(false);
  // const session = useAppSelector((state) => state.session.value);
  const pathname = usePathname();

  const matchesPath = (link: string) => {
    return pathname == link || (pathname != '/' && pathname.includes(link));
  };

  const navMobile = props.map((link, index) => {
    const subLinks =
      link.subLinks &&
      link.subLinks.map((subLink) => (
        <NavLink
          key={`${index}-${subLink.link}`}
          component={Link}
          href={subLink.link}
          label={subLink.label}
          active={matchesPath(subLink.link)}
          onClick={close}
          className={`${classes.link} ${pathname == subLink.link ? classes.linkActive : ''}`}
        />
      ));

    return !subLinks ? (
      <NavLink
        key={index}
        component={Link}
        href={link.link}
        label={link.label}
        active={matchesPath(link.link)}
        onClick={close}
        fw={pathname == link.link ? 500 : undefined}
        leftSection={
          link.leftSection ? (
            <link.leftSection size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          ) : undefined
        }
        rightSection={
          link.rightSection ? (
            <link.rightSection size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          ) : undefined
        }
        className={`${classes.link} ${
          matchesPath(link.link) ? classes.linkActive : ''
        }`}
      />
    ) : (
      <NavLink
        key={`${index}-${link.link}`}
        component={Link}
        href={link.link}
        label={link.label}
        active={matchesPath(link.link)}
        fw={pathname == link.link ? 500 : undefined}
        defaultOpened={matchesPath(link.link)}
        leftSection={
          link.leftSection ? (
            <link.leftSection size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          ) : undefined
        }
        rightSection={
          link.rightSection ? (
            <link.rightSection size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          ) : undefined
        }
        className={`${classes.link} ${
          matchesPath(link.link) ? classes.linkActive : ''
        }`}
      >
        {subLinks}
      </NavLink>
    );
  });

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size={280}
        classNames={{
          body: classes.body,
          header: classes.header,
        }}
        keepMounted={true}
      >
        <Stack pb={'sm'}>
          <Stack gap={0}>{navMobile}</Stack>

          <Group px={'sm'} grow>
            <ModalContactCallback>
              <Button size="xs" variant="gradient" fullWidth>
                Request Callback
              </Button>
            </ModalContactCallback>
          </Group>
        </Stack>
      </Drawer>

      <Burger
        opened={opened}
        onClick={toggle}
        size={'sm'}
        aria-label="Toggle Main Navbar"
        color={options?.absolute ? 'white' : undefined}
        {...restProps}
      />
    </>
  );
}
