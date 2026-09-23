import React from 'react';
import { LayoutPage } from '@repo/ui';
import { typeParams } from '../layout';
import { PostRelations } from '@repo/types';
import { extractUuidFromParam } from '@repo/utils';
import { redirect } from 'next/navigation';
import { linkify } from '@repo/utils';
import { postsGet } from '@repo/handlers';
import PartialPageBlogDetail from '@web/ui/partial/page/blog-detail';
import { getApiUrl } from '@repo/constants';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
  const { items: posts }: { items: PostRelations[] } = await postsGet({
    apiUrl: await getApiUrl(),
  });

  if (posts == null) return [];

  return posts.map((p: any) => ({
    'postTitle-postId': `${linkify(p.title)}-${p.id}`,
  }));
}

export default async function Post({ params }: { params: Promise<typeParams> }) {
  const postId = extractUuidFromParam((await params)['postTitle-postId']);

  if (!postId) redirect('/not-found');

  return (
    <LayoutPage>
      <PartialPageBlogDetail props={{ postId }} />
    </LayoutPage>
  );
}
