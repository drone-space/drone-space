import React from 'react';
import LayoutBody from '@/components/layout/body';

export interface typeParams {
  'postTitle-postId': string;
  categoryId: string;
  tagId: string;
}

export default function LayoutBlog({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
