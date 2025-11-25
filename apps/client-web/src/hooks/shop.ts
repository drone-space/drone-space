import { getUrlParam, setUrlParam } from '@repo/utilities/url';
import { useEffect, useMemo, useState } from 'react';
import { useSortArray } from '@repo/hooks/sort';
import { usePaginate } from '@repo/hooks/paginate';

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

  // Parse URL on initial load
  useEffect(() => {
    const urlParams = (getUrlParam() as Record<string, string | null>) || {};
    setParams((prev) => ({ ...prev, ...urlParams }));
  }, []);

  // Sync URL → state when browser navigation triggers
  useEffect(() => {
    const updateParamsFromUrl = () => {
      const urlParams = (getUrlParam() as Record<string, string | null>) || {};

      setParams((prev) => {
        const changed = Object.keys({ ...prev, ...urlParams }).some((key) => {
          const before = String(prev[key as keyof ShopParams] ?? '');
          const after = String(urlParams[key] ?? '');
          return before !== after;
        });

        return changed ? { ...prev, ...urlParams } : prev;
      });
    };

    window.addEventListener('popstate', updateParamsFromUrl);

    // Patch pushState + replaceState
    const originalPush = history.pushState;
    history.pushState = function (...args) {
      originalPush.apply(this, args as any);
      updateParamsFromUrl();
    };

    const originalReplace = history.replaceState;
    history.replaceState = function (...args) {
      originalReplace.apply(this, args as any);
      updateParamsFromUrl();
    };

    return () => {
      window.removeEventListener('popstate', updateParamsFromUrl);
      history.pushState = originalPush;
      history.replaceState = originalReplace;
    };
  }, []);

  const minMaxPrices = getMinMax(list.map((l) => l.price.former));

  // Filtering
  const filteredList = useMemo(() => {
    const searchMode = params.search?.trim();

    if (searchMode) {
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
  }, [list, params.search, params.category, params.minPrice, params.maxPrice]);

  // Reset pagination when search changes
  useEffect(() => {
    setActivePage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.search]);

  // Sorting
  const [sortedList, setSortedList] = useState(filteredList);
  const { sortBy, orderMap } = useSortArray(setSortedList);

  useEffect(() => {
    setSortedList(filteredList);
  }, [filteredList]);

  // Pagination
  const { items, activePage, setActivePage, totalPages, pageRange } =
    usePaginate(
      sortedList.length ? sortedList : [],
      Number(params.listSize || 6)
    );

  // Update params state
  const updateParams = (newParams: Partial<ShopParams>) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  };

  // Push updated params to URL
  useEffect(() => {
    const currentParams =
      (getUrlParam() as Record<string, string | null>) || {};

    const changed = Object.keys({ ...params, ...currentParams }).some((key) => {
      const before = String(currentParams[key] ?? '');
      const after = String(params[key as keyof ShopParams] ?? '');
      return before !== after;
    });

    if (changed) {
      setUrlParam(params as Record<string, string | null | undefined>);
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
