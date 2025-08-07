'use client';

import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@/data/constants';
import { ActionIcon, Button, Group, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import LayoutSection from '@/components/layout/section';
import classes from './conference.module.scss';
import { images } from '@/assets/images';
import { IconExternalLink, IconX } from '@tabler/icons-react';
import ImageDefault from '@/components/common/images/default';

export default function Conference({ close }: { close?: () => void }) {
  return (
    <LayoutSection
      id={'partial-cta-conference'}
      c={'var(--mantine-color-body)'}
      className={classes.section}
      style={{
        backgroundImage: `url('${images.posters.conference.poster1.landscape}')`,
      }}
    >
      <Group className={classes.overlay} align={'start'} justify="end" p={'lg'}>
        <ActionIcon
          color="var(--mantine-color-white)"
          variant={'subtle'}
          onClick={close}
        >
          <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
        </ActionIcon>
      </Group>

      <Stack
        py={SECTION_SPACING / 2}
        pos={'relative'}
        align={'center'}
        justify="center"
      >
        <ImageDefault
          src={images.brand.conference.logo.landscape.light}
          alt={'AI Conference'}
          loading="lazy"
          fit="contain"
          height={64}
          width={'100%'}
        />

        <Text inherit fz={{ base: 'xs', xs: 'sm' }} ta={'center'}>
          Following the success of the first 2024 AI Conference Nairobi, which
          attracted over 900 attendees, Drone Space is excited to announce that
          it will host the second AI Conference Nairobi later this year.
        </Text>

        <Text
          ta={'center'}
          fz={{ base: 'xs', xs: 'lg' }}
          c={'#fff039'}
          fw={'bold'}
        >
          Explore the Fusion of AI, Drones, and Data Analytics
        </Text>

        <Title
          order={1}
          ta={'center'}
          c={'var(--mantine-color-body)'}
          fz={{ base: 'lg', xs: 'xl', sm: 24, md: 32 }}
        >
          {/* JW Marriott Hotel, Westlands <br /> */}
          {/* Tue 17th - Wed 18th September, 2025 */}
          Venue and Date TBA
        </Title>

        <Text ta={'center'} fz={'sm'}>
          Drone Space hosted Kenya&apos;s first public AI Conference on March
          26th - 27th, 2024, and will hold the 2nd AI Conference Nairobi later
          this year.
        </Text>

        <Group gap={'xs'}>
          <Button
            component={'a'}
            href="https://aiconference.co.ke"
            target="_blank"
            color="white"
            variant="outline"
            radius={'xl'}
            size="sm"
            rightSection={
              <IconExternalLink
                size={ICON_SIZE / 1.5}
                stroke={ICON_STROKE_WIDTH}
              />
            }
          >
            <Text component="span" inherit>
              Visit Our AI Conference Website
            </Text>
          </Button>
        </Group>
      </Stack>
    </LayoutSection>
  );
}
