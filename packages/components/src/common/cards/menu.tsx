import React from 'react';
import { Card, Text, Title } from '@mantine/core';
import { typeMenuNavbar } from '@repo/types/link';

export default function Menu({ props }: { props: typeMenuNavbar }) {
  return (
    <Card bg={'transparent'} h={'100%'} padding={0} radius={0}>
      <Title
        order={2}
        fz={{ sm: 'sm', xl: 'md' }}
        lh={1}
        fw={500}
        style={{ transition: '.1s all ease' }}
      >
        {props.labelShort || props.label}
      </Title>

      <Text mt={6} fz={{ sm: 'xs', xl: 'sm' }} maw={{ md: '80%', lg: '90%' }}>
        {props.desc}
      </Text>
    </Card>
  );
}
