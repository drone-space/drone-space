'use client';

import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@/data/constants';
import { Button, Flex, Grid, GridCol, Stack, Text, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import FormNewsletter from '@/components/form/newsletter';
import LayoutSection from '@/components/layout/section';
import classes from './newsletter.module.scss';
import { images } from '@/assets/images';
import { usePathname } from 'next/navigation';
import { IconFileDownload, IconPhoneCall } from '@tabler/icons-react';
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
      className={classes.section}
      style={{
        backgroundImage: `url('${selectedVariant == 'pri' ? images.backgrounds.cta.newsletter.primary : images.backgrounds.cta.newsletter.secondary}')`,
      }}
    >
      <div className={classes.overlay}></div>

      <Grid py={SECTION_SPACING / 2} pos={'relative'} align="center">
        <GridCol span={{ base: 12, sm: 8 }}>
          <Stack gap={'xl'} w={{ sm: '90%', md: '66%' }}>
            <Stack gap={0} ta={{ base: 'center', sm: 'start' }}>
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

        <GridCol span={{ base: 12, sm: 4 }}>
          <Flex
            direction={{ base: 'column', xs: 'row', sm: 'column' }}
            justify={'center'}
            gap={'md'}
            align={{ base: 'center', sm: 'end' }}
          >
            <ModalDowloadProfile>
              <Button
                leftSection={
                  <IconFileDownload
                    size={ICON_SIZE}
                    stroke={ICON_STROKE_WIDTH}
                  />
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
          </Flex>
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}
