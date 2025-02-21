import React from 'react';

import { Metadata } from 'next';

import { Anchor, Grid, GridCol, Text, Title } from '@mantine/core';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardPricingBasic from '@/components/common/cards/pricing/basic';
import AccordionFaq from '@/components/common/accordions/faq';
import ModalContactTraining from '@/components/common/modals/contact/training';

import courses from '@/data/courses';
import appData from '@/data/app';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';

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
      <LayoutSection id="pricing-training-basic" padded bordered>
        <Grid>
          {courses.basic.units.map((course, index) => (
            <GridCol key={index} span={{ sm: 6, md: 4 }}>
              <CardPricingBasic data={course} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection id="pricing-training-advanced" padded shadowed>
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

      <LayoutSection id="pricing-training-faq" padded containerized={'sm'}>
        <Title ta={'center'} order={2} fz={'xl'} fw={'bold'}>
          Frequently Asked Questions
        </Title>

        <Text w={{ md: '75%' }} mx={'auto'} ta={'center'} fz={'sm'} my={'xl'}>
          For further information, please visit our training section, and for
          any other training inquiries, please send us a{' '}
          <ModalContactTraining>
            <Anchor inherit fw={500}>
              training inquiry
            </Anchor>
          </ModalContactTraining>
          .
        </Text>

        <AccordionFaq section="training" />
      </LayoutSection>
    </LayoutPage>
  );
}
