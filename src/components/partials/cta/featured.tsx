import React from 'react';
import LayoutSection from '@/components/layout/section';
import {
  Box,
  Button,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ModalContactShop from '@/components/common/modals/contact/shop';
import Link from 'next/link';
import { linkify } from '@/utilities/formatters/string';
import classes from './featured.module.scss';
import products from '@/data/products';

export default function Featured() {
  const productFeatured = products.find((p: any) => p.featured);

  return (
    productFeatured && (
      <LayoutSection
        id="page-shop-featured"
        containerized={'responsive'}
        bg="linear-gradient(45deg, var(--mantine-color-sec-3) 0%, var(--mantine-color-sec-3) 0%, var(--mantine-color-pri-8) 90%, var(--mantine-color-pri-8) 100%)"
        c={'var(--mantine-color-white)'}
        visibleFrom="md"
        padded={'xl'}
      >
        <Grid align="center" gutter={0}>
          {/* <GridCol span={12}>
          <Group justify="center">
            <Badge color={'sec.3'} c={'pri'}>
              Featured Drone
            </Badge>
          </Group>
        </GridCol> */}

          <GridCol span={{ sm: 4 }}>
            <Stack>
              <div>
                <Text
                  ta={{ base: 'center', sm: 'start' }}
                  component="span"
                  inherit
                  fz={'lg'}
                >
                  &quot;Mini to the Max&quot;
                </Text>

                <Title
                  ta={{ base: 'center', sm: 'start' }}
                  order={2}
                  fz={{ md: '2rem' }}
                  c={'var(--mantine-color-white)'}
                >
                  {productFeatured.title.long}
                </Title>
              </div>

              <Group>
                <ModalContactShop>
                  <Button>Buy Now</Button>
                </ModalContactShop>

                <Button
                  variant="outline"
                  component={Link}
                  href={`/shop/drones/${productFeatured.category}/${linkify(productFeatured.title.long)}`}
                >
                  Learn More
                </Button>
              </Group>
            </Stack>
          </GridCol>

          <GridCol span={{ sm: 8 }}>
            <Group justify={'end'}>
              <Box className={classes.glitchContainer}>
                <Box
                  data-text="Featured Drone"
                  fz={{ sm: '2rem', md: '3rem', lg: '4rem' }}
                  tt={'uppercase'}
                  lts={5}
                  fw={700}
                  // c={'sec.3'}
                  className={classes.glitchText}
                >
                  Featured Drone
                </Box>
              </Box>
            </Group>
          </GridCol>
        </Grid>
      </LayoutSection>
    )
  );
}
