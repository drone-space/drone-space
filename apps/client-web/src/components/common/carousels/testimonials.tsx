'use client';

import React from 'react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import classes from './testimonials.module.scss';
import CardTestimonial from '@/components/common/cards/testimonial';
import { useMediaQuery } from '@mantine/hooks';
import { StudentGet } from '@repo/types/models/student';

export default function Testimonials({ props }: { props: StudentGet[] }) {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const desktop = useMediaQuery('(min-width: 62em)');
  const desktopLg = useMediaQuery('(min-width: 75em)');

  const slides = props.map((client, index) => (
    <CarouselSlide key={index} px={'xs'} pb={'xs'}>
      <CardTestimonial props={client} />
    </CarouselSlide>
  ));

  return (
    <Carousel
      withIndicators={true}
      withControls={true}
      draggable={true}
      emblaOptions={{
        loop: true,
        align: 'start',
        slidesToScroll: desktopLg ? 1 : desktop ? 2 : 1,
      }}
      slideSize={{ base: '100%', md: '50%', lg: '33.333333%' }}
      classNames={classes}
      plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
}
