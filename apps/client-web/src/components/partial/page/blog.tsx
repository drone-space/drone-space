'use client';

import React from 'react';
import { useStorePost } from '@repo/libraries/zustand/stores/post';
import LayoutSection from '@repo/components/layout/section';
import {
  Center,
  Divider,
  Flex,
  Grid,
  GridCol,
  Loader,
  Pagination,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { sortArray } from '@repo/utilities/array';
import { Order } from '@repo/types/enums';
import CardBlogMain from '@/components/common/cards/blog/main';
import { IconCircleX } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { usePaginate } from '@repo/hooks/paginate';
import { prependZeros } from '@repo/utilities/number';
import { useRouter } from 'next/navigation';

export default function Blog() {
  const router = useRouter();
  const { posts } = useStorePost();

  const { items, activePage, setActivePage, totalPages, pageRange } =
    usePaginate(
      sortArray(posts || [], (i) => i.created_at, Order.DESCENDING),
      Number(3)
    );

  return (
    <LayoutSection id={'listing'} padded containerized={false} mih={'100vh'}>
      {posts === undefined ? (
        <Stack align="center" ta={'center'} c={'dimmed'} py={SECTION_SPACING}>
          <Loader />
          <Text inherit fz={'sm'}>
            Fetching posts
          </Text>
        </Stack>
      ) : !posts?.length ? (
        <Stack align="center" ta={'center'} c={'dimmed'} py={SECTION_SPACING}>
          <ThemeIcon size={ICON_WRAPPER_SIZE * 2} variant="light" radius={999}>
            <IconCircleX size={ICON_SIZE * 2} />
          </ThemeIcon>

          <Text inherit fz={'sm'}>
            No posts found
          </Text>
        </Stack>
      ) : (
        <>
          <Grid>
            {items.map((post, index) => (
              <GridCol key={index} span={12}>
                <CardBlogMain post={post} />
              </GridCol>
            ))}
          </Grid>

          {!items.length ? undefined : (
            <>
              <Divider my={'xl'} />

              <Flex
                direction={{ base: 'column', sm: 'row-reverse' }}
                align={'center'}
                gap={'md'}
                justify={{ sm: 'space-between' }}
              >
                <Pagination
                  size={'sm'}
                  total={totalPages}
                  value={activePage}
                  onChange={setActivePage}
                  onClick={() => router.push('#listing')}
                />

                <Text inherit c={'dimmed'}>
                  Showing {prependZeros(pageRange?.from || 0, 2)} -{' '}
                  {prependZeros(pageRange?.to || 0, 2)}
                </Text>
              </Flex>
            </>
          )}
        </>
      )}
    </LayoutSection>
  );
}
