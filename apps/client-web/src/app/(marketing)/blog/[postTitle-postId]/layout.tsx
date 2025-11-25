import React from 'react';
import LayoutBody from '@repo/components/layout/body';
import { typeParams } from '../layout';
import { Metadata } from 'next';
import { PostRelations } from '@repo/types/models/post';
import { postsGet } from '@repo/handlers/requests/database/posts';
import { extractUuidFromParam, linkify } from '@repo/utilities/url';
import { HOSTED_BASE_URL } from '@repo/constants/paths';
import { images } from '@/assets/images';
import { companyName } from '@repo/constants/app';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<typeParams>;
}): Promise<Metadata> => {
  const { items: posts }: { items: PostRelations[] } = await postsGet();

  if (posts == null) throw new Error('Posts not found');

  const postId = extractUuidFromParam((await params)['postTitle-postId']);

  const post = posts.find((p) => p.id == postId);

  const metaTitle = `${post?.title}`;

  return {
    title: metaTitle,
    description: post?.excerpt,
    openGraph: {
      title: metaTitle,
      description: post?.excerpt,
      url: `${HOSTED_BASE_URL.CLIENT_WEB}/blog/${linkify(post?.title || '')}-${post?.id}`,
      type: 'website',
      images: [
        {
          url: images.brand.droneSpace.logo.potrait.meta,
          width: 1200,
          height: 1200,
          alt: companyName,
        },
      ],
    },
  };
};

export default function LayoutPost({
  children, // will be a page or nested layout
  // params,
}: {
  children: React.ReactNode;
  params: typeParams;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
