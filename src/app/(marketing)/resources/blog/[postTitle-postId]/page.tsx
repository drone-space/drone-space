import React from 'react';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';

import { typeParams } from '../layout';
import { Stack } from '@mantine/core';
import IntroPage from '@/components/layout/intros/page';
import { HOSTED_BASE_URL, SECTION_SPACING } from '@/data/constants';
import ImageDefault from '@/components/common/images/default';
import { PostRelations } from '@/types/models/post';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import { redirect } from 'next/navigation';
import BlogContent from '@/components/partials/blog-content';
import { linkify, processUrl } from '@/utilities/formatters/string';
import { postGet, postsGet } from '@/services/database/posts';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
  const payload: null | { data: PostRelations[] } = await postsGet();
  if (payload == null) throw new Error('Posts not found');

  if (payload == null) return [];

  return payload.data.map((p: any) => ({
    'postTitle-postId': `${linkify(p.title)}-${p.id}`,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<typeParams>;
}) {
  const postId = extractUuidFromParam((await params)['postTitle-postId']);

  if (!postId) redirect('/not-found');

  const payload: null | { data: PostRelations } = await postGet({
    postId: postId,
  });

  if (payload == null) throw new Error('Posts not found');

  const processedImage = processUrl(
    payload.data.image,
    HOSTED_BASE_URL.DEFAULT
  );

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Blog',
          title: payload.data.title,
          desc: payload.data.excerpt,
          bg: processedImage,
        }}
        options={{ spacing: 'padding', autoSizeText: true }}
      />

      <LayoutSection
        id={'page-post-content'}
        margined={SECTION_SPACING / 2}
        mt={'xl'}
        containerized={'sm'}
      >
        <Stack gap={'xl'}>
          <ImageDefault
            src={processedImage}
            alt={payload.data.title}
            height={{ base: 240, xs: 320, md: 360, lg: 400 }}
            radius={'sm'}
            priority
          />

          <BlogContent content={payload.data.content} />
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}
