import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import { Metadata } from 'next';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { images } from '@repo/constants/images';
import { APP_NAME, COMPANY_NAME } from '@repo/constants/app';
import PartialPageBlog from '@/components/partial/page/blog';

export const dynamic = 'force-static';
export const revalidate = 3600;

const metaTitle = `${APP_NAME.WEB} Blog - Insights on Drone Training & Technology`;
const metaDesc = `Stay informed with the latest tips, news, and insights about drone training, services, and industry innovations on the ${APP_NAME.WEB} blog.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/blog`,
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

export default async function Blog() {
  return (
    <LayoutPage>
      <PartialPageBlog />
    </LayoutPage>
  );
}
