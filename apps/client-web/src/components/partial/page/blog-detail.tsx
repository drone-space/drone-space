'use client';

import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import IntroSection from '@repo/components/layout/intros/section';
import { SECTION_SPACING } from '@repo/constants/sizes';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import ImageDefault from '@repo/components/common/images/default';
import { linkify, processUrl } from '@repo/utilities/url';
import {
  Anchor,
  Box,
  Group,
  Skeleton,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import { getRegionalDate } from '@repo/utilities/date-time';
import { COMPANY_NAME } from '@repo/constants/app';
import { useStorePost } from '@repo/libraries/zustand/stores/post';
import { useStoreCategory } from '@repo/libraries/zustand/stores/category';
import ParserHtml from '@repo/components/parsers/html';

export default function BlogDetail({ props }: { props: { postId: string } }) {
  const posts = useStorePost((s) => s.posts);
  const post = posts?.find((pi) => pi.id == props.postId);
  const categories = useStoreCategory((s) => s.categories);

  const categoryCurrent = categories?.find((ci) => ci.id == post?.category_id);

  const pathCategory = `/blog/categories/${linkify(categoryCurrent?.title || '')}-${categoryCurrent?.id}`;

  const processedImage = processUrl(
    post?.image || '',
    PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT
  );

  return (
    <LayoutSection id={'page-post-content'} containerized={false} padded>
      <Stack gap={SECTION_SPACING / 2}>
        <Stack>
          <Box>
            {posts === undefined ? (
              <Stack gap={'sm'}>
                <Skeleton h={24} w={'100%'} />
                <Skeleton h={24} w={'70%'} />
              </Stack>
            ) : !post ? null : (
              <Box maw={{ md: '80%' }}>
                <IntroSection
                  props={{
                    title: post?.title,
                  }}
                  options={{ alignment: 'start' }}
                />
              </Box>
            )}
          </Box>

          <Group c={'dimmed'} fz={'sm'} mih={21.7}>
            <Group visibleFrom="xs">
              {categories === undefined ? (
                <Skeleton h={18} w={140} />
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

            {posts === undefined ? (
              <Skeleton h={18} w={160} />
            ) : !post ? null : (
              <Tooltip label={'Date Published'}>
                <Text inherit style={{ cursor: 'pointer' }}>
                  {
                    getRegionalDate(post?.created_at, {
                      locale: 'en-GB',
                      format: 'full',
                    }).date
                  }
                </Text>
              </Tooltip>
            )}

            <Group visibleFrom="xs">
              <>|</>

              <Tooltip label={'Author(s)'}>
                <Text inherit style={{ cursor: 'pointer' }}>
                  {COMPANY_NAME}
                </Text>
              </Tooltip>
            </Group>
          </Group>
        </Stack>

        <div>
          {posts === undefined ? (
            <Skeleton h={{ base: 300, xs: 400, md: 360, lg: 420 }} />
          ) : !post ? null : (
            <ImageDefault
              src={processedImage}
              alt={post.title}
              height={{ base: 300, xs: 400, md: 360, lg: 420 }}
            />
          )}
        </div>

        <Box mih={'50vh'}>
          {posts === undefined ? (
            <Stack gap={'xs'}>
              <Skeleton h={16} w={'100%'} />
              <Skeleton h={16} w={'100%'} />
              <Skeleton h={16} w={'70%'} />
              <Skeleton h={16} w={'70%'} />
              <Skeleton h={16} w={'50%'} />
              <Skeleton h={16} w={'50%'} />
            </Stack>
          ) : !post ? null : (
            <div id={'html-parser-blog'}>
              <ParserHtml props={{ html: post.content }} />
            </div>
          )}
        </Box>
      </Stack>
    </LayoutSection>
  );
}
