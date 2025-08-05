import React from 'react';
import LayoutBody from '@/components/layout/body';
import { Metadata } from 'next';
import { appName } from '@/data/app';

export interface typeParams {
  'postTitle-postId': string;
  categoryId: string;
  tagId: string;
}

export const metadata: Metadata = {
  title: { default: 'Blog', template: `%s - Blog - ${appName}` },
};

export default function LayoutBlog({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
