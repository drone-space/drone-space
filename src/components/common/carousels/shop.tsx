'use client';

import React from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import LayoutSection from '@/components/layout/section';
import classes from './shop.module.scss';
import { shopLinks } from '@/data/links';
import { SECTION_SPACING } from '@/data/constants';
import MoadlContactShop from '../modals/contact/shop';

export default function Shop() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  const slides = shopLinks
    .slice(0, shopLinks.length - 1)
    .map((slide, index) => {
      function Layout({ props }: { props: (typeof shopLinks)[0] }) {
        return (
          <div
            style={{
              background: `linear-gradient( rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0.3) 100%), url('${props.image}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
          >
            <LayoutSection
              id={`carousel-shop-slide-${index}`}
              containerized={false}
              px={'xl'}
            >
              <Stack
                py={SECTION_SPACING / 2}
                c={'var(--mantine-color-white)'}
                justify="space-between"
                mih={440}
              >
                <Stack align="center">
                  <Title
                    order={2}
                    fz={{ base: 'xl', md: '1.5rem' }}
                    ta={'center'}
                    c={'var(--mantine-color-white)'}
                  >
                    {props.label}
                  </Title>

                  <Text inherit fz={'sm'} ta={'center'} w={{ lg: '75%' }}>
                    {props.desc}
                  </Text>
                </Stack>

                <Group justify={'center'}>
                  <MoadlContactShop>
                    <Button color="sec.4" radius={'xl'}>
                      Inquire
                    </Button>
                  </MoadlContactShop>

                  <Button
                    component={Link}
                    href={props.link}
                    variant="outline"
                    color="white"
                    radius={'xl'}
                  >
                    Learn More
                  </Button>
                </Group>
              </Stack>
            </LayoutSection>
          </div>
        );
      }

      return (
        <CarouselSlide key={index}>
          <Layout props={slide} />
        </CarouselSlide>
      );
    });

  return (
    <Carousel
      withIndicators
      withControls={false}
      loop
      classNames={classes}
      slideSize={{ base: '100%', md: '50%' }}
      slidesToScroll={'auto'}
      plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
}
