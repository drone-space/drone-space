'use client';

import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@repo/constants/sizes';
import products from '@/data/products';
import { capitalizeWords } from '@repo/utilities/string';
import {
  ActionIcon,
  Anchor,
  Button,
  Card,
  CardSection,
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
  IconArrowRight,
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
import { prependZeros } from '@repo/utilities/number';
import { Order } from '@repo/types/enums';
import { useDebouncedCallback, useMediaQuery } from '@mantine/hooks';
import CardShopFeatured from '../common/cards/shop/featured';
import { Layout, Sort, useShopListing } from '@/hooks/shop';
import NextLink from '@repo/components/common/anchor/next-link';

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

  const [listSize, setListSize] = useState(Number(params?.listSize || 9));

  const mobile = useMediaQuery('(max-width: 48em)');

  const [hydrated, setHydrated] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebouncedCallback((value: string) => {
    updateParams({ ...params, search: value });
    setLoading(false);
  }, 1000);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setLoading(true);
    debouncedSearch(value);
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    setSearchValue(params?.search || '');
  }, [params.search]);

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
    <Grid gutter={{ base: 'xl', md: 'md', lg: 'xl' }}>
      <GridCol span={12}>
        <Group justify="center">
          <TextInput
            aria-label="Search products"
            placeholder="Search products..."
            size="md"
            radius={999}
            w={{ base: 240, md: 520 }}
            rightSection={
              loading ? (
                <Loader size={ICON_SIZE - 4} />
              ) : searchValue.length ? (
                <ActionIcon
                  size={ICON_WRAPPER_SIZE - 4}
                  variant="subtle"
                  onClick={() => {
                    setSearchValue('');
                    handleSearch('');
                  }}
                >
                  <IconX size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
                </ActionIcon>
              ) : (
                <IconSearch size={ICON_SIZE - 4} stroke={ICON_STROKE_WIDTH} />
              )
            }
            defaultValue={searchValue}
            value={searchValue}
            onChange={(event) => {
              handleSearch(event.currentTarget.value);
            }}
          />
        </Group>
      </GridCol>

      <GridCol span={12}>
        <Divider variant="dashed" />
      </GridCol>

      <GridCol span={{ md: 3.5 }} visibleFrom="md">
        <Stack pos={'sticky'} top={'2rem'}>
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
                      setTimeout(() => router.push('#listing'), 250);
                    }}
                  >
                    <Group justify="space-between">
                      <Text component="span" inherit>
                        {capitalizeWords(`${cl.categoryName}`)}
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

          <CardShopFeatured />
        </Stack>
      </GridCol>

      <GridCol span={{ base: 12, md: 8.5 }}>
        <Group justify="space-between">
          <Group>
            <ActionIcon
              size={ICON_WRAPPER_SIZE}
              color={
                !params.layout
                  ? 'pri'
                  : params.layout === Layout.GRID
                    ? 'pri'
                    : 'gray'
              } // highlight active
              variant={
                !params.layout
                  ? 'light'
                  : params.layout === Layout.GRID
                    ? 'light'
                    : 'subtle'
              }
              onClick={() => updateParams({ layout: Layout.GRID })}
              visibleFrom="sm"
            >
              <IconLayoutGrid size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>

            <ActionIcon
              size={ICON_WRAPPER_SIZE}
              color={params.layout === Layout.LIST ? 'pri' : 'gray'}
              variant={params.layout === Layout.LIST ? 'light' : 'subtle'}
              onClick={() => updateParams({ layout: Layout.LIST })}
              visibleFrom="sm"
            >
              <IconList size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
            </ActionIcon>
          </Group>

          <Group>
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
              value={params?.listSize || String(listSize)}
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
                }

                if (v == Sort.HIGHLOW) {
                  sortBy(
                    Sort.HIGHLOW,
                    (item) => item.price.former,
                    Order.DESCENDING
                  );
                }

                if (v == Sort.LOWHIGH) {
                  sortBy(
                    Sort.LOWHIGH,
                    (item) => item.price.former,
                    Order.ASCENDING
                  );
                }

                updateParams({ ...params, sort: v as Sort });
              }}
            />

            <NextLink href="/shop/accessories">
              <Button
                size="xs"
                variant="gradient"
                rightSection={
                  <IconArrowRight size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                }
              >
                Accessories
              </Button>
            </NextLink>
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
                  !params.layout
                    ? { base: 12, xs: 6, md: 4 }
                    : params.layout === Layout.GRID
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

const getCatName = (catName: string) => {
  switch (catName) {
    case 'camera':
      return 'Camera Drones';
    case 'cinematography':
      return 'Cinematography & Filmmaking';
    case 'enterprise':
      return 'Industrial & Enterprise';
    case 'mapping':
      return 'Survey & Mapping';
    case 'agriculture':
      return 'Agriculture & Precision Farming';
    case 'upcoming':
      return 'Upcoming Releases';
    default:
      return 'All';
  }
};

const getCategoriesWithCounts = () => {
  const categoriesWithCounts: {
    category: string;
    categoryName: string;
    count: number;
  }[] = [];

  for (const product of products) {
    const existingCategory = categoriesWithCounts.find(
      (item) => item.category == product.category
    );

    if (existingCategory) {
      existingCategory.count++;
    } else {
      categoriesWithCounts.push({
        category: product.category,
        categoryName: getCatName(product.category),
        count: 1,
      });
    }
  }

  return categoriesWithCounts;
};
