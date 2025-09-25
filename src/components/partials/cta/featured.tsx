import React, { useEffect } from 'react';
import LayoutSection from '@/components/layout/section';
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Grid,
  GridCol,
  Group,
  Overlay,
  Stack,
  Text,
} from '@mantine/core';
import ModalContactShop from '@/components/common/modals/contact/shop';
import Link from 'next/link';
import { linkify } from '@/utilities/formatters/string';
import classes from './featured.module.scss';
import products from '@/data/products';
import { images } from '@/assets/images';
import { IconX } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  SECTION_SPACING,
} from '@/data/constants';
import ImageDefault from '@/components/common/images/default';
import { useCloseAllModals } from '@/hooks/buses/modal';

export default function Featured({ close }: { close?: () => void }) {
  const productFeatured = products.find((p: any) => p.featured);

  if (!productFeatured) return;

  const handleClose = () => {
    if (close) close();
  };

  useCloseAllModals(handleClose);

  return (
    <>
      <LayoutSection
        id={'partial-cta-feat-drone'}
        c={'var(--mantine-color-body)'}
        className={classes.section}
        style={{
          backgroundImage: `url('${images.web.drone}')`,
        }}
      >
        <Overlay backgroundOpacity={0.3} style={{ zIndex: 0 }} />

        <Group justify="end" pt={'xl'}>
          <ActionIcon
            color="var(--mantine-color-white)"
            variant={'subtle'}
            onClick={handleClose}
          >
            <IconX size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          </ActionIcon>
        </Group>

        <Grid
          align={'center'}
          gutter={{ base: 'xl' }}
          // pt={{ base: SECTION_SPACING / 1.5, sm: SECTION_SPACING / 3 }}
          pb={{ base: 'xl', sm: SECTION_SPACING / 3 }}
          style={{ zIndex: 1 }}
        >
          <GridCol span={{ base: 12, sm: 6 }}>
            <Card bg={'var(--mantine-color-body)'}>
              <ImageDefault
                src={productFeatured.images[2]}
                alt={productFeatured.title.short}
                height={{ base: 280 }}
                fit="contain"
                mode="grid"
              />
            </Card>
          </GridCol>

          <GridCol span={{ base: 12, sm: 6 }}>
            <Stack pos={'relative'} gap={'xl'}>
              <Stack gap={'xl'}>
                <Stack ta={{ base: 'center' }}>
                  <Group justify={'center'}>
                    <Badge
                      color="var(--mantine-color-white)"
                      variant={'light'}
                      fw={500}
                      lts={1.5}
                    >
                      Featured Drone
                    </Badge>
                  </Group>

                  <div>
                    <Box className={classes.glitchContainer}>
                      <Box
                        component="h1"
                        data-text={productFeatured.title.long}
                        fz={{
                          base: '1.5rem',
                          lg: '2rem',
                        }}
                        tt={'uppercase'}
                        lts={5}
                        fw={700}
                        // c={'sec.3'}
                        className={classes.glitchText}
                      >
                        {productFeatured.title.long}
                      </Box>
                    </Box>

                    <Text ta={'center'} inherit fz={'lg'}>
                      Mini to the Max
                    </Text>
                  </div>
                </Stack>

                <Group justify={'center'}>
                  <ModalContactShop
                    props={{
                      initialValues: {
                        subject: `${productFeatured.title.short} Purchase Inquiry`,
                        message: `I'd like to order the ${productFeatured.title.long}.`,
                      },
                    }}
                  >
                    <Button color="sec.3">Order Now</Button>
                  </ModalContactShop>

                  <Button
                    variant="outline"
                    color="white"
                    component={Link}
                    href={`/shop/drones/${productFeatured.category}/${linkify(productFeatured.title.long)}#drone-category-intro`}
                    onClick={handleClose}
                  >
                    Learn More
                  </Button>
                </Group>
              </Stack>
            </Stack>
          </GridCol>
        </Grid>
      </LayoutSection>
    </>
  );
}
