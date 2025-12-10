import {
  BackgroundImage,
  Box,
  Card,
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
} from '@repo/constants/sizes';

export default function Factor({
  data,
}: {
  data: { title: string; desc: string; icon: Icon; image: string };
}) {
  return (
    <Card padding={0} h={'100%'}>
      <BackgroundImage
        src={data.image}
        h={'100%'}
        c={'var(--mantine-color-white)'}
        pos={'relative'}
        style={{ overflow: 'hidden' }}
      >
        <Overlay color="black" opacity={0.5} zIndex={0} />

        <Box p={'xl'} pos={'relative'} style={{ zIndex: 1 }}>
          <Stack justify="space-between">
            <Group justify="end" align="start" mih={160}>
              <ThemeIcon size={ICON_WRAPPER_SIZE * 1.5} color="sec.3" c="pri.8">
                <data.icon size={ICON_SIZE * 1.5} stroke={ICON_STROKE_WIDTH} />
              </ThemeIcon>
            </Group>

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
    </Card>
  );
}
