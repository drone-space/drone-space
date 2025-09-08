import { getUrlParams, setUrlParams } from '@/utilities/helpers/url';
import { useEffect, useMemo, useState } from 'react';
import { useSortArray } from './sort/array';
import { usePaginate } from './paginate';

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
  const emptyValues: ShopParams = {
    search: '',
    layout: Layout.GRID,
    listSize: '6',
    sort: '',
    category: '',
    minPrice: '',
    maxPrice: '',
  };

  const [params, setParams] = useState<ShopParams>(emptyValues);

  useEffect(() => {
    const urlParams = getUrlParams();
    setParams((prev) => ({ ...prev, ...urlParams }));
  }, []);

  useEffect(() => {
    const updateParamsFromUrl = () => {
      const urlParams = getUrlParams();
      setParams((prev) => {
        const isDifferent = Object.keys(urlParams).some(
          (key) =>
            String(prev[key as keyof ShopParams] ?? '') !==
            String(urlParams[key] ?? '')
        );

        return isDifferent ? { ...prev, ...urlParams } : prev;
      });
    };

    // Listen to browser back/forward
    window.addEventListener('popstate', updateParamsFromUrl);

    // Patch pushState and replaceState
    const pushState = history.pushState;
    history.pushState = function (...args) {
      pushState.apply(this, args);
      updateParamsFromUrl();
    };

    const replaceState = history.replaceState;
    history.replaceState = function (...args) {
      replaceState.apply(this, args);
      updateParamsFromUrl();
    };

    return () => {
      window.removeEventListener('popstate', updateParamsFromUrl);
      history.pushState = pushState;
      history.replaceState = replaceState;
    };
  }, []);

  const minMaxPrices = getMinMax(list.map((l) => l.price.former));

  // Step 1: Filtered list
  const filteredList = useMemo(() => {
    const searchIsActive = !!params.search?.trim();

    // If searching, ignore other filters and search the full list
    if (searchIsActive) {
      return filterSearch(list, params);
    }

    // Otherwise apply category/price filters
    let result = [...list];

    if (params.category) {
      result = filterCategory(result, params);
    }

    if (params.minPrice && params.maxPrice) {
      result = filterPriceRange(result, params, minMaxPrices);
    }

    return result;
  }, [list, params.search, params.category, params.minPrice, params.maxPrice]);

  useEffect(() => {
    setActivePage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.search]);

  // Step 2: Sorting
  const [sortedList, setSortedList] = useState(filteredList);
  const { sortBy, orderMap } = useSortArray(setSortedList);

  useEffect(() => {
    setSortedList(filteredList);
  }, [filteredList]);

  // Step 3: Pagination
  const { items, activePage, setActivePage, totalPages, pageRange } =
    usePaginate(
      sortedList.length ? sortedList : [],
      Number(params.listSize || 6)
    );

  // Step 4: Update params
  const updateParams = (newParams: Partial<ShopParams>) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  };

  useEffect(() => {
    if (!params) return;

    const currentParams = getUrlParams();

    // Only update the URL if something is different
    const isDifferent = Object.keys(params).some(
      (key) =>
        String(params[key as keyof ShopParams] ?? '') !==
        String(currentParams[key] ?? '')
    );

    if (isDifferent) {
      setUrlParams(params);
    }
  }, [params]);

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
