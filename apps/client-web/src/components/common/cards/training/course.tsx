import React from 'react';
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  CardSection,
  Center,
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
import ImageDefault from '@repo/components/common/images/default';

interface CourseProps {
  image: string;
  title: string;
  titleShort?: string;
  desc: string;
}

export default function Course({ data }: { data: CourseProps }) {
  return (
    <Card bg={'transparent'} padding={0}>
      <CardSection
        pos={'relative'}
        h={{ base: 240, xs: 320 }}
        style={{
          position: 'relative',
          borderRadius: 'var(--mantine-radius-lg)',
          overflow: 'hidden',
        }}
      >
        <ImageDefault
          src={data.image}
          alt={data.title}
          height={{ base: 240, xs: 320 }}
          width={'100%'}
          mode="grid"
          radius={0}
        />

        <Overlay backgroundOpacity={0.3} />
      </CardSection>

      <Stack gap={'xl'} justify="space-between" align="start" h={'100%'}>
        <Box pt={'md'}>
          <Title order={3} fz={{ base: 'md', md: 'xl' }}>
            {data.title}
          </Title>

          <Text mt={'sm'} lineClamp={6}>
            {data.desc}
          </Text>
        </Box>

        <NextLink
          href={`/drone-training/${linkify(data.titleShort || data.title)}`}
        >
          <Button
            color="sec.3"
            rightSection={
              <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            }
          >
            {data.title} Details
          </Button>
        </NextLink>
      </Stack>
    </Card>
  );
}
