import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import { typeParams } from '../layout';
import { PostRelations } from '@/types/models/post';
import { postsGet } from '@/handlers/requests/database/post';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import appData from '@/data/app';
import { HOSTED_BASE_URL } from '@/data/constants';
import { linkify } from '@/utilities/formatters/string';
import { images } from '@/assets/images';

export const generateMetadata = async ({
  params,
}: {
  params: typeParams;
}): Promise<Metadata> => {
  const { posts }: { posts: PostRelations[] } = await postsGet();

  const postId = extractUuidFromParam(params['postTitle-postId']);

  const post = posts.find((p) => p.id == postId);

  const metaTitle = `${post?.title} - ${appData.name.app} Blog`;

  return {
    title: metaTitle,
    description: post?.excerpt,
    openGraph: {
      title: metaTitle,
      description: post?.excerpt,
      url: `${HOSTED_BASE_URL.DRONE_SPACE}/resources/blog/${linkify(post?.title || '')}-${post?.id}`,
      type: 'website',
      images: [
        {
          url: images.brand.droneSpace.logo.potrait.meta,
          width: 1200,
          height: 1200,
          alt: appData.name.company,
        },
      ],
    },
  };
};

export default function LayoutPost({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
  params: typeParams;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
