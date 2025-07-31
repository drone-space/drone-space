import React from 'react';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';

import { typeParams } from '../layout';
import { postGet } from '@/handlers/requests/database/post';
import { Stack } from '@mantine/core';
import IntroPage from '@/components/layout/intros/page';
import { HOSTED_BASE_URL, SECTION_SPACING } from '@/data/constants';
import ImageDefault from '@/components/common/images/default';
import { PostRelations } from '@/types/static/blog';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import { redirect } from 'next/navigation';
import BlogContent from '@/components/partials/blog-content';
import { linkify, processUrl } from '@/utilities/formatters/string';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
  // const { data: posts, error } = await postsGet();
  const { data: posts }: { data: any } = { data: null };

  // if (error) throw error;
  if (posts == null) return [];

  return posts.map((p: any) => ({
    'postTitle-postId': `${linkify(p.title)}-${p.id}`,
  }));
}

export default async function Post({ params }: { params: typeParams }) {
  const postId = extractUuidFromParam(params['postTitle-postId']);

  if (!postId) redirect('/not-found');

  const { post }: { post: PostRelations } = await postGet({ postId: postId });

  const processedImage = processUrl(post.image, HOSTED_BASE_URL.DEFAULT);

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Blog',
          title: post.title,
          desc: post.excerpt,
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
            alt={post.title}
            height={{ base: 240, xs: 320, md: 360, lg: 400 }}
            radius={'sm'}
            priority
          />

          <BlogContent content={post.content} />
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}
