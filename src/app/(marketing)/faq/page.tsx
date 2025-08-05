import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import IntroPage from '@/components/layout/intros/page';
import AccordionFaq, { faqs } from '@/components/common/accordions/faq';
import { HOSTED_BASE_URL, SECTION_SPACING } from '@/data/constants';
import { images } from '@/assets/images';
import IntroSection from '@/components/layout/intros/section';
import { Grid, GridCol } from '@mantine/core';
import { appName, companyName } from '@/data/app';

export const dynamic = 'force-static';

const metaTitle = `${appName} FAQ - Answers to Your Drone Training Questions`;
const metaDesc =
  'Get quick answers to common questions about drone training, services, and requirements in Kenya. Your guide to Drone Space resources.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DEFAULT}/faq`,
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

export default async function Faq() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: `Q & A`,
          title: 'Frequently Asked Questions',
          desc: `Need a help with something? Here are our most frequently asked questions.`,
          bg: images.gallery.innovation.jamuhuri.yr2020.image9,
        }}
      />

      <LayoutSection id="training" padded bg={'var(--mantine-color-gray-1)'}>
        <GetLayout
          props={{
            header: (
              <IntroSection
                props={{
                  subTitle: 'FAQ',
                  title: faqs.training.title,
                  desc: `For further information, please visit our training section, for course
          prices go to pricing and for any other training inquiries, please send us a training inquiry.`,
                }}
                options={{ alignment: 'start' }}
              />
            ),
          }}
        >
          <AccordionFaq section="training" />
        </GetLayout>
      </LayoutSection>

      <LayoutSection id="reselling" padded>
        <GetLayout
          props={{
            header: (
              <IntroSection
                props={{
                  subTitle: 'FAQ',
                  title: faqs.shop.title,
                  desc: `To see available drones and drone prices please visit our shop section, for drone importation or other drone purchase inquiries, please send us a product/purchase inquiry.`,
                }}
                options={{ alignment: 'start' }}
              />
            ),
          }}
        >
          <AccordionFaq section="shop" />
        </GetLayout>
      </LayoutSection>

      <LayoutSection id="general" padded bg={'var(--mantine-color-gray-1'}>
        <GetLayout
          props={{
            header: (
              <IntroSection
                props={{
                  subTitle: 'FAQ',
                  title: faqs.general.title,
                  desc: `For any other questions, submit an inquiry or start a chat with us.`,
                }}
                options={{ alignment: 'start' }}
              />
            ),
          }}
        >
          <AccordionFaq />
        </GetLayout>
      </LayoutSection>

      <LayoutSection id="considerations" padded shadowed>
        <GetLayout
          props={{
            header: (
              <IntroSection
                props={{
                  subTitle: 'FAQ',
                  title: faqs.considerations.title,
                  desc: `The factors to consider and potential risks involved.`,
                }}
                options={{ alignment: 'start' }}
              />
            ),
          }}
        >
          <AccordionFaq section="considerations" />
        </GetLayout>
      </LayoutSection>
    </LayoutPage>
  );
}

export function GetLayout({
  props,
  children,
}: {
  props: { header: React.ReactNode };
  children: React.ReactNode;
}) {
  return (
    <Grid gutter={'xl'}>
      <GridCol span={{ md: 4.5 }}>
        <div style={{ position: 'sticky', top: SECTION_SPACING }}>
          {props.header}
        </div>
      </GridCol>

      <GridCol span={{ md: 7.5 }}>{children}</GridCol>
    </Grid>
  );
}
