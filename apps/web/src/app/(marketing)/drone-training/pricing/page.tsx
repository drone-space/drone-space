import React from 'react';
import { Metadata } from 'next';
import { Grid, GridCol } from '@mantine/core';
import { LayoutIntroSection } from '@repo/ui';
import { LayoutPage } from '@repo/ui';
import { LayoutSection } from '@repo/ui';
import CardPricingBasic from '@web/ui/common/cards/pricing/basic';
import AccordionFaq from '@web/ui/common/accordions/faq';
import { LayoutIntroPage } from '@repo/ui';
import { courseList, courses, getBaseUrl } from '@repo/constants';
import { images } from '@repo/constants';
import { GetLayout } from '../../faq/page';
import { APP_NAME, COMPANY_NAME } from '@repo/constants';
import CtaMain from '@web/ui/partial/cta/main';

export const dynamic = 'force-static';
// export const revalidate = 3600;

const metaTitle = `Drone Training Pricing - Affordable Courses at ${APP_NAME.WEB} Kenya`;
const metaDesc = `View pricing for our professional drone training programs. Flexible packages for beginners, enthusiasts, and professionals.`;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();

  return {
    title: metaTitle,
    description: metaDesc,
    metadataBase: new URL(baseUrl.WEB),
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `${baseUrl.WEB}/drone-training/pricing`,
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

export default async function Pricing() {
  return (
    <LayoutPage>
      <LayoutIntroPage
        props={{
          path: 'Pricing',
          title: 'Course Pricing',
          desc: metaDesc,
          bg: images.web.hero.light,
        }}
      />

      <LayoutSection id="pricing-training-basic" padded bg={'var(--mantine-color-gray-1)'}>
        <Grid>
          {courses.basic.units.map(
            (course, index) =>
              !course.subUnit && (
                <GridCol key={index} span={{ sm: 6 }}>
                  <CardPricingBasic data={course} />
                </GridCol>
              ),
          )}
        </Grid>
      </LayoutSection>

      <LayoutSection id="pricing-training-advanced" padded>
        <Grid>
          {courses.advanced.units.map((course, index) => (
            <GridCol key={index} span={{ sm: 6 }}>
              <CardPricingBasic data={course} offset={course.title.short == 'RadTel'} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection id="pricing-training-faq" padded bg={'var(--mantine-color-gray-1)'}>
        <GetLayout
          props={{
            header: (
              <LayoutIntroSection
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
