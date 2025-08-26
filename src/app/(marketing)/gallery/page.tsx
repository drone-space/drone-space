import React from 'react';

import { Metadata } from 'next';

import {
  Grid,
  GridCol,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
} from '@mantine/core';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import PartialGallery from '@/components/partials/gallery';
import tabs from '@/data/tabs';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import IntroPage from '@/components/layout/intros/page';
import { appName, companyName } from '@/data/app';

export const dynamic = 'force-static';

const metaTitle = `${appName} Gallery - Showcasing Our Training & Aerial Services`;
const metaDesc =
  'Explore stunning visuals from our drone training programs, aerial light shows, and other services. See Drone Space in action!';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DEFAULT}/gallery`,
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

export default async function Gallery() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Photos',
          title: 'Drone Space Gallery',
          desc: `Explore stunning visuals from our drone training graduations, aerial light shows, and other services.`,
          bg: images.web.hero.light,
        }}
      />

      <LayoutSection
        id="page-gallery"
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <Tabs defaultValue={'conference'}>
          <Grid component={TabsList} grow mb={'xl'} justify="center" gutter={0}>
            <GridCol span={{ base: 6, xs: 4, sm: 'auto' }}>
              <TabsTab w={'100%'} value="conference">
                Conference
              </TabsTab>
            </GridCol>
            <GridCol span={{ base: 6, xs: 4, sm: 'auto' }}>
              <TabsTab w={'100%'} value="expo">
                Expo
              </TabsTab>
            </GridCol>
            <GridCol span={{ base: 6, xs: 4, sm: 'auto' }}>
              <TabsTab w={'100%'} value="hackathon">
                Hackathon
              </TabsTab>
            </GridCol>
            <GridCol span={{ base: 6, xs: 4, sm: 'auto' }}>
              <TabsTab w={'100%'} value="graduation">
                Graduation
              </TabsTab>
            </GridCol>
            <GridCol span={{ base: 6, xs: 4, sm: 'auto' }}>
              <TabsTab w={'100%'} value="innovation">
                Innovation
              </TabsTab>
            </GridCol>
            <GridCol span={{ base: 6, xs: 4, sm: 'auto' }}>
              <TabsTab w={'100%'} value="projects">
                Projects
              </TabsTab>
            </GridCol>
            <GridCol span={{ base: 6, xs: 4, sm: 'auto' }}>
              <TabsTab w={'100%'} value="airfield">
                Airfield
              </TabsTab>
            </GridCol>
          </Grid>

          <TabsPanel value="conference">
            <PartialGallery
              props={{
                list: tabs.gallery.conference.yr2024.map((i) => {
                  return { image: i };
                }),
              }}
            />
          </TabsPanel>

          <TabsPanel value="expo">
            <PartialGallery
              props={{
                list: tabs.gallery.expo.yr2024.map((i) => {
                  return { image: i };
                }),
              }}
            />
          </TabsPanel>

          <TabsPanel value="hackathon">
            <PartialGallery
              props={{
                list: tabs.gallery.hackathon.yr2024.map((i) => {
                  return { image: i };
                }),
              }}
            />
          </TabsPanel>

          <TabsPanel value="graduation">
            <PartialGallery
              props={{
                list: tabs.gallery.graduation.yr2022.map((i) => {
                  return { image: i };
                }),
              }}
            />
          </TabsPanel>

          <TabsPanel value="innovation">
            <PartialGallery
              props={{
                list: tabs.gallery.innovation.jamuhuri.map((i) => {
                  return { image: i };
                }),
              }}
            />
          </TabsPanel>

          <TabsPanel value="projects">
            <PartialGallery
              props={{
                list: tabs.gallery.projects.project.map((i) => {
                  return { image: i };
                }),
              }}
            />
          </TabsPanel>

          <TabsPanel value="airfield">
            <PartialGallery
              props={{
                list: tabs.gallery.airfield.map((i) => {
                  return { image: i };
                }),
              }}
            />
          </TabsPanel>
        </Tabs>
      </LayoutSection>
    </LayoutPage>
  );
}
