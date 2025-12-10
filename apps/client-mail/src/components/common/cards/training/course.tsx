import React from 'react';
import {
  BackgroundImage,
  Box,
  Card,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { linkify } from '@repo/utilities/url';
import { IconArrowRight } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import NextLink from '@repo/components/common/anchor/next-link';

interface CourseProps {
  image: string;
  title: string;
  desc: string;
}

export default function Course({ data }: { data: CourseProps }) {
  return (
    <Card c={'var(--mantine-color-white)'} padding={0} h={'100%'}>
      <BackgroundImage src={data.image} p={'xl'} h={'100%'}>
        <Overlay backgroundOpacity={0.5} zIndex={0} />

        <Stack
          gap={'xl'}
          justify="space-between"
          align="start"
          pos={'relative'}
          h={'100%'}
        >
          <Box mih={{ base: 200, xs: 220, sm: 180, md: 220, lg: 200 }}>
            <Title
              order={3}
              fz={{ base: 'md', lg: 'lg' }}
              c={'var(--mantine-color-white)'}
            >
              {data.title}
            </Title>

            <Text mt={'xs'} fz="sm" lineClamp={6}>
              {data.desc}
            </Text>
          </Box>

          <NextLink
            href={`#${linkify(data.title)}`}
            inherit
            c={'var(--mantine-color-white)'}
            underline="hover"
            fz={'xs'}
          >
            <Group gap={'xs'}>
              <Text component="span" inherit>
                {data.title} Details
              </Text>

              <IconArrowRight
                size={ICON_SIZE / 1.5}
                stroke={ICON_STROKE_WIDTH}
              />
            </Group>
          </NextLink>
        </Stack>
      </BackgroundImage>
    </Card>
  );
}
