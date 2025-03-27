'use client';

import {
  ActionIcon,
  Group,
  NavLink,
  Stack,
  Title,
  Tooltip,
} from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import classes from './content.module.scss';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { IconCirclePlus } from '@tabler/icons-react';
import ModalAcademyProject from '@/components/common/modals/academy/project';
import { useAppSelector } from '@/hooks/redux';

export default function Content() {
  const pathname = usePathname();
  const projects = useAppSelector((state) => state.projects.value);

  return (
    <Stack gap={'xl'}>
      <div>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            label={link.label}
            component={Link}
            href={link.link}
            color="pri"
            variant="light"
            active={pathname == link.link}
            style={{ borderRadius: 'var(--mantine-radius-sm)' }}
            className={classes.link}
          />
        ))}
      </div>

      <Stack gap={5}>
        <Group justify="space-between" px={'sm'}>
          <Title order={2} fz={'lg'} fw={500}>
            Projects
          </Title>

          <ModalAcademyProject>
            <Tooltip label="Create Project" withArrow>
              <Group>
                <ActionIcon size={ICON_WRAPPER_SIZE} variant="subtle">
                  <IconCirclePlus size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                </ActionIcon>
              </Group>
            </Tooltip>
          </ModalAcademyProject>
        </Group>

        <div>
          {!projects?.length
            ? projectPlaceholder
            : projects.map((project, index) => {
                const projectLink = `/academy/content/projects/${project.id}`;

                return (
                  <NavLink
                    key={index}
                    label={project.title}
                    component={Link}
                    href={projectLink}
                    color="pri"
                    variant="light"
                    active={pathname == projectLink}
                    style={{ borderRadius: 'var(--mantine-radius-sm)' }}
                    className={classes.link}
                  />
                );
              })}
        </div>
      </Stack>
    </Stack>
  );
}

const navLinks = [
  {
    link: '/academy/content/recent',
    label: 'Recent',
  },
  {
    link: '/academy/content/starred',
    label: 'Starred',
  },
  {
    link: '/academy/content/trash',
    label: 'Trash',
  },
];

const projectPlaceholder = <>loading</>;
