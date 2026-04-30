import React from 'react';
import {
  BackgroundImage,
  Button,
  Card,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import typeService from '@/types/service';
import { linkify } from '@repo/utilities/url';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import NextLink from '@repo/components/common/anchor/next-link';

export default function Service({ data }: { data: typeService }) {
  return (
    <Card c={'var(--mantine-color-white)'} padding={0} h={'100%'}>
      <BackgroundImage src={data.image} p={{ base: 'md', lg: 'xl' }} h={'100%'}>
        <Overlay backgroundOpacity={0.5} zIndex={0} />

        <Stack
          gap={'xl'}
          pos={'relative'}
          align="start"
          h={'100%'}
          mih={320}
          justify="space-between"
        >
          <div>
            <Title
              order={3}
              fz={{ base: 'md', md: 'lg' }}
              c={'var(--mantine-color-white)'}
            >
              {data.title}
            </Title>

            <Text mt={'xs'} fz="sm" lineClamp={6}>
              {data.desc}
            </Text>
          </div>

          <NextLink inherit href={`/drone-solutions#${linkify(data.title)}`}>
            <Button
              color="white"
              variant={'outline'}
              rightSection={
                <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
            >
              More on {data.title.split(' ')[data.title.split(' ').length - 1]}
            </Button>
          </NextLink>
        </Stack>
      </BackgroundImage>
    </Card>
  );
}
