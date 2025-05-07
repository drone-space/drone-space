import { typeMenuNavbar } from '@/types/components/menu';
import { Card, Text, Title } from '@mantine/core';
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
