'use client';

import { Anchor, Box, Divider, Group, Text } from '@mantine/core';
import React from 'react';

export default function Admin() {
  return (
    <>
      <Divider />
      <Box px={{ base: 'sm', md: 'xl' }} py={'lg'} bg={'gray.0'}>
        <Group justify="space-between" c={'dimmed'} fz={'sm'}>
          <Text inherit>
            <Text component="span" inherit c={'pri'} fw={500}>
              Drone Space
            </Text>{' '}
            © {new Date().getFullYear()}, All Rights Reserved.
          </Text>

          <Text inherit>
            Made by{' '}
            <Anchor
              href={'https://kevon.net'}
              target="_blank"
              inherit
              c={'pri'}
              fw={500}
            >
              Kevon
            </Anchor>
          </Text>
        </Group>
      </Box>
    </>
  );
}
