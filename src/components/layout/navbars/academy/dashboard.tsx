'use client';

import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { ActionIcon, Stack, Tooltip } from '@mantine/core';
import {
  IconBooks,
  IconCalendarWeek,
  IconClipboardData,
  IconHome,
  IconUsers,
} from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Dashboard() {
  const pathname = usePathname();

  return (
    <Stack align="center">
      {navLinks.map((link, index) => (
        <Tooltip
          label={link.label}
          key={index}
          position="right"
          withArrow
          transitionProps={{
            transition: 'fade-left',
            duration: 250,
            exitDuration: 100,
          }}
        >
          <ActionIcon
            key={index}
            size={ICON_WRAPPER_SIZE * 1.5}
            variant={pathname === link.link ? 'light' : 'subtle'}
            color="gray"
            c={'var(--mantine-color-text)'}
            component={Link}
            href={link.link}
          >
            <link.icon size={ICON_SIZE * 1.5} stroke={ICON_STROKE_WIDTH} />
          </ActionIcon>
        </Tooltip>
      ))}
    </Stack>
  );
}

const navLinks = [
  {
    link: '/academy/dashboard',
    label: 'Dashboard',
    icon: IconHome,
  },
  {
    link: '/academy/content',
    label: 'Content',
    icon: IconBooks,
  },
  {
    link: '/academy/schedule',
    label: 'Schedule',
    icon: IconCalendarWeek,
  },
  {
    link: '/academy/users',
    label: 'Users',
    icon: IconUsers,
  },
  {
    link: '/academy/reports',
    label: 'Reports',
    icon: IconClipboardData,
  },
];
