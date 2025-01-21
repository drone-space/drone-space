import React from 'react';
import Link from 'next/link';
import { Stack, Text, Button, Flex, Title, Grid, GridCol } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import categories from '@/data/categories';
import { linkify } from '@/utilities/formatters/string';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';

export default function Categories() {
  return (
    <LayoutSection
      id="cta-shop-categories"
      shadowed
      padded
      containerized={'responsive'}
      bg={
        'light-dark(var(--mantine-color-pri-light), var(--mantine-color-pri-light))'
      }
    >
      <Grid align="center" gutter={32}>
        <GridCol span={{ md: 5 }}>
          <Stack gap={'xs'}>
            <Title ta={{ base: 'center', md: 'start' }} order={2}>
              Discover More Drones
            </Title>
            <Text ta={{ base: 'center', md: 'start' }}>
              Browse though our catalogue to see more of what we offer!
            </Text>
          </Stack>
        </GridCol>
        <GridCol span={{ md: 7 }}>
          <Flex direction={'column'} align={{ base: 'center', md: 'end' }}>
            <Grid>
              {categories.map((category, index) => (
                <GridCol key={index} span={{ base: 12, xs: 4 }}>
                  <Button
                    fullWidth
                    mih={{ xs: 120 }}
                    miw={{ xs: 180 }}
                    component={Link}
                    href={`/shop/drones/${linkify(category.label)}`}
                  >
                    <Flex
                      direction={{ base: 'row', xs: 'column' }}
                      gap={'md'}
                      align="center"
                    >
                      <category.icon
                        size={ICON_SIZE * 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                      <Text component="span" inherit ta={'center'}>
                        {category.label} Drones
                      </Text>
                    </Flex>
                  </Button>
                </GridCol>
              ))}
            </Grid>
          </Flex>
        </GridCol>
      </Grid>
    </LayoutSection>
  );
}
