'use client';

import {
  FONT,
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@/data/constants';
import { Button, Group, Stack, Text, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import FormNewsletter from '@/components/form/newsletter';
import LayoutSection from '@/components/layout/section';
import classes from './newsletter.module.scss';
import { images } from '@/assets/images';
import { usePathname } from 'next/navigation';
import { IconExternalLink, IconPhoneCall } from '@tabler/icons-react';
import ModalContactCallback from '@/components/common/modals/contact/callback';
import ModalDowloadProfile from '@/components/common/modals/download/profile';

export default function Newsletter() {
  const pathname = usePathname();

  const [selectedVariant, setSelectedVariant] = useState<
    'pri' | 'sec' | undefined
  >(undefined);

  useEffect(() => {
    // Randomly choose between two values
    const randomChoice = Math.random() < 0.5 ? 'pri' : 'sec';
    setSelectedVariant(randomChoice);
  }, [pathname]); // This ensures the random value is set on mount

  return (
    <LayoutSection
      id={'partial-cta-newsletter'}
      c={'var(--mantine-color-body)'}
      containerized="sm"
      className={classes.section}
      style={{
        backgroundImage: `url('${selectedVariant == 'pri' ? images.backgrounds.cta.newsletter.primary : images.backgrounds.cta.newsletter.secondary}')`,
      }}
    >
      <div className={classes.overlay}></div>

      <Stack gap={'xl'} py={SECTION_SPACING} pos={'relative'}>
        <Stack>
          <Title order={2} fz={FONT.CTA_TITLE} ta={'center'} c={'white'}>
            Join Our Community!
          </Title>

          <Text fz={'xl'} ta={'center'}>
            Subscribe to our monthly newsletter to receive the latest drone
            industry news, helpful tips, and exclusive offers from us
          </Text>
        </Stack>

        <FormNewsletter />

        <Group justify="center">
          <ModalDowloadProfile>
            <Button
              leftSection={
                <IconExternalLink size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
              }
              variant="white"
            >
              Company Profile
            </Button>
          </ModalDowloadProfile>

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
        </Group>
      </Stack>
    </LayoutSection>
  );
}
