import { Order } from '@/enums/sort';
import { useState } from 'react';

export const useSortArray = <T>(
  setList: React.Dispatch<React.SetStateAction<T[]>>
) => {
  const [orderMap, setOrderMap] = useState<Record<string, Order>>({});

  const sortBy = (
    field: keyof T,
    getField?: (item: T) => any,
    direction?: Order // optional input direction
  ) => {
    setOrderMap((prev) => {
      const currentOrder = prev[field as string] || Order.DEFAULT;

      const nextOrder = direction
        ? direction // use provided direction
        : currentOrder === Order.DEFAULT || currentOrder === Order.DESCENDING
          ? Order.ASCENDING
          : Order.DESCENDING;

      setList((list) => {
        const copy = [...list];

        copy.sort((a, b) => {
          const valA = getField ? getField(a) : a[field];
          const valB = getField ? getField(b) : b[field];

          if (valA < valB) return nextOrder === Order.ASCENDING ? -1 : 1;
          if (valA > valB) return nextOrder === Order.ASCENDING ? 1 : -1;
          return 0;
        });

        return copy;
      });

      return { ...prev, [field as string]: nextOrder };
    });
  };

  return { sortBy, orderMap };
};
