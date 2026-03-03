import { getUrlParam, setUrlParam } from '@repo/utilities/url';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSortArray } from '@repo/hooks/sort';
import { usePaginate } from '@repo/hooks/paginate';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export enum Layout {
  GRID = 'grid',
  LIST = 'list',
}

export enum Sort {
  NAME = 'name',
  HIGHLOW = 'price-high-low',
  LOWHIGH = 'price-low-high',
}

export interface ShopParams {
  search?: string;
  layout?: Layout;
  listSize?: string;
  sort?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
}

export const useShopListing = (list: any[]) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const emptyValues: ShopParams = {
    search: '',
    layout: Layout.GRID,
    listSize: '9',
    sort: '',
    category: '',
    minPrice: '',
    maxPrice: '',
  };

  // ----------------------------
  // URL → derived params
  // ----------------------------
  const params: ShopParams = useMemo(() => {
    return {
      search: searchParams.get('search') ?? '',
      layout: (searchParams.get('layout') as Layout) ?? Layout.GRID,
      listSize: searchParams.get('listSize') ?? '9',
      sort: searchParams.get('sort') ?? '',
      category: searchParams.get('category') ?? '',
      minPrice: searchParams.get('minPrice') ?? '',
      maxPrice: searchParams.get('maxPrice') ?? '',
    };
  }, [searchParams]);

  // ----------------------------
  // Update params → push to URL
  // ----------------------------
  const updateParams = useCallback(
    (newParams: Partial<ShopParams>) => {
      const current = new URLSearchParams(searchParams.toString());
      let changed = false;

      Object.entries(newParams).forEach(([key, value]) => {
        const existing = current.get(key);

        if (!value) {
          if (existing !== null) {
            current.delete(key);
            changed = true;
          }
        } else if (existing !== String(value)) {
          current.set(key, String(value));
          changed = true;
        }
      });

      if (changed) {
        router.push(`${pathname}?${current.toString()}`, { scroll: false });
      }
    },
    [router, pathname, searchParams]
  );

  // ----------------------------
  // Min / Max Prices
  // ----------------------------
  const minMaxPrices = useMemo(() => {
    return getMinMax(list.filter((li) => li.price).map((l) => l.price.former));
  }, [list]);

  // ----------------------------
  // Filtering
  // ----------------------------
  const filteredList = useMemo(() => {
    if (params.search?.trim()) {
      return filterSearch(list, params);
    }

    let result = [...list];

    if (params.category) {
      result = filterCategory(result, params);
    }

    if (params.minPrice && params.maxPrice) {
      result = filterPriceRange(result, params, minMaxPrices);
    }

    return result;
  }, [
    list,
    params.search,
    params.category,
    params.minPrice,
    params.maxPrice,
    minMaxPrices,
  ]);

  // ----------------------------
  // Sorting
  // ----------------------------
  const [sortedList, setSortedList] = useState(filteredList);
  const { sortBy, orderMap } = useSortArray(setSortedList);

  useEffect(() => {
    setSortedList(filteredList);
  }, [filteredList]);

  // ----------------------------
  // Pagination
  // ----------------------------
  const { items, activePage, setActivePage, totalPages, pageRange } =
    usePaginate(sortedList, Number(params.listSize || 9));

  // Reset page when search changes
  useEffect(() => {
    setActivePage(1);
  }, [params.search, setActivePage]);

  return {
    params,
    updateParams,
    sortBy,
    orderMap,
    items,
    activePage,
    setActivePage,
    totalPages,
    pageRange,
    emptyValues,
    prices: minMaxPrices,
    router,
    pathname,
    searchParams,
  };
};

const filterCategory = (items: any[], params: ShopParams) =>
  items.filter((item) => item.category === params?.category);

const filterSearch = (items: any[], params: ShopParams) =>
  items.filter((item) =>
    item.title.long.toLowerCase().includes(params?.search?.toLowerCase() ?? '')
  );

const filterPriceRange = (
  items: any[],
  params: ShopParams,
  prices: { min: number; max: number }
) => {
  const min = Number(params.minPrice) || prices.min;
  const max = Number(params.maxPrice) || prices.max;

  return items.filter(
    (item) => item.price.former >= min && item.price.former <= max
  );
};

const getMinMax = (numbers: number[]): { min: number; max: number } => {
  if (numbers.length === 0) {
    throw new Error('Array must not be empty');
  }

  let min = numbers[0];
  let max = numbers[0];

  for (const num of numbers) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  return { min, max };
};
