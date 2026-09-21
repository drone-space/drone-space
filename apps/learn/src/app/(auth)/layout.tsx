import React from 'react';
import LayoutMain from '@repo/ui/layout/main';

export default async function LayoutAuth({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutMain>
      <main>{children}</main>
    </LayoutMain>
  );
}
