import React from 'react';
import { Metadata } from 'next';
import { Grid, GridCol } from '@mantine/core';
import IntroSection from '@/components/layout/intro/section';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardPricingBasic from '@/components/common/cards/pricing/basic';
import AccordionFaq from '@/components/common/accordions/faq';
import IntroPage from '@/components/layout/intro/page';
import courses from '@/data/courses';
import appData from '@/data/app';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import { GetLayout } from '../../resources/faq/page';

const metaTitle = `Drone Training Pricing - Affordable Courses at ${appData.name.app} Kenya`;
const metaDesc = `View pricing for our professional drone training programs. Flexible packages for beginners, enthusiasts, and professionals.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DRONE_SPACE}/drone-training/pricing`,
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

export default async function Pricing() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Pricing',
          title: 'Course Pricing',
          desc: metaDesc,
        }}
      />

      <LayoutSection
        id="pricing-training-basic"
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid>
          {courses.basic.units.map((course, index) => (
            <GridCol key={index} span={{ sm: 6, md: 4 }}>
              <CardPricingBasic data={course} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection id="pricing-training-advanced" padded>
        <Grid>
          {courses.advanced.units.map((course, index) => (
            <GridCol key={index} span={{ sm: 6 }}>
              <CardPricingBasic
                data={course}
                offset={course.title.short == 'RadTel'}
              />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="pricing-training-faq"
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <GetLayout
          props={{
            header: (
              <IntroSection
                props={{
                  subTitle: `FAQ's`,
                  title: `Frequently Asked Questions`,
                  desc: `For further information, please visit our training section, and for any other training inquiries, please send us a training inquiry.`,
                }}
                options={{ alignment: 'start' }}
              />
            ),
          }}
        >
          <AccordionFaq section="training" />
        </GetLayout>
      </LayoutSection>
    </LayoutPage>
  );
}
