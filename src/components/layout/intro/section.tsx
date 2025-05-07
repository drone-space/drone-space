'use client';

import React from 'react';
import LayoutSection from '../section';
import { Stack, Text, Title } from '@mantine/core';
import { SECTION_SPACING } from '@/data/constants';

export default function Section({
  props,
  options,
}: {
  props: { subTitle?: string; title: string; desc?: string };
  options?: { alignment?: 'start' | 'end'; spacing?: boolean };
}) {
  return (
    <LayoutSection id={'layout-intro-section'} containerized={false}>
      <Stack>
        {props.subTitle && (
          <Text
            fw={'bold'}
            ta={{ base: 'center', md: options?.alignment || 'center' }}
            c={'sec.3'}
            tt={'uppercase'}
            fz={'sm'}
          >
            {props.subTitle}
          </Text>
        )}

        <LayoutSection
          id="layout-intro-section-desc"
          px={0}
          containerized={options?.alignment ? false : 'sm'}
          mb={options?.spacing ? SECTION_SPACING / 2 : undefined}
        >
          <Stack>
            <Title
              order={2}
              ta={{ base: 'center', md: options?.alignment || 'center' }}
            >
              {props.title}
            </Title>

            {props.desc && (
              <Text ta={{ base: 'center', md: options?.alignment || 'center' }}>
                {props.desc}
              </Text>
            )}
          </Stack>
        </LayoutSection>
      </Stack>
    </LayoutSection>
  );
}
