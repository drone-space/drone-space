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
  Flex,
  Grid,
  GridCol,
  Group,
  Loader,
  NumberFormatter,
  Pagination,
  RangeSlider,
  Select,
  Skeleton,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import {
  IconCircleX,
  IconLayoutGrid,
  IconList,
  IconSearch,
  IconX,
} from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import CardShopDronesListingGrid from '../common/cards/shop/drones/listing/grid';
import CardShopDronesListingList from '../common/cards/shop/drones/listing/list';
import { useRouter } from 'next/navigation';
import { Layout, Sort, useShopListing } from '@/hooks/shop';
import { prependZeros } from '@/utilities/formatters/number';
import { Order } from '@/enums/sort';
import { useMediaQuery } from '@mantine/hooks';

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
  } = useShopListing(products);

  const [listSize, setListSize] = useState(Number(params?.listSize || 6));

  const mobile = useMediaQuery('(max-width: 48em)');

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const resetButton = (
    <Button
      fullWidth
      color="gray"
      variant="light"
      onClick={() => {
        updateParams(emptyValues);
        router.push('#listing');
      }}
      disabled={hydrated == false}
    >
      Reset Filters
    </Button>
  );

  return (
    <Grid gutter={{ base: 'xl', md: 'md', lg: 0 }}>
      <GridCol span={{ md: 3 }} pr={{ lg: 32 }} visibleFrom="md">
        <Stack pos={'sticky'} top={SECTION_SPACING / 2}>
          <Card withBorder>
            <Title order={3} fz={'md'} c={'var(--mantine-color-text)'}>
              Categories
            </Title>

            <CardSection my={'md'}>
              <Divider />
            </CardSection>

            <Stack gap={'xs'}>
              {hydrated == false ? (
                <>
                  <Skeleton h={21.7} />
                  <Skeleton h={21.7} />
                  <Skeleton h={21.7} />
                  <Skeleton h={21.7} />
                  <Skeleton h={21.7} />
                </>
              ) : (
                catList.map((cl, i) => (
                  <Anchor
                    key={i}
                    fz={{ base: 'xs', lg: 'sm' }}
                    underline="hover"
                    onClick={() => {
                      updateParams({ ...params, category: cl.category });
                      router.push('#listing');
                    }}
                  >
                    <Group justify="space-between">
                      <Text component="span" inherit>
                        {capitalizeWords(`${cl.category} Drones`)}
                      </Text>

                      <Text component="span" inherit fz={'xs'}>
                        ({cl.count})
                      </Text>
                    </Group>
                  </Anchor>
                ))
              )}
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
              disabled={hydrated == false}
            />
          </Card>

          <Group>{resetButton}</Group>
        </Stack>
      </GridCol>

      <GridCol span={{ base: 12, md: 9 }} pl={{ lg: 32 }}>
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
              visibleFrom="sm"
            >
              <IconLayoutGrid size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>

            <ActionIcon
              size={ICON_WRAPPER_SIZE}
              color={params.layout === Layout.LIST ? 'pri' : 'gray'}
              variant={params.layout === Layout.LIST ? 'light' : 'subtle'}
              radius="md"
              onClick={() => updateParams({ layout: Layout.LIST })}
              visibleFrom="sm"
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

        <Group hiddenFrom="md" mt={'md'}>
          {resetButton}
        </Group>

        <Divider mt={'md'} />

        {hydrated == false ? (
          <Stack mih={200} justify="center" c={'dimmed'}>
            <Group justify="center">
              <Loader size={'sm'} type="dots" />
            </Group>

            <Text ta={'center'} fz={'sm'}>
              Fetching products...
            </Text>
          </Stack>
        ) : !items.length ? (
          <Stack mih={200} justify="center" c={'dimmed'}>
            <Group justify="center">
              <IconCircleX
                size={ICON_SIZE + 8}
                stroke={ICON_STROKE_WIDTH}
                color={'var(--mantine-color-pri-8)'}
              />
            </Group>

            <Text ta={'center'} fz={'sm'}>
              No products found.
            </Text>
          </Stack>
        ) : (
          <Grid mt={'xl'}>
            {items.map((p, i) => (
              <GridCol
                key={i}
                span={
                  params.layout === Layout.GRID
                    ? { base: 12, xs: 6, md: 4 }
                    : { base: 12, xs: 6, md: 12 }
                }
                mih={200}
              >
                {params.layout === Layout.LIST && !mobile ? (
                  <CardShopDronesListingList data={p} />
                ) : (
                  <CardShopDronesListingGrid data={p} />
                )}
              </GridCol>
            ))}
          </Grid>
        )}

        {hydrated == false || !items.length ? undefined : (
          <>
            <Divider my={'xl'} />

            <Flex
              direction={{ base: 'column', sm: 'row' }}
              align={'center'}
              gap={'md'}
              justify={{ sm: 'space-between' }}
            >
              <Pagination
                size={'sm'}
                total={totalPages}
                value={activePage}
                onChange={setActivePage}
                onClick={() => router.push('#listing')}
              />

              <Text fz={'sm'} c={'dimmed'}>
                Showing {prependZeros(pageRange?.from || 0, 2)} -{' '}
                {prependZeros(pageRange?.to || 0, 2)}
              </Text>
            </Flex>
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
