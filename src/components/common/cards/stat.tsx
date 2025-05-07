import React from 'react';
import { Box, Text, Title } from '@mantine/core';
import classes from './stat.module.scss';

export interface typeCardStats {
  stat: string;
  title: string;
}

export default function Stat({ data }: { data: typeCardStats }) {
  return (
    <Box className={classes.card} p={{ base: 'md' }}>
      <Text
        component="p"
        fz={{ base: 28, sm: 32, lg: 32 }}
        fw={700}
        ta={'center'}
        className={classes.stat}
      >
        {data.stat}
      </Text>

      <Title
        order={3}
        fw={500}
        fz={{ base: 'sm', sm: 'lg', md: 'sm', lg: 'md' }}
        ta={'center'}
        mt={'xs'}
        className={classes.title}
      >
        {data.title}
      </Title>
    </Box>
  );
}
