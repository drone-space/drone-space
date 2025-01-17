import React from 'react';

import { Metadata } from 'next';

import { Anchor, Grid, GridCol, Stack, Text, Title } from '@mantine/core';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardPricingBasic from '@/components/common/cards/pricing/basic';
import AccordionFaq from '@/components/common/accordions/faq';
import ModalContactTraining from '@/components/common/modals/contact/training';

import courses from '@/data/courses';

export const metadata: Metadata = {
  title: 'Pricing',
};

export default async function Gallery() {
  return (
    <LayoutPage>
      <LayoutSection id="pricing-training-basic" padded bordered>
        <Grid>
          {courses.basic.units.map((course) => (
            <GridCol key={course.title.full} span={{ sm: 6, md: 4 }}>
              <CardPricingBasic data={course} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection id="pricing-training-advanced" padded shadowed>
        <Grid>
          {courses.advanced.units.map((course) => (
            <GridCol key={course.title.full} span={{ sm: 6, lg: 4 }}>
              <CardPricingBasic
                data={course}
                offset={course.title.short == 'RadTel'}
              />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection id="pricing-training-faq" padded containerized={'sm'}>
        <Stack gap={'xl'}>
          <Title ta={'center'} order={2} fz={'xl'} fw={'bold'}>
            Frequently Asked Questions
          </Title>

          <Text w={{ md: '75%' }} mx={'auto'} ta={'center'} fz={'sm'}>
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
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}
