import React from 'react';
import Link from 'next/link';
import {
  Anchor,
  BackgroundImage,
  Card,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { linkify } from '@/utilities/formatters/string';
import { IconArrowRight } from '@tabler/icons-react';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

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
          pos={'relative'}
          align="start"
          h={'100%'}
          justify="space-between"
        >
          <Stack gap={'xs'}>
            <Title
              order={3}
              fz={{ base: 'md', lg: 'lg' }}
              c={'var(--mantine-color-white)'}
            >
              {data.title}
            </Title>

            <Text fz="sm" lineClamp={5}>
              {data.desc}
            </Text>
          </Stack>

          <Anchor
            inherit
            component={Link}
            href={`#${linkify(data.title)}`}
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
          </Anchor>
        </Stack>
      </BackgroundImage>
    </Card>
  );
}
