import React from 'react';

import LayoutSection from '@/components/layout/section';
import CarouselHome from '@/components/common/carousels/home';

import classes from './home.module.scss';

export default function Home() {
  return (
    <LayoutSection
      id="layout-hero-home"
      containerized={false}
      className={classes.hero}
    >
      <CarouselHome />
    </LayoutSection>
  );
}
