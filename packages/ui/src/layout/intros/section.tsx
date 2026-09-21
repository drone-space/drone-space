'use client';

import LayoutSection from '../section';
import { Stack, Text, Title } from '@mantine/core';
import { SECTION_SPACING } from '@repo/constants/sizes';

interface SectionHeaderProps {
  props: {
    subTitle?: string;
    title: string;
    desc?: string;
  };
  options?: {
    alignment?: any;
    spacing?: boolean;
    c?: string;
  };
}

export function LayoutIntroSection({ props, options }: SectionHeaderProps) {
  const alignment = options?.alignment ?? 'center';

  return (
    <LayoutSection id="layout-intro-section" containerized={false}>
      <Stack>
        {props.subTitle && (
          <Text fw="bold" ta={alignment} c="sec.3" tt="uppercase" fz="sm">
            {props.subTitle}
          </Text>
        )}

        <LayoutSection
          id="layout-intro-section-desc"
          px={0}
          containerized={options?.alignment ? false : 'md'}
          mb={options?.spacing ? SECTION_SPACING : undefined}
        >
          <Stack>
            <Title order={2} ta={alignment} c={options?.c}>
              {props.title}
            </Title>

            {props.desc && <Text ta={alignment}>{props.desc}</Text>}
          </Stack>
        </LayoutSection>
      </Stack>
    </LayoutSection>
  );
}
