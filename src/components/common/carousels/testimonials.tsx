'use client';

import React from 'react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
// import { useRef } from 'react';
// import Autoplay from 'embla-carousel-autoplay';
import classes from './testimonials.module.scss';
import CardTestimonial from '@/components/common/cards/testimonial';
import { useMediaQuery } from '@mantine/hooks';
import { Student } from '@prisma/client';

export default function Testimonials({ props }: { props: Student[] }) {
  // const autoplay = useRef(Autoplay({ delay: 4000 }));
  const desktop = useMediaQuery('(min-width: 62em)');
  const desktopLg = useMediaQuery('(min-width: 75em)');

  const slides = props.map((client, index) => (
    <CarouselSlide key={index} px={'xs'}>
      <CardTestimonial props={client} />
    </CarouselSlide>
  ));

  return (
    <Carousel
      withIndicators={false}
      withControls={false}
      draggable={false}
      loop
      align="start"
      slideSize={{ base: '100%', md: '50%', lg: '33.333333%' }}
      slidesToScroll={desktopLg ? 1 : desktop ? 2 : 1}
      classNames={classes}
      // plugins={interactive ? [autoplay.current] : undefined}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
}
