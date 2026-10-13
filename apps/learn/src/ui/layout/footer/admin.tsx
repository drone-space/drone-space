'use client';

import React from 'react';
import { Box, Divider, Group, Text } from '@mantine/core';

export default function Admin() {
  return (
    <>
      <Divider />
      <Box px={{ base: 'sm', md: 'xl' }} py={'lg'}>
        <Group c={'dimmed'} fz={'sm'}>
          <Text inherit>
            <Text component="span" inherit fw={500}>
              Drone Space
            </Text>{' '}
            © {new Date().getFullYear()}, All Rights Reserved.
          </Text>
        </Group>
      </Box>
    </>
  );
}
