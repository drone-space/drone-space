import React from 'react';
import { Metadata } from 'next';
import { Grid, GridCol } from '@mantine/core';
import IntroSection from '@repo/components/layout/intros/section';
import LayoutPage from '@repo/components/layout/page';
import LayoutSection from '@repo/components/layout/section';
import CardPricingBasic from '@/components/common/cards/pricing/basic';
import AccordionFaq from '@/components/common/accordions/faq';
import IntroPage from '@repo/components/layout/intros/page';
import { courseList, courses } from '@repo/constants/courses';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { images } from '@repo/constants/images';
import { GetLayout } from '../../faq/page';
import { APP_NAME, COMPANY_NAME } from '@repo/constants/app';
import CtaMain from '@/components/partial/cta/main';

export const dynamic = 'force-static';
// export const revalidate = 3600;

const metaTitle = `Drone Training Pricing - Affordable Courses at ${APP_NAME.WEB} Kenya`;
const metaDesc = `View pricing for our professional drone training programs. Flexible packages for beginners, enthusiasts, and professionals.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/drone-training/pricing`,
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

export default async function Pricing() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Pricing',
          title: 'Course Pricing',
          desc: metaDesc,
          bg: images.web.hero.light,
        }}
      />

      <LayoutSection
        id="pricing-training-basic"
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid>
          {courses.basic.units.map(
            (course, index) =>
              !course.subUnit && (
                <GridCol key={index} span={{ sm: 6 }}>
                  <CardPricingBasic data={course} />
                </GridCol>
              )
          )}
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

      <CtaMain
        props={{
          title: 'Flexible Training Packages for Every Goal',
          desc: "We offer competitive and transparent pricing tailored to your career path. Whether you're starting out or advancing your expertise, choose from a range of packages designed to deliver maximum value and professional growth. Invest in your future with confidence.",
          options: { callback: true },
        }}
      />
    </LayoutPage>
  );
}
