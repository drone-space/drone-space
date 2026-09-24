import React from 'react';
import { LayoutSection } from '@repo/ui';
import { LayoutIntroSection } from '@repo/ui';
import { BASE_URL, getApiUrl, SECTION_SPACING } from '@repo/constants';
import { ImageDefault } from '@repo/ui';
import { processUrl } from '@repo/utils';
import { Box, Group, Stack, Text, Tooltip } from '@mantine/core';
import { getRegionalDate } from '@repo/utils';
import { COMPANY_NAME } from '@repo/constants';
import { ParserHtml } from '@repo/ui';
import { CategoryGet, PostGet } from '@repo/types';
import { categoriesGet, postsGet } from '@repo/handlers';
import { redirect } from 'next/navigation';

export default async function BlogDetail({ postId }: { postId: string }) {
  const apiUrl = await getApiUrl();

  const { items: posts }: { items: PostGet[] } = await postsGet({ apiUrl: apiUrl });
  const post = posts?.find((pi) => pi.id == postId);

  const { items: categories }: { items: CategoryGet[] } = await categoriesGet({ apiUrl: apiUrl });
  const category = categories?.find((ci) => ci.id == post?.categoryId);

  if (!post) redirect('/not-found');

  // const pathCategory = `/blog/categories/${linkify(categoryCurrent?.title || '')}-${categoryCurrent?.id}`;

  const processedImage = processUrl(post?.image || '', BASE_URL.WEB);

  return (
    <LayoutSection id={'page-post-content'} containerized={false} padded>
      <Stack gap={SECTION_SPACING / 2}>
        <Stack>
          <Box>
            {!post ? null : (
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
            {!category ? null : (
              <Group visibleFrom="xs">
                <Tooltip label={'Category'}>
                  <Text
                    // href={pathCategory}
                    // underline="hover"
                    inherit
                    style={{ cursor: 'pointer' }}
                    fw={500}
                  >
                    {category.title}
                  </Text>
                </Tooltip>

                <>|</>
              </Group>
            )}

            {!post ? null : (
              <Text inherit>
                Last Updated:{' '}
                <Tooltip label={'Last Updated'}>
                  <Text component="span" inherit fw={500} style={{ cursor: 'pointer' }}>
                    {
                      getRegionalDate(post.updatedAt, {
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
          {!post ? null : (
            <ImageDefault
              src={processedImage}
              alt={post.title}
              height={{ base: 300, xs: 400, md: 360, lg: 420 }}
            />
          )}
        </div>

        <Box mih={'50vh'}>
          {!post ? null : (
            <div id={'html-parser-blog'}>
              <ParserHtml props={{ html: post.content }} />
            </div>
          )}
        </Box>
      </Stack>
    </LayoutSection>
  );
}
