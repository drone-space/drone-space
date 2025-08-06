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
import { postsGet } from '@/services/database/posts';
import { images } from '@/assets/images';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
  const payload: null | { data: PostRelations[] } = await postsGet();

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

  const payload: null | { data: PostRelations[] } = await postsGet();
  if (payload == null) throw new Error('Posts not found');

  const post: undefined | PostRelations = payload.data.find(
    (p) => p.id == postId
  );
  if (post == null) throw new Error('Post not found');

  const processedImage = processUrl(post.image, HOSTED_BASE_URL.DEFAULT);

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Blog',
          title: post.title,
          // desc: post.excerpt,
          bg: images.web.hero,
        }}
        options={{ spacing: 'padding', autoSizeText: true }}
      />

      <LayoutSection
        id={'page-post-content'}
        margined={SECTION_SPACING / 2}
        mt={'xl'}
        containerized={'md'}
      >
        <Stack gap={'xl'}>
          <ImageDefault
            src={processedImage}
            alt={post.title}
            height={{ base: 240, xs: 320, md: 360, lg: 400 }}
            radius={'lg'}
            priority
          />

          <BlogContent content={post.content} />
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}
