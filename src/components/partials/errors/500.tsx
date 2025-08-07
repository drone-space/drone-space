import React from 'react';
import { Stack, Button, Group, Flex } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@/data/constants';
import { IconRefresh } from '@tabler/icons-react';
import IntroSection from '@/components/layout/intros/section';

export default function Error500({ reset }: { reset: () => void }) {
  return (
    <LayoutSection id={'error-500'}>
      <Stack justify="center" mih={'100vh'} pb={SECTION_SPACING}>
        <IntroSection
          props={{
            subTitle: `500`,
            title: 'Server Error',
            desc: `The page you are trying to open has triggered an error.`,
          }}
        />

        <Group justify="center" mt={'md'}>
          <Flex
            direction={{ base: 'column', xs: 'row' }}
            align={'center'}
            gap={'md'}
          >
            <Button
              leftSection={
                <IconRefresh size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
              variant="light"
              onClick={() => reset()}
            >
              Try Again
            </Button>
          </Flex>
        </Group>
      </Stack>
    </LayoutSection>
  );
}
