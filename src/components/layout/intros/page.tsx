'use client';

import React from 'react';
import LayoutSection from '../section';
import { usePathname } from 'next/navigation';
import { Container, Group, Stack, Text, Title } from '@mantine/core';
// import BreadcrumbMain from '@/components/common/breadcrumbs/main';
import { crumbify } from '@/utilities/formatters/string';
// import classes from './page.module.scss';

export default function Page({
  props,
  options = { spacing: 'padding' },
}: {
  props: {
    bg?: string;
    path?: string | React.ReactNode;
    title: string;
    desc?: string;
  };
  options?: { spacing?: 'margin' | 'padding'; autoSizeText?: boolean };
}) {
  const pathname = usePathname();
  const segments = crumbify(pathname);

  return (
    <div
      // className={classes.root}
      style={{
        backgroundImage: `url(${props.bg})`,
        position: 'relative',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <LayoutSection
        id={'layout-intro-page'}
        padded={options?.spacing == 'padding' ? true : undefined}
        margined={options?.spacing == 'margin' ? true : undefined}
        containerized={'sm'}
      >
        {props.bg && (
          <div
            // className={classes.underlay}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(0,0,0, 0.6)`,
              zIndex: 0,
            }}
          ></div>
        )}

        <Stack
          // className={classes.content}
          mih={160}
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* <Group justify={'center'}>
          <BreadcrumbMain props={segments} />
        </Group> */}

          {typeof props.path == 'string' ? (
            <Text
              fw={'bold'}
              ta={'center'}
              c={'sec.3'}
              tt={'uppercase'}
              fz={'sm'}
            >
              {props.path ? props.path : segments[segments.length - 1].label}
            </Text>
          ) : (
            <Group justify="center">{props.path}</Group>
          )}

          <Container size={'md'}>
            <Stack>
              <Title
                order={1}
                ta={'center'}
                fz={
                  !options?.autoSizeText
                    ? undefined
                    : { base: 'xl', md: '2rem' }
                }
                c={props.bg ? 'var(--mantine-color-white)' : undefined}
              >
                {props.title}
              </Title>

              {props.desc && (
                <Text
                  ta={'center'}
                  fz={
                    !options?.autoSizeText
                      ? undefined
                      : { base: 'xs', xs: 'sm', md: 'md' }
                  }
                  c={props.bg ? 'var(--mantine-color-white)' : undefined}
                >
                  {props.desc}
                </Text>
              )}
            </Stack>
          </Container>
        </Stack>
      </LayoutSection>
    </div>
  );
}
