'use client';

import { Order } from '@repo/types';
import { useState } from 'react';
import { sortArray } from '@repo/utils';

/**
 * Hook to handle sorting of an array in React state.
 * Keeps track of sort order per field and toggles on repeated clicks.
 */
export const useSortArray = <T>(setList: React.Dispatch<React.SetStateAction<T[]>>) => {
  const [orderMap, setOrderMap] = useState<Record<string, Order>>({});

  const sortBy = (field: keyof T, getField: (item: T) => any, order?: Order) => {
    setOrderMap((prevOrderMap) => {
      const currentOrder = prevOrderMap[field as string] ?? Order.DEFAULT;

      // Use provided order if given, else toggle order
      const nextOrder =
        order ??
        (currentOrder === Order.DEFAULT || currentOrder === Order.DESCENDING
          ? Order.ASCENDING
          : Order.DESCENDING);

      // Sort the list in state based on the next order
      setList((list) => sortArray([...list], getField, nextOrder));

      // Update order map for this field
      return { ...prevOrderMap, [field as string]: nextOrder };
    });
  };

  return { sortBy, orderMap };
};
