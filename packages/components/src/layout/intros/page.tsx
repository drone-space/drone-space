'use client';

/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import React from 'react';
import LayoutSection from '../section';
import { usePathname } from 'next/navigation';
import { Container, Stack, Text, Title } from '@mantine/core';
import { crumbify } from '@repo/utilities/url';
import { SECTION_SPACING } from '@repo/constants/sizes';

interface PageHeaderProps {
  props: {
    /** Background image URL */
    bg?: string;
    /** If string, displayed as uppercase breadcrumb; if ReactNode, rendered directly */
    path?: string | React.ReactNode;
    title: string;
    desc?: string;
  };
  options?: {
    /** Controls vertical spacing style */
    spacing?: 'margin' | 'padding';
    alignment?: any;
  };
}

export default function Page({ props, options }: PageHeaderProps) {
  const alignment = options?.alignment ?? 'center';

  const pathname = usePathname();
  const segments = crumbify(pathname);
  const fallbackLabel = segments[segments.length - 1]?.label ?? '';

  const spacingProps = {
    padded: options?.spacing === 'padding' || undefined,
    margined: options?.spacing === 'margin' || undefined,
  };

  const pathContent =
    typeof props.path === 'string' ? (
      <Text fw="bold" ta={alignment} c="sec.3" tt="uppercase" fz="sm">
        {props.path || fallbackLabel}
      </Text>
    ) : (
      props.path
    );

  const layout = (
    <LayoutSection
      id="layout-intro-page"
      {...spacingProps}
      padded={SECTION_SPACING}
    >
      <Stack align={alignment}>
        {pathContent}

        <LayoutSection
          id="layout-intro-page-content"
          px={0}
          containerized={options?.alignment ? false : 'sm'}
          // mb={options?.spacing ? SECTION_SPACING : undefined}
        >
          <Stack align={alignment}>
            <Title
              order={1}
              ta={alignment}
              maw={options?.alignment ? { base: '100%', md: '70%' } : undefined}
            >
              {props.title}
            </Title>

            {props.desc && (
              <Text ta={alignment} fz="xl">
                {props.desc}
              </Text>
            )}
          </Stack>
        </LayoutSection>
      </Stack>
    </LayoutSection>
  );

  // No background → return layout normally
  if (!props.bg) return layout;

  // With background, wrap layout like the old component
  return (
    <div
      style={{
        backgroundImage: `url(${props.bg})`,
        position: 'relative',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <LayoutSection
        id="layout-intro-page"
        {...spacingProps}
        padded={SECTION_SPACING}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.05)',
            zIndex: 0,
          }}
        />

        {/* Ensure content is on top */}
        <div style={{ position: 'relative', zIndex: 1 }}>{layout}</div>
      </LayoutSection>
    </div>
  );
}
