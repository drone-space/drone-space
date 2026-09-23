'use client';

import React, { useMemo } from 'react';
import { useRef } from 'react';
import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { LayoutSection } from '@repo/ui';
import { SECTION_SPACING } from '@repo/constants';
import { ModalContactShop } from '../modal/contact/shop';
import classes from './shop.module.css';
import { AnchorNextLink } from '@repo/ui';

export function CarouselShop({ props }: { props: { shopLinks: any[] } }) {
  const autoplay = useMemo(() => Autoplay({ delay: 4000 }), []);

  const slides = props.shopLinks.slice(0, props.shopLinks.length - 1).map((slide, index) => {
    function Layout({ props }: { props: any }) {
      return (
        <div
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0.3) 100%), url('${props.image}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        >
          <LayoutSection id={`carousel-shop-slide-${index}`} containerized={false} px={'xl'}>
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
                <ModalContactShop>
                  <Button color="sec.3">Inquire</Button>
                </ModalContactShop>

                <AnchorNextLink href={props.link}>
                  <Button variant="outline" color="white">
                    Learn More
                  </Button>
                </AnchorNextLink>
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
      emblaOptions={{ loop: true, slidesToScroll: 'auto' }}
      classNames={classes}
      slideSize={{ base: '100%', md: '50%' }}
      plugins={[autoplay]}
      // onMouseEnter={autoplay.stop}
      // onMouseLeave={autoplay.reset}
    >
      {slides}
    </Carousel>
  );
}
