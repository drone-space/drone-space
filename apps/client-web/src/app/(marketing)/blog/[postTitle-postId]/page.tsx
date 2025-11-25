import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import LayoutSection from '@repo/components/layout/section';
import { typeParams } from '../layout';
import IntroPage from '@repo/components/layout/intros/page';
import { SECTION_SPACING } from '@repo/constants/sizes';
import { HOSTED_BASE_URL } from '@repo/constants/paths';
import ImageDefault from '@repo/components/common/images/default';
import { PostRelations } from '@repo/types/models/post';
import { extractUuidFromParam } from '@repo/utilities/url';
import { redirect } from 'next/navigation';
import BlogContent from '@/components/partial/blog-content';
import { linkify, processUrl } from '@repo/utilities/url';
import { postsGet } from '@repo/handlers/requests/database/posts';
import { images } from '@/assets/images';
import CtaHome from '@/components/partial/cta/home';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
  const { items: posts }: { items: PostRelations[] } = await postsGet();

  if (posts == null) return [];

  return posts.map((p: any) => ({
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

  const { items: posts }: { items: PostRelations[] } = await postsGet();
  if (posts == null) throw new Error('Posts not found');

  const post: undefined | PostRelations = posts.find((p) => p.id == postId);
  if (post == null) throw new Error('Post not found');

  const processedImage = processUrl(post.image, HOSTED_BASE_URL.CLIENT_WEB);

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Blog',
          title: post.title,
          // desc: post.excerpt,
          bg: images.web.hero.light,
        }}
        options={{ spacing: 'padding' }}
      />

      <LayoutSection
        id={'page-post-content'}
        my={SECTION_SPACING / 2}
        containerized={false}
        maw={1200}
        mx={'auto'}
        p={'md'}
      >
        <ImageDefault
          src={processedImage}
          alt={post.title}
          height={{ base: 300, xs: 400, md: 560, lg: 640 }}
          priority
        />
      </LayoutSection>

      <LayoutSection
        id={'page-post-content'}
        margined={SECTION_SPACING / 2}
        mt={'xl'}
        containerized={'md'}
      >
        <BlogContent content={post.content} />
      </LayoutSection>

      <CtaHome
        params={{
          title: 'Get the latest updates',
          desc: 'Subscribe to get the most-popular content on drone products, drone training, drone services, and top drone industry news to help keep you up to speed.',
        }}
      />
    </LayoutPage>
  );
}
