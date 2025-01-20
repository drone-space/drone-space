import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import { typeParams } from '../layout';
import { PostRelations } from '@/types/models/post';
import { postsGet } from '@/handlers/requests/database/post';
import { extractUuidFromParam } from '@/utilities/helpers/string';
import appData from '@/data/app';

export const generateMetadata = async ({
  params,
}: {
  params: typeParams;
}): Promise<Metadata> => {
  const { posts }: { posts: PostRelations[] } = await postsGet();

  const postId = extractUuidFromParam(params['postTitle-postId']);

  const post = posts.find((p) => p.id == postId);

  return {
    title: `${post?.title} - ${appData.name.app} Blog`,
    description: post?.excerpt,
    category: post?.category?.title,
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
