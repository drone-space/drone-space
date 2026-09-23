'use client';

import { Card, Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import { ImageDefault } from '@repo/ui';
import { PostGet } from '@repo/types';
import { getRegionalDate } from '@repo/utils';
import { linkify } from '@repo/utils';
import { AnchorNextLink } from '@repo/ui';

export default function Side({ props }: { props: PostGet }) {
  const path = `/blog/${linkify(props.title)}-${props.id}`;

  return (
    <Card padding={0} radius={0}>
      <Grid gap={'xs'}>
        <GridCol span={{ md: 4, xl: 3 }}>
          <AnchorNextLink inherit href={path}>
            <ImageDefault src={props.image} alt={props.title} height={80} width={'100%'} />
          </AnchorNextLink>
        </GridCol>

        <GridCol span={{ md: 8, xl: 9 }}>
          <Stack gap={0}>
            <AnchorNextLink inherit href={path} underline="hover">
              <Title order={3} fz={'md'} lineClamp={1}>
                {props.title}
              </Title>
            </AnchorNextLink>

            <Text fz={'md'} lineClamp={1}>
              {props.excerpt}
            </Text>

            <Text fz={'sm'} lineClamp={1} c={'dimmed'} mt={'xs'}>
              {
                getRegionalDate(props.createdAt, {
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
