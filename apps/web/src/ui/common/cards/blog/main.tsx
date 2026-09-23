'use client';

import React from 'react';
import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Group,
  Skeleton,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import classes from './main.module.css';
import { PostGet } from '@repo/types';
import { linkify, processUrl } from '@repo/utils';
import { getRegionalDate } from '@repo/utils';
import { ImageDefault } from '@repo/ui';
import { AnchorNextLink } from '@repo/ui';
import { BASE_URL, SECTION_SPACING } from '@repo/constants';
import { useStoreCategory } from '@repo/store';
import { COMPANY_NAME } from '@repo/constants';

export default function Main({ post }: { post: PostGet }) {
  const categories = useStoreCategory((s) => s.categories);
  const categoryCurrent = categories?.find((ci) => ci.id == post.categoryId);

  const pathPost = `/blog/${linkify(post.title)}-${post.id}`;
  // const pathCategory = `/blog/categories/${linkify(categoryCurrent?.title || '')}-${categoryCurrent?.id}`;

  return (
    <Card className={classes.card} h={'100%'} padding={0} radius={0} pb={SECTION_SPACING / 2}>
      <div
        className={classes.image}
        style={{
          borderRadius: 'var(--mantine-radius-lg)',
          overflow: 'hidden',
        }}
      >
        <AnchorNextLink href={pathPost} pos={'relative'}>
          <ImageDefault
            src={processUrl(post.image, BASE_URL.WEB)}
            alt={post.title}
            height={{
              base: 240,
              xs: 320,
              sm: 400,
              md: 480,
              // lg: 560,
              // xl: 640,
            }}
            mode="grid"
          />

          <div className={classes.overlay}></div>
        </AnchorNextLink>
      </div>

      <Box mt={'lg'}>
        <Stack>
          <Title order={3} fz={{ base: 'xl' }} lineClamp={2} maw={{ md: '80%' }}>
            <AnchorNextLink underline="hover" inherit href={pathPost} c={'inherit'}>
              {post.title}
            </AnchorNextLink>
          </Title>

          <Text lineClamp={3}>{post.excerpt}</Text>

          <Group c={'dimmed'} fz={'sm'}>
            {categories === undefined ? (
              <Skeleton w={120} h={24} />
            ) : !categoryCurrent ? null : (
              <Box visibleFrom="xs">
                <Tooltip label={'Category'}>
                  <Text
                    // href={pathCategory}
                    // underline="hover"
                    inherit
                    style={{ cursor: 'pointer' }}
                    fw={500}
                  >
                    {categoryCurrent.title}
                  </Text>
                </Tooltip>

                <>|</>
              </Box>
            )}

            <Tooltip label={'Date Published'}>
              <Text inherit style={{ cursor: 'pointer' }}>
                {
                  getRegionalDate(post.createdAt, {
                    locale: 'en-GB',
                    format: 'full',
                  }).date
                }
              </Text>
            </Tooltip>

            <Group visibleFrom="xs">
              <>|</>

              <Tooltip label={'Author(s)'}>
                <Text inherit style={{ cursor: 'pointer' }}>
                  {COMPANY_NAME}
                </Text>
              </Tooltip>
            </Group>
          </Group>

          {/* <Group>
            <AnchorNextLink href={pathPost}>
              <Button aria-label={post.title}>Read More</Button>
            </AnchorNextLink>
          </Group> */}
        </Stack>
      </Box>
    </Card>
  );
}
