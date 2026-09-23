import React from 'react';
import { LayoutSection } from '@repo/ui';
import { CarouselShop } from '@repo/ui';
import classes from './shop.module.css';
import { shopLinks } from '@web/data/links';

export default function Shop() {
  return (
    <LayoutSection id="layout-hero" className={classes.hero} containerized={false}>
      <CarouselShop props={{ shopLinks }} />
    </LayoutSection>
  );
}
