import React from 'react';

import { Grid, GridCol } from '@mantine/core';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardBlogNew from '@/components/common/cards/blog/new';
import CardBlogMain from '@/components/common/cards/blog/main';
import IntroPage from '@/components/layout/intros/page';
import { postsGet } from '@/services/database/posts';
import { PostRelations } from '@/types/models/post';
import { Metadata } from 'next';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import { appName, companyName } from '@/data/app';

export const dynamic = 'force-static';
export const revalidate = 3600;

const metaTitle = `${appName} Blog - Insights on Drone Training & Technology`;
const metaDesc = `Stay informed with the latest tips, news, and insights about drone training, services, and industry innovations on the ${appName} blog.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DEFAULT}/blog`,
    type: 'website',
    images: [
      {
        url: images.brand.droneSpace.logo.potrait.meta,
        width: 1200,
        height: 1200,
        alt: companyName,
      },
    ],
  },
};

export default async function Blog() {
  const payload: null | { data: PostRelations[] } = await postsGet();
  if (payload == null) throw new Error('Posts not found');

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'News',
          title: 'Insights on Drone Training & Technology',
          desc: `Stay informed with the latest tips, news, and insights about drone training, services, and industry innovations.`,
          bg: images.web.hero,
        }}
      />

      <LayoutSection
        id={'page-blog-grid'}
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid gutter={'xl'}>
          <GridCol span={12} mx={{ lg: 'auto' }} visibleFrom="md">
            <CardBlogNew post={payload.data[0]} />
          </GridCol>

          <GridCol span={{ base: 12, xs: 6 }} hiddenFrom="md">
            <CardBlogMain post={payload.data[0]} />
          </GridCol>

          {payload.data.map(
            (post, index) =>
              payload.data.indexOf(post) != 0 && (
                <GridCol key={index} span={{ base: 12, xs: 6, md: 4, xl: 3 }}>
                  <CardBlogMain post={post} />
                </GridCol>
              )
          )}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
