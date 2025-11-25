import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import CarouselShop from '@/components/common/carousels/shop';
import classes from './shop.module.scss';

export default function Shop() {
  return (
    <LayoutSection
      id="layout-hero"
      className={classes.hero}
      containerized={false}
    >
      <CarouselShop />
    </LayoutSection>
  );
}
