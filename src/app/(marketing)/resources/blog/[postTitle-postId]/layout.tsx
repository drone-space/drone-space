import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import { typeParams } from '../layout';
import { PostRelations } from '@/types/models/post';
import { postsGet } from '@/handlers/requests/database/post';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import { HOSTED_BASE_URL } from '@/data/constants';
import { linkify } from '@/utilities/formatters/string';
import { images } from '@/assets/images';
import { companyName } from '@/data/app';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<typeParams>;
}): Promise<Metadata> => {
  const { posts }: { posts: PostRelations[] } = await postsGet();

  const postId = extractUuidFromParam((await params)['postTitle-postId']);

  const post = posts.find((p) => p.id == postId);

  const metaTitle = `${post?.title}`;

  return {
    title: metaTitle,
    description: post?.excerpt,
    openGraph: {
      title: metaTitle,
      description: post?.excerpt,
      url: `${HOSTED_BASE_URL.DEFAULT}/resources/blog/${linkify(post?.title || '')}-${post?.id}`,
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
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
