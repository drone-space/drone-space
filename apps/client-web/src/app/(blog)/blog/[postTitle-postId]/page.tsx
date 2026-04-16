import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import { typeParams } from '../layout';
import { PostRelations } from '@repo/types/models/post';
import { extractUuidFromParam } from '@repo/utilities/url';
import { redirect } from 'next/navigation';
import { linkify } from '@repo/utilities/url';
import { postsGet } from '@repo/handlers/requests/database/posts';
import PartialPageBlogDetail from '@/components/partial/page/blog-detail';

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

  return (
    <LayoutPage>
      <PartialPageBlogDetail props={{ postId }} />
    </LayoutPage>
  );
}
