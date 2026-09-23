import React from 'react';
import { LayoutPage } from '@repo/ui';
import { Metadata } from 'next';
import { getApiUrl, getBaseUrl, images } from '@repo/constants';
import { APP_NAME, COMPANY_NAME } from '@repo/constants';
import PartialPageBlog from '@web/ui/partial/page/blog';
import { PostGet } from '@repo/types';
import { postsGet } from '@repo/handlers';

export const dynamic = 'force-static';
export const revalidate = 3600;

const metaTitle = `${APP_NAME.WEB} Blog - Insights on Drone Training & Technology`;
const metaDesc = `Stay informed with the latest tips, news, and insights about drone training, services, and industry innovations on the ${APP_NAME.WEB} blog.`;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();

  return {
    title: metaTitle,
    description: metaDesc,
    metadataBase: new URL(baseUrl.WEB),
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `${baseUrl.WEB}/blog`,
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
}

export default async function Blog() {
  const { items }: { items: PostGet[] } = await postsGet({ apiUrl: await getApiUrl() });

  return (
    <LayoutPage>
      <PartialPageBlog posts={items} />
    </LayoutPage>
  );
}
