'use client';

import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@repo/constants/sizes';
import { Button, Flex, Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import classes from './home.module.scss';
import { images } from '@/assets/images';
import { IconFileDownload, IconPhoneCall } from '@tabler/icons-react';
import ModalContactCallback from '@/components/common/modals/contact/callback';
import ModalDownloadDocument from '@/components/common/modals/download/document';

export default function Home({
  params,
}: {
  params?: { title?: string; desc?: string };
}) {
  return (
    <LayoutSection
      id={'partial-cta-newsletter'}
      c={'var(--mantine-color-body)'}
      className={classes.section}
      style={{
        backgroundImage: `url('${images.backgrounds.cta.newsletter.secondary}')`,
      }}
    >
      <div className={classes.overlay}></div>

      <Grid py={SECTION_SPACING / 2} pos={'relative'} align="center">
        <GridCol span={{ base: 12, sm: 8 }}>
          <Stack gap={'xl'}>
            <Stack ta={{ base: 'center', sm: 'start' }}>
              <Title order={2} c={'white'}>
                {params?.title || 'Empowering Drone Professionals in Kenya'}
              </Title>

              <Text inherit>
                {params?.desc ||
                  "Whether you're looking to start a new career or expand your skillset, our Remote Pilot License (RPL) training program is the perfect place to begin your journey. Join us and become a licensed drone operator today!"}
              </Text>
            </Stack>

            {/* <Group>
              <FormNewsletter />
            </Group> */}
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, sm: 4 }}>
          <Flex
            direction={{ base: 'column', xs: 'row', sm: 'column' }}
            justify={'center'}
            gap={'md'}
            align={{ base: 'center', sm: 'end' }}
          >
            <ModalContactCallback>
              <Button
                leftSection={
                  <IconPhoneCall size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                }
                variant="outline"
                color="white"
              >
                Request Callback
              </Button>
            </ModalContactCallback>

            <ModalDownloadDocument props={{ type: 'brochure' }}>
              <Button
                leftSection={
                  <IconFileDownload
                    size={ICON_SIZE}
                    stroke={ICON_STROKE_WIDTH}
                  />
                }
                variant="white"
              >
                Download Brochure
              </Button>
            </ModalDownloadDocument>
          </Flex>
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}
