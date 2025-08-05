'use client';

import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@/data/constants';
import {
  ActionIcon,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import React from 'react';
import FormNewsletter from '@/components/form/newsletter';
import LayoutSection from '@/components/layout/section';
import classes from './newsletter.module.scss';
import { images } from '@/assets/images';
import { IconFileDownload, IconPhoneCall, IconX } from '@tabler/icons-react';
import ModalContactCallback from '@/components/common/modals/contact/callback';
import ModalDownloadDocument from '@/components/common/modals/download/document';

export default function Newsletter({ close }: { close?: () => void }) {
  return (
    <LayoutSection
      id={'partial-cta-newsletter'}
      c={'var(--mantine-color-body)'}
      className={classes.section}
      style={{
        backgroundImage: `url('${images.web.newsletter}')`,
      }}
    >
      <Group className={classes.overlay} align={'start'} justify="end" p={'sm'}>
        <ActionIcon color={'white'} variant={'subtle'} onClick={close}>
          <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
        </ActionIcon>
      </Group>

      <Grid py={SECTION_SPACING / 2} pos={'relative'} align="center">
        <GridCol span={{ base: 12 }}>
          <Stack gap={'xl'}>
            <Stack gap={0} ta={{ base: 'center' }}>
              <Title order={2} c={'white'}>
                Join Our Community!
              </Title>

              <Text inherit>
                Subscribe to our monthly newsletter to receive the latest drone
                industry news, helpful tips, and exclusive offers from us
              </Text>
            </Stack>

            <FormNewsletter />
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12 }}>
          <Flex
            direction={{ base: 'column', xs: 'row' }}
            justify={'center'}
            gap={'md'}
            align={{ base: 'center' }}
            mt={'xl'}
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
