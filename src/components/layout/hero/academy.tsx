import React from 'react';
import LayoutSection from '../section';
import { images } from '@/assets/images';
import { Overlay, Stack, Title } from '@mantine/core';

export default function Academy({ props }: { props: { title: string } }) {
  return (
    <LayoutSection
      id={'hero-academy-courses'}
      style={{
        backgroundImage: `url('${images.gallery.graduation.yr2022.image9}')`,
        color: 'var(--mantine-color-white)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <Overlay backgroundOpacity={0.5} zIndex={0} />

      <Stack justify="center" mih={160} pos={'relative'}>
        <Title order={1} c={'inherit'}>
          {props.title}
        </Title>
      </Stack>
    </LayoutSection>
  );
}
