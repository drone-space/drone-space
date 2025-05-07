import React from 'react';

import { Grid, GridCol } from '@mantine/core';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardBlogNew from '@/components/common/cards/blog/new';
import CardBlogMain from '@/components/common/cards/blog/main';
import IntroPage from '@/components/layout/intro/page';

import { postsGet } from '@/handlers/requests/database/post';
import { PostRelations } from '@/types/models/post';
import appData from '@/data/app';
import { Metadata } from 'next';
import { HOSTED_BASE_URL, REVALIDATE } from '@/data/constants';
import { images } from '@/assets/images';

export const dynamic = 'force-dynamic';
export const revalidate = REVALIDATE.WEEK;

const metaTitle = `${appData.name.app} Blog - Insights on Drone Training & Technology`;
const metaDesc = `Stay informed with the latest tips, news, and insights about drone training, services, and industry innovations on the ${appData.name.app} blog.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DRONE_SPACE}/resources/blog`,
    type: 'website',
    images: [
      {
        url: images.brand.droneSpace.logo.potrait.meta,
        width: 1200,
        height: 1200,
        alt: appData.name.company,
      },
    ],
  },
};

export default async function Blog() {
  const { posts }: { posts: PostRelations[] } = await postsGet();

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'News',
          title: 'Insights on Drone Training & Technology',
          desc: `Stay informed with the latest tips, news, and insights about drone training, services, and industry innovations.`,
          bg: images.gallery.innovation.jamuhuri.yr2020.image9,
        }}
      />

      <LayoutSection
        id={'page-blog-grid'}
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid gutter={'xl'}>
          <GridCol span={12} mx={{ lg: 'auto' }} visibleFrom="md">
            <CardBlogNew post={posts[0]} />
          </GridCol>

          <GridCol span={{ base: 12, xs: 6 }} hiddenFrom="md">
            <CardBlogMain post={posts[0]} />
          </GridCol>

          {posts.map(
            (post, index) =>
              posts.indexOf(post) != 0 && (
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
