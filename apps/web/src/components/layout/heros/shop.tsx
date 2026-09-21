import React from 'react';
import LayoutSection from '@repo/ui/layout/section';
import CarouselShop from '@repo/ui/common/carousels/shop';
import classes from './shop.module.css';
import { shopLinks } from '@/data/links';

export default function Shop() {
  return (
    <LayoutSection id="layout-hero" className={classes.hero} containerized={false}>
      <CarouselShop props={{ shopLinks }} />
    </LayoutSection>
  );
}
