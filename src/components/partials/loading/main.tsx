import React from 'react';
import { Center } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import LoaderMain from '@/components/common/loaders/main';

export default function Main() {
  return (
    <LayoutSection id={'error-404'}>
      <Center mih={'100vh'}>
        <LoaderMain />
      </Center>
    </LayoutSection>
  );
}
