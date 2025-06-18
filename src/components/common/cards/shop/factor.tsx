import {
  BackgroundImage,
  Box,
  Group,
  Overlay,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import React from 'react';
import { Icon } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export default function Factor({
  data,
}: {
  data: { title: string; desc: string; icon: Icon; image: string };
}) {
  return (
    <Card className={classes.card} padding={'lg'}>
      <Stack gap={'sm'} align="start">
        <ThemeIcon size={ICON_WRAPPER_SIZE * 1.5} color="sec.3" c="pri.9">
          <data.icon size={ICON_SIZE * 1.5} stroke={ICON_STROKE_WIDTH} />
        </ThemeIcon>

          <div>
            <Title order={3} fz={'xl'} c={'var(--mantine-color-white)'}>
              {data.title}
            </Title>

            <Text mt={'sm'} fz={'sm'}>
              {data.desc}
            </Text>
          </div>
        </Stack>
      </Box>
    </BackgroundImage>
  );
}
