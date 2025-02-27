import { Stack, Text } from '@mantine/core';
import React from 'react';
import ImageDefault from '../common/images/default';
import { images } from '@/assets/images';

export default function Empty({ props }: { props: { text: string } }) {
  return (
    <Stack align="center" justify="center" mih={400}>
      <ImageDefault
        src={images.empty}
        alt={'Mission'}
        height={{ base: 240, xs: 320, md: 160 }}
        width={{ base: 240, xs: 320, md: 160 }}
        fit="contain"
        mode="grid"
      />

      <Text c={'dimmed'} ta={'center'}>
        {props.text}
      </Text>
    </Stack>
  );
}
