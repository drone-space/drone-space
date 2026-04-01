import React from 'react';
import LayoutSection from '@repo/components/layout/section';
import CarouselShop from '@repo/components/common/carousels/shop';
import classes from './shop.module.scss';
import { shopLinks } from '@/data/links';

export default function Shop() {
  return (
    <LayoutSection
      id="layout-hero"
      className={classes.hero}
      containerized={false}
    >
      <CarouselShop props={{ shopLinks }} />
    </LayoutSection>
  );
}
