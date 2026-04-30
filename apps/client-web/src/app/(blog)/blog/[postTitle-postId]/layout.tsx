import React from 'react';
import LayoutMain from '@repo/components/layout/main';
import { typeParams } from '../layout';
import { Metadata } from 'next';
import { PostRelations } from '@repo/types/models/post';
import { postsGet } from '@repo/handlers/requests/database/posts';
import { extractUuidFromParam, linkify } from '@repo/utilities/url';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { images } from '@repo/constants/images';
import { COMPANY_NAME } from '@repo/constants/app';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<typeParams>;
}): Promise<Metadata> => {
  const { items: posts }: { items: PostRelations[] } = await postsGet();

  if (posts == null) {
    console.error('x--> Posts not found');
  }

  const postId = extractUuidFromParam((await params)['postTitle-postId']);

  const post = posts.find((p) => p.id == postId);

  const metaTitle = `${post?.title}`;

  return {
    title: metaTitle,
    description: post?.excerpt,
    openGraph: {
      title: metaTitle,
      description: post?.excerpt,
      url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/blog/${linkify(post?.title || '')}-${post?.id}`,
      type: 'website',
      images: [
        {
          url: images.brand.droneSpace.logo.potrait.meta,
          width: 1200,
          height: 1200,
          alt: COMPANY_NAME,
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
  return <LayoutMain>{children}</LayoutMain>;
}
