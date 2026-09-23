import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import { LayoutSection } from '@repo/ui';
import { LayoutIntroPage } from '@repo/ui';
import AccordionFaq, { faqs } from '@web/ui/common/accordions/faq';
import { getBaseUrl, SECTION_SPACING } from '@repo/constants';
import { images } from '@repo/constants';
import { LayoutIntroSection } from '@repo/ui';
import { Grid, GridCol } from '@mantine/core';
import { APP_NAME, COMPANY_NAME } from '@repo/constants';

export const dynamic = 'force-static';

const metaTitle = `${APP_NAME.WEB} FAQ - Answers to Your Drone Training Questions`;
const metaDesc =
  'Get quick answers to common questions about drone training, services, and requirements in Kenya. Your guide to Drone Space resources.';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();

  return {
    title: metaTitle,
    description: metaDesc,
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `${baseUrl.WEB}/faq`,
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

export default async function Faq() {
  return (
    <LayoutPage>
      <LayoutIntroPage
        props={{
          path: `Q & A`,
          title: 'Frequently Asked Questions',
          desc: `Need a help with something? Here are our most frequently asked questions.`,
          bg: images.web.hero.light,
        }}
      />

      <LayoutSection id="training" padded bordered>
        <GetLayout
          props={{
            header: (
              <LayoutIntroSection
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

      <LayoutSection id="reselling" padded bordered>
        <GetLayout
          props={{
            header: (
              <LayoutIntroSection
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

      <LayoutSection id="general" padded bordered>
        <GetLayout
          props={{
            header: (
              <LayoutIntroSection
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

      <LayoutSection id="considerations" padded>
        <GetLayout
          props={{
            header: (
              <LayoutIntroSection
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
    <Grid gap={'xl'}>
      <GridCol span={{ md: 4.5 }}>
        <div style={{ position: 'sticky', top: SECTION_SPACING * 1.5 }}>{props.header}</div>
      </GridCol>

      <GridCol span={{ md: 7.5 }}>{children}</GridCol>
    </Grid>
  );
}
