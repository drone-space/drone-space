import React from 'react';
import { Card, Text, Title } from '@mantine/core';
import { typeMenuNavbar } from '@/types/menu';

export default function Menu({ props }: { props: typeMenuNavbar }) {
  return (
    <Card py={5} px={2.5} bg={'transparent'} h={'100%'}>
      <Title order={2} fz={'sm'} lh={1}>
        {props.label}
      </Title>

      <Text mt={6} fz={'xs'} maw={{ md: '80%', lg: '90%' }}>
        {props.desc}
      </Text>
    </Card>
  );
}
