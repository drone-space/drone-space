import React from 'react';
import LayoutSection from '@/components/layout/section';
import CarouselShop from '@/components/common/carousels/shop';
import NavigationShop from '../navbars/shop';
import classes from './shop.module.scss';

export default function Shop() {
  return (
    <LayoutSection
      id="layout-hero"
      className={classes.hero}
      containerized={false}
    >
      <LayoutSection
        id="layout-hero-shop"
        className={classes.navbar}
        containerized={false}
      >
        <NavigationShop options={{ variant: 'hero' }} />
      </LayoutSection>

      <CarouselShop />
    </LayoutSection>
  );
}
