'use client';

import React from 'react';
import { LayoutSection } from '@repo/ui';
import { LayoutIntroSection } from '@repo/ui';
import { BASE_URL, SECTION_SPACING } from '@repo/constants';
import { ImageDefault } from '@repo/ui';
import { linkify, processUrl } from '@repo/utils';
import { Anchor, Box, Group, Skeleton, Stack, Text, Tooltip } from '@mantine/core';
import { getRegionalDate } from '@repo/utils';
import { COMPANY_NAME } from '@repo/constants';
import { useStorePost } from '@repo/store';
import { useStoreCategory } from '@repo/store';
import { ParserHtml } from '@repo/ui';

export default function BlogDetail({ props }: { props: { postId: string } }) {
  const posts = useStorePost((s) => s.posts);
  const post = posts?.find((pi) => pi.id == props.postId);
  const categories = useStoreCategory((s) => s.categories);

  const categoryCurrent = categories?.find((ci) => ci.id == post?.categoryId);

  const pathCategory = `/blog/categories/${linkify(categoryCurrent?.title || '')}-${categoryCurrent?.id}`;

  const processedImage = processUrl(post?.image || '', BASE_URL.WEB);

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
                <LayoutIntroSection
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
              <Text inherit>
                Last Updated:{' '}
                <Tooltip label={'Last Updated'}>
                  <Text component="span" inherit fw={500} style={{ cursor: 'pointer' }}>
                    {
                      getRegionalDate(post?.updatedAt, {
                        locale: 'en-GB',
                        format: 'short',
                      }).date
                    }
                  </Text>
                </Tooltip>
              </Text>
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
