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
import classes from './main.module.scss';
import { PostGet } from '@repo/types/models/post';
import { linkify, processUrl } from '@repo/utilities/url';
import { getRegionalDate } from '@repo/utilities/date-time';
import ImageDefault from '@repo/components/common/images/default';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import NextLink from '@repo/components/common/anchor/next-link';
import { SECTION_SPACING } from '@repo/constants/sizes';
import { useStoreCategory } from '@repo/libraries/zustand/stores/category';
import { COMPANY_NAME } from '@repo/constants/app';

export default function Main({ post }: { post: PostGet }) {
  const categories = useStoreCategory((s) => s.categories);
  const categoryCurrent = categories?.find((ci) => ci.id == post.category_id);

  const pathPost = `/blog/${linkify(post.title)}-${post.id}`;
  const pathCategory = `/blog/categories/${linkify(categoryCurrent?.title || '')}-${categoryCurrent?.id}`;

  return (
    <Card
      className={classes.card}
      h={'100%'}
      padding={0}
      radius={0}
      pb={SECTION_SPACING / 2}
    >
      <div
        className={classes.image}
        style={{
          borderRadius: 'var(--mantine-radius-lg)',
          overflow: 'hidden',
        }}
      >
        <NextLink href={pathPost} pos={'relative'}>
          <ImageDefault
            src={processUrl(post.image, PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT)}
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
        </NextLink>
      </div>

      <Box mt={'lg'}>
        <Stack>
          <Title
            order={3}
            fz={{ base: 'xl' }}
            lineClamp={2}
            maw={{ md: '80%' }}
          >
            <NextLink underline="hover" inherit href={pathPost} c={'inherit'}>
              {post.title}
            </NextLink>
          </Title>

          <Text lineClamp={3}>{post.excerpt}</Text>

          <Group c={'dimmed'} fz={'sm'}>
            <Group visibleFrom="xs">
              {categories === undefined ? (
                <Skeleton w={80} />
              ) : !categoryCurrent ? null : (
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
              )}

              <>|</>
            </Group>

            <Tooltip label={'Date Published'}>
              <Text inherit style={{ cursor: 'pointer' }}>
                {
                  getRegionalDate(post.created_at, {
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
            <NextLink href={pathPost}>
              <Button aria-label={post.title}>Read More</Button>
            </NextLink>
          </Group> */}
        </Stack>
      </Box>
    </Card>
  );
}
