import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import { typeMenuNavbar } from '@/types/components/menu';
import {
  Card,
  Center,
  Grid,
  GridCol,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import React from 'react';

export default function Menu({ props }: { props: typeMenuNavbar }) {
  return (
    <Card padding={'xs'} bg={'transparent'}>
      <Title order={2} fz={'sm'} lh={1}>
        {props.label}
      </Title>

      <Text mt={4} fz={'xs'} maw={{ md: '80%', lg: '90%' }}>
        {props.desc}
      </Text>
    </Card>
  );
}
