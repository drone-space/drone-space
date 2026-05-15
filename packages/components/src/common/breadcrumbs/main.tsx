import React from 'react';
import { Breadcrumbs } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { Link as typeLink } from '@repo/types/link';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import NextLink from '@repo/components/common/anchor/next-link';

export default function Main({ props }: { props: typeLink[] }) {
  const active = (breadcrumb: typeLink) =>
    props.indexOf(breadcrumb) == props.length - 1;

  return (
    <Breadcrumbs
      separator={
        <IconChevronRight
          size={ICON_SIZE - 4}
          stroke={ICON_STROKE_WIDTH}
          color="light-dark(var(--mantine-color-gray-6),var(--mantine-color-gray-6))"
          style={{ marginTop: 'var(--mantine-spacing-sm)' }}
        />
      }
    >
      {props.map((item, index) => (
        <NextLink
          key={index}
          underline="hover"
          href={item.link}
          c={
            active(item)
              ? 'light-dark(var(--mantine-color-pri-9), var(--mantine-color-sec-3))'
              : 'var(--mantine-color-text)'
          }
          onClick={(e) => e.preventDefault()} // remove top directive if you don't need this
          mt={'xs'}
        >
          {item.label}
        </NextLink>
      ))}
    </Breadcrumbs>
  );
}
