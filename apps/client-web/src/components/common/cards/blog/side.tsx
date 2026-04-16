'use client';

import { Card, Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import ImageDefault from '@repo/components/common/images/default';
import { PostGet } from '@repo/types/models/post';
import { getRegionalDate } from '@repo/utilities/date-time';
import { linkify } from '@repo/utilities/url';
import NextLink from '@repo/components/common/anchor/next-link';

export default function Side({ props }: { props: PostGet }) {
  const path = `/blog/${linkify(props.title)}-${props.id}`;

  return (
    <Card padding={0} radius={0}>
      <Grid gutter={'xs'}>
        <GridCol span={{ md: 4, xl: 3 }}>
          <NextLink inherit href={path}>
            <ImageDefault
              src={props.image}
              alt={props.title}
              height={80}
              width={'100%'}
            />
          </NextLink>
        </GridCol>

        <GridCol span={{ md: 8, xl: 9 }}>
          <Stack gap={0}>
            <NextLink inherit href={path} underline="hover">
              <Title order={3} fz={'md'} lineClamp={1}>
                {props.title}
              </Title>
            </NextLink>

            <Text fz={'md'} lineClamp={1}>
              {props.excerpt}
            </Text>

            <Text fz={'sm'} lineClamp={1} c={'dimmed'} mt={'xs'}>
              {
                getRegionalDate(props.created_at, {
                  locale: 'en-GB',
                  format: 'full',
                }).date
              }
            </Text>
          </Stack>
        </GridCol>
      </Grid>
    </Card>
  );
}
