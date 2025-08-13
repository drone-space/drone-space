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

export const useShopFilter = (list: any[]) => {
  const minMaxPrices = getMinMax(list.map((l) => l.price.former));

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
    const handlePopState = () => {
      setParams(getUrlParams());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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

    if (params.minPrice || params.maxPrice) {
      const min = Number(params.minPrice) || minMaxPrices.min;
      const max = Number(params.maxPrice) || minMaxPrices.max;
      result = result.filter(
        (item) => item.price.former >= min && item.price.former <= max
      );
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
    usePaginate(sortedList, Number(params.listSize));

  // Step 4: Update params
  const updateParams = (newParams: Partial<ShopParams>) => {
    setParams((prev) => ({ ...prev, ...newParams }));
    setUrlParams({ ...params, ...newParams });
  };

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
