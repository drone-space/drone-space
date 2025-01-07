import React from 'react';

import Link from 'next/link';

import { Anchor, Breadcrumbs } from '@mantine/core';

import { IconChevronRight } from '@tabler/icons-react';

import classes from './main.module.scss';

import { Link as typeLink } from '@/types/link';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Main({ props }: { props: typeLink[] }) {
  const active = (breadcrumb: typeLink) =>
    props.indexOf(breadcrumb) == props.length - 1;

  return (
    <Breadcrumbs
      separator={
        <IconChevronRight
          size={ICON_SIZE - 4}
          stroke={ICON_STROKE_WIDTH}
          color="light-dark(var(--mantine-color-sec-3),var(--mantine-color-sec-3))"
        />
      }
    >
      {props.map((item) => (
        <Anchor
          underline="never"
          key={item.link}
          component={Link}
          href={item.link}
          c={active(item) ? 'sec.3' : undefined}
          className={classes.link}
          onClick={(e) => e.preventDefault()} // remove top directive if you don't need this
        >
          {item.label}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
}
