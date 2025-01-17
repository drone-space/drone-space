import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
// import IntroPage from '@/components/layout/intro/page';
import ModalContactTraining from '@/components/common/modals/contact/training';
import AccordionFaq from '@/components/common/accordions/faq';
import TooltipWhatsApp from '@/components/common/tooltips/whatsapp';
import { Anchor, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import appData from '@/data/app';
export const metadata: Metadata = { title: 'FAQ' };

export default async function Faq() {
  return (
    <LayoutPage>
      {/* <IntroPage
        props={{
          path: `Q & A`,
          title: 'Frequently Asked Questions',
          desc: `Need a help with something? Here are our most frequently asked questions.`,
        }}
      /> */}

      <LayoutSection
        id="page-help-training"
        padded
        containerized={'sm'}
        shadowed
      >
        <Stack gap={'xl'}>
          <Title ta={'center'} order={2} fz={'xl'} fw={'bold'}>
            Drone Training
          </Title>

          <Text w={{ md: '75%' }} mx={'auto'} ta={'center'} fz={'sm'}>
            For further information, please visit our training section, for
            course prices go to{' '}
            <Anchor component={Link} href="/pricing/training" inherit fw={500}>
              pricing
            </Anchor>{' '}
            and for any other training inquiries, please send us a{' '}
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

      {/* <LayoutSection id='help-faq-purchases' padded containerized={"sm"} shadowed>
				<Stack gap={"xl"}>
					<Title ta={"center"} order={2} fz={"xl"} fw={"bold"}>
						Drone Purchases
					</Title>

					<Text w={{ md: "75%" }} mx={"auto"} ta={"center"} fz={"sm"}>
						To see available drones and drone prices please visit our{" "}
						<Anchor component={Link} href="/shop" inherit fw={500}>
							shop section
						</Anchor>
						, for drone importation or other drone purchase inquiries, please send us a{" "}
						<ModalContactShop>
							<Anchor inherit fw={500}>
								product/purchase inquiry
							</Anchor>
						</ModalContactShop>
						.
					</Text>

					<AccordionFaq section="shop" />
				</Stack>
			</LayoutSection> */}

      <LayoutSection id="help-faq-general" padded containerized={'sm'} shadowed>
        <Stack gap={'xl'}>
          <Title ta={'center'} order={2} fz={'xl'} fw={'bold'}>
            General Questions
          </Title>

          <Text w={{ md: '75%' }} mx={'auto'} ta={'center'} fz={'sm'}>
            For any other questions,{' '}
            <Anchor component={Link} inherit fw={500} href={'/contact'}>
              submit an inquiry
            </Anchor>{' '}
            or{' '}
            <TooltipWhatsApp>
              <Anchor
                inherit
                fw={500}
                href={`${appData.socials.whatsapp.link}`}
                target="_blank"
              >
                start a chat with us
              </Anchor>
            </TooltipWhatsApp>
            .
          </Text>

          <AccordionFaq />
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}
