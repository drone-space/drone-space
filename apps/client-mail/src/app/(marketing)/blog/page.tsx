import React from 'react';
import { Grid, GridCol } from '@mantine/core';
import LayoutPage from '@repo/components/layout/page';
import LayoutSection from '@repo/components/layout/section';
import CardBlogNew from '@/components/common/cards/blog/new';
import CardBlogMain from '@/components/common/cards/blog/main';
import IntroPage from '@repo/components/layout/intros/page';
import { postsGet } from '@repo/handlers/requests/database/posts';
import { PostRelations } from '@repo/types/models/post';
import { Metadata } from 'next';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { images } from '@/assets/images';
import { appName, companyName } from '@repo/constants/app';
import CtaHome from '@/components/partial/cta/home';

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
    url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/blog`,
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
  const { items: posts }: { items: PostRelations[] } = await postsGet();
  if (posts == null) throw new Error('Posts not found');

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'News',
          title: 'Insights on Drone Training & Technology',
          desc: `Stay informed with the latest tips, news, and insights about drone training, services, and industry innovations.`,
          bg: images.web.hero.light,
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

      <CtaHome
        params={{
          title: 'Get the latest updates',
          desc: 'Subscribe to get the most-popular content on drone products, drone training, drone services, and top drone industry news to help keep you up to speed.',
        }}
      />
    </LayoutPage>
  );
}
