import React from 'react';
import { LayoutMain } from '@repo/ui';
import { typeParams } from '../layout';
import { Metadata } from 'next';
import { PostRelations } from '@repo/types';
import { postsGet } from '@repo/handlers';
import { extractUuidFromParam, linkify } from '@repo/utils';
import { getApiUrl, getBaseUrl, images } from '@repo/constants';
import { COMPANY_NAME } from '@repo/constants';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<typeParams>;
}): Promise<Metadata> => {
  const { items: posts }: { items: PostRelations[] } = await postsGet({
    apiUrl: await getApiUrl(),
  });

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
      url: `${(await getBaseUrl()).WEB}/blog/${linkify(post?.title || '')}-${post?.id}`,
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
}: {
  children: React.ReactNode;
}) {
  return <LayoutMain>{children}</LayoutMain>;
}
