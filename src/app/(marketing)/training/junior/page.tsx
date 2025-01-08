import React from 'react';

import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import {
  Anchor,
  Divider,
  Grid,
  GridCol,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ModalContactTraining from '@/components/common/modals/contact/training';
import AccordionFaq from '@/components/common/accordions/faq';
import NextImage from 'next/image';
// import CtaTraining from '@/components/partial/cta/training';
import { images } from '@/assets/images';

export const metadata: Metadata = { title: 'Junior Training' };

export default async function Junior() {
  return (
    <LayoutPage>
      <LayoutSection
        id="junior-intro"
        bordered
        padded
        containerized={'responsive'}
      >
        <Grid gutter={{ base: 32, md: 64 }}>
          <GridCol span={{ sm: 6, lg: 7 }}>
            <Stack>
              <Title order={2} fz={{ sm: 'xl', md: 24 }} fw={'bold'}>
                Junior Holiday Camp
              </Title>

              <Text fz={{ sm: 'sm', lg: 'md' }}>
                The U-18s Holiday Camp is a drone STEM program designed for
                kids, teens, and high school students between the ages of 7 and
                17. The program is organized during school holidays to introduce
                young people to the emerging technology of drones and inspire
                their interest in science, technology, engineering, and
                mathematics (STEM) subjects. This program is suitable for young
                people who are curious about drones and want to learn about
                their applications and operations in a fun and safe environment.
              </Text>
              <Text fz={{ sm: 'sm', lg: 'md' }}>
                By participating in this program, students will learn the basics
                of drone operation, including flight controls, aerial maneuvers,
                and safety procedures. They will also learn about the various
                applications of drones in different industries and participate
                in drone-related challenges and competitions. This program aims
                to inspire young people&apos;s interest in STEM and encourage
                them to consider careers in technology and innovation.
              </Text>
            </Stack>
          </GridCol>
          <GridCol span={{ sm: 6, lg: 5 }}>
            <Stack>
              <Image
                src={images.training.holCam}
                alt={'Gallery Image'}
                loading="lazy"
                radius={'sm'}
                component={NextImage}
                width={1920}
                height={1080}
              />
            </Stack>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="junior-faq"
        padded
        shadowed
        containerized={'responsive'}
        bg={
          'light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-1))'
        }
      >
        <Stack gap={'xl'}>
          <Title ta={'center'} order={2} fw={'bold'}>
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

          <Grid gutter={{ base: 32, md: 'md' }}>
            <GridCol span={{ base: 12, md: 6 }}>
              <AccordionFaq section="training" />
            </GridCol>
            <GridCol span={{ base: 12 }} hiddenFrom="md">
              <Divider />
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <AccordionFaq />
            </GridCol>
          </Grid>
        </Stack>
      </LayoutSection>

      {/* <CtaTraining data={{ type: 'junior' }} /> */}
    </LayoutPage>
  );
}
