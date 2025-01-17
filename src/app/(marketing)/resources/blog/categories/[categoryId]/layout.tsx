import React from 'react';

import { Metadata } from 'next';

import LayoutBody from '@/components/layout/body';

import { typeParams } from '../../layout';
import { categoriesGet } from '@/handlers/requests/database/category';
import { CategoryGet } from '@/types/models/category';

export const generateMetadata = async ({
  params,
}: {
  params: typeParams;
}): Promise<Metadata> => {
  const { categories }: { categories: CategoryGet[] } = await categoriesGet();
  const category = categories.find((p) => p.id == params.categoryId);

  return {
    title: `${category?.title} - Blog Categories - Explore Drone Topics at Drone Space`,
    description: `Explore ${category?.title} topics on Drone Blog. Stay updated with the latest news and updates in drone training.`,
  };
};

export default function LayoutCategory({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
