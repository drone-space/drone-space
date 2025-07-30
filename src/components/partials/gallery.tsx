'use client';

import { Grid, GridCol, Group, Pagination } from '@mantine/core';
import React, { useEffect } from 'react';
import ModalGallery from '../common/modals/gallery';
import { usePaginate } from '@/hooks/paginate';
import { useRouter } from 'next/navigation';
import { SECTION_SPACING } from '@/data/constants';

export default function Gallery({ props }: { props: { list: any[] } }) {
  const router = useRouter();

  const divisor = 12;
  const { items, totalPages, activePage, setActivePage } = usePaginate(
    props.list,
    divisor
  );

  useEffect(() => {
    if (activePage > 1) {
      router.push('#page-gallery');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  return (
    <>
      <Grid justify="center" gutter={'xs'} my={SECTION_SPACING / 2}>
        {items.map((item) => (
          <GridCol
            key={item.image}
            span={{ base: 12, xs: 6, sm: 4, md: 3, xl: 2 }}
          >
            <ModalGallery img={item.image} />
          </GridCol>
        ))}
      </Grid>

      <Group justify="center" mt={'xl'}>
        <Pagination
          size={'sm'}
          value={activePage}
          onChange={setActivePage}
          total={totalPages}
        />
      </Group>
    </>
  );
}
