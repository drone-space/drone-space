'use client';

import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import products from '@/data/products';
import { capitalizeWords } from '@/utilities/formatters/string';
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Card,
  CardSection,
  Center,
  Divider,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  Pagination,
  RangeSlider,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { IconLayoutGrid, IconList, IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';
import CardShopDronesListingGrid from '../common/cards/shop/drones/listing/grid';
import CardShopDronesListingList from '../common/cards/shop/drones/listing/list';
import { useRouter } from 'next/navigation';
import { Layout, Sort, useShopFilter } from '@/hooks/shop';
import { prependZeros } from '@/utilities/formatters/number';
import { Order } from '@/enums/sort';

export default function DroneListing() {
  const router = useRouter();

  const catList = getCategoriesWithCounts();

  const {
    params,
    updateParams,
    sortBy,
    items,
    activePage,
    setActivePage,
    totalPages,
    pageRange,
    emptyValues,
    prices,
  } = useShopFilter(products);

  const [listSize, setListSize] = useState(Number(params?.listSize || 6));

  return (
    <Grid gutter={0}>
      <GridCol span={{ md: 3 }} pr={{ md: 32 }}>
        <Stack pos={'sticky'} top={SECTION_SPACING / 2}>
          <Card withBorder>
            <Title order={3} fz={'md'} c={'var(--mantine-color-text)'}>
              Categories
            </Title>

            <CardSection my={'md'}>
              <Divider />
            </CardSection>

            <Stack gap={'xs'}>
              {catList.map((cl, i) => (
                <Anchor
                  key={i}
                  fz={'sm'}
                  underline="hover"
                  onClick={() => {
                    updateParams({ ...params, category: cl.category });
                    router.push('#page-shop-listing');
                  }}
                >
                  <Group justify="space-between">
                    <Text component="span" inherit>
                      {capitalizeWords(`${cl.category} Drones`)}
                    </Text>

                    <Text component="span" inherit>
                      ({cl.count})
                    </Text>
                  </Group>
                </Anchor>
              ))}
            </Stack>
          </Card>

          <Card withBorder style={{ overflow: 'visible' }}>
            <Title order={3} fz={'md'} c={'var(--mantine-color-text)'}>
              Price
            </Title>

            <CardSection my={'md'}>
              <Divider />
            </CardSection>

            <RangeSlider
              color="blue"
              pt={'xs'}
              pb={'xl'}
              label={(v) => (
                <Text component="span" inherit>
                  Ksh. <NumberFormatter value={v} thousandSeparator />
                </Text>
              )}
              labelTransitionProps={{
                transition: 'fade',
                duration: 250,
              }}
              min={prices.min}
              max={prices.max}
              marks={[
                { value: prices.max * 0.2, label: '20%' },
                { value: prices.max * 0.5, label: '50%' },
                { value: prices.max * 0.8, label: '80%' },
              ]}
              value={[
                Number(params.minPrice) || prices.min,
                Number(params.maxPrice) || prices.max,
              ]}
              onChange={(range) =>
                updateParams({
                  minPrice: String(range[0]),
                  maxPrice: String(range[1]),
                })
              }
              step={prices.max * 0.025}
            />
          </Card>

          <Group>
            <Button
              fullWidth
              color="gray"
              variant="light"
              onClick={() => {
                updateParams(emptyValues);
                router.push('#page-shop-listing');
              }}
            >
              Reset Filters
            </Button>
          </Group>
        </Stack>
      </GridCol>

      <GridCol span={{ md: 9 }} pl={{ md: 32 }}>
        <Group justify="space-between">
          <div>
            <TextInput
              aria-label="Search products"
              placeholder="Search products..."
              size="xs"
              w={240}
              rightSection={
                <IconSearch size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
              }
              value={params?.search}
              onChange={(event) =>
                updateParams({ ...params, search: event.currentTarget.value })
              }
            />
          </div>

          <Group>
            <ActionIcon
              size={ICON_WRAPPER_SIZE}
              color={params.layout === Layout.GRID ? 'pri' : 'gray'} // highlight active
              variant={params.layout === Layout.GRID ? 'light' : 'subtle'}
              radius="md"
              onClick={() => updateParams({ layout: Layout.GRID })}
            >
              <IconLayoutGrid size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>

            <ActionIcon
              size={ICON_WRAPPER_SIZE}
              color={params.layout === Layout.LIST ? 'pri' : 'gray'}
              variant={params.layout === Layout.LIST ? 'light' : 'subtle'}
              radius="md"
              onClick={() => updateParams({ layout: Layout.LIST })}
            >
              <IconList size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>

            <Select
              aria-label="Items to Show"
              placeholder="Items to Show"
              checkIconPosition="right"
              unselectable={'on'}
              size="xs"
              w={140}
              data={[
                { value: '3', label: 'Show 3' },
                { value: '6', label: 'Show 6' },
                { value: '9', label: 'Show 9' },
                { value: '12', label: 'Show 12' },
                { value: '15', label: 'Show 15' },
              ]}
              value={params?.listSize}
              onChange={(v) => {
                setListSize(Number(v));
                updateParams({ ...params, listSize: v || '' });
              }}
            />

            <Select
              aria-label="Sort By"
              placeholder="Sort By"
              checkIconPosition="right"
              unselectable={'on'}
              size="xs"
              w={160}
              data={[
                { value: '', label: 'Sort By' },
                { value: Sort.NAME, label: 'Product Name' },
                { value: Sort.HIGHLOW, label: 'Price (High to Low)' },
                { value: Sort.LOWHIGH, label: 'Price (Low to High)' },
              ]}
              value={params?.sort}
              onChange={(v) => {
                if (v == Sort.NAME) {
                  sortBy(
                    Sort.NAME,
                    (item) => item.title.short,
                    Order.ASCENDING
                  );
                  updateParams({ ...params, sort: v as Sort });
                }

                if (v == Sort.HIGHLOW) {
                  sortBy(
                    Sort.HIGHLOW,
                    (item) => item.price.former,
                    Order.DESCENDING
                  );
                  updateParams({ ...params, sort: v as Sort });
                }

                if (v == Sort.LOWHIGH) {
                  sortBy(
                    Sort.LOWHIGH,
                    (item) => item.price.former,
                    Order.ASCENDING
                  );
                  updateParams({ ...params, sort: v as Sort });
                }
              }}
            />
          </Group>
        </Group>

        <Divider mt={'md'} />

        {!items.length ? (
          <Center mih={200}>
            <Text c={'dimmed'} ta={'center'} fz={'sm'}>
              No products found.
            </Text>
          </Center>
        ) : (
          <Grid mt={'xl'}>
            {items.map((p, i) => (
              <GridCol
                key={i}
                span={{ md: params.layout === Layout.GRID ? 4 : 12 }}
                mih={200}
              >
                {params.layout === Layout.GRID ? (
                  <CardShopDronesListingGrid data={p} />
                ) : (
                  <CardShopDronesListingList data={p} />
                )}
              </GridCol>
            ))}
          </Grid>
        )}

        {!items.length ? undefined : (
          <>
            <Divider my={'xl'} />

            <Group justify="space-between">
              <Pagination
                size={'sm'}
                total={totalPages}
                value={activePage}
                onChange={setActivePage}
                onClick={() => router.push('#page-shop-listing')}
              />

              <Text fz={'sm'} c={'dimmed'}>
                Showing {prependZeros(pageRange?.from || 0, 2)} -{' '}
                {prependZeros(pageRange?.to || 0, 2)}
              </Text>
            </Group>
          </>
        )}
      </GridCol>
    </Grid>
  );
}

const getCategoriesWithCounts = () => {
  let categoriesWithCounts: { category: string; count: number }[] = [];

  for (const product of products) {
    const category = product.category;

    const existingCategory = categoriesWithCounts.find(
      (item) => item.category == category
    );

    if (existingCategory) {
      existingCategory.count++;
    } else {
      categoriesWithCounts.push({ category, count: 1 });
    }
  }

  return categoriesWithCounts;
};
