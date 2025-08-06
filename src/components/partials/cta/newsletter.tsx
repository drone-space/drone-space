'use client';

import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@/data/constants';
import { ActionIcon, Button, Group, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import FormNewsletter from '@/components/form/newsletter';
import LayoutSection from '@/components/layout/section';
import classes from './newsletter.module.scss';
import { images } from '@/assets/images';
import { IconFileDownload, IconX } from '@tabler/icons-react';
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
      <Group className={classes.overlay} align={'start'} justify="end" p={'lg'}>
        <ActionIcon color={'white'} variant={'subtle'} onClick={close}>
          <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
        </ActionIcon>
      </Group>

      <Stack py={SECTION_SPACING / 2} pos={'relative'} gap={'xl'}>
        <Stack gap={'xl'}>
          <Stack ta={{ base: 'center' }}>
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

        <Group justify="center">
          <ModalDownloadDocument props={{ type: 'brochure' }}>
            <Button
              leftSection={
                <IconFileDownload size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
              variant="white"
            >
              Download Brochure
            </Button>
          </ModalDownloadDocument>
        </Group>
      </Stack>
    </LayoutSection>
  );
}
