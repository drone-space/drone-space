'use client';

import Link from 'next/link';
import { Stack, Button, Group } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import LayoutSection from '../../layout/section';
import IntroSection from '../../layout/intros/section';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@repo/constants/sizes';
import NextLink from '../../common/anchor/next-link';

export default function Error404() {
  return (
    <LayoutSection id={'error-404'}>
      <Stack justify="center" mih={'100vh'}>
        <IntroSection
          props={{
            subTitle: `404`,
            title: 'Not Found',
            desc: `The page you are trying to open does not exist.`,
          }}
        />

        <Group justify="center" mt={'md'}>
          <NextLink href={'/'}>
            <Button
              leftSection={
                <IconArrowLeft size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
            >
              Go To Home Page
            </Button>
          </NextLink>
        </Group>
      </Stack>
    </LayoutSection>
  );
}
