import { useState, useMemo, useEffect, useCallback } from 'react';

interface PageRange {
  from: number;
  to: number;
}

const chunk = <T>(array: T[], size: number): T[][] => {
  return array.length
    ? [array.slice(0, size), ...chunk(array.slice(size), size)]
    : [];
};

export const usePaginate = <T>(list: T[], pageSize: number) => {
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = useCallback((page: number) => {
    setActivePage(page);
  }, []);

  // These only need to change when list or pageSize changes
  const totalPages = useMemo(
    () => Math.ceil(list.length / pageSize),
    [list.length, pageSize]
  );

  const chunkedList = useMemo(() => chunk(list, pageSize), [list, pageSize]);

  // This needs to change when page changes
  const items = useMemo(() => {
    if (chunkedList.length === 0) return [];
    const safePageIndex = Math.min(activePage - 1, chunkedList.length - 1);
    return chunkedList[safePageIndex] || [];
  }, [chunkedList, activePage]);

  useEffect(() => {
    setActivePage(1);
  }, [list.length, pageSize]);

  // This needs to change when page changes
  const pageRange = useMemo((): PageRange | null => {
    if (chunkedList.length === 0) return null;

    const lastChunkLength = chunkedList[chunkedList.length - 1].length;
    const isLastChunk =
      activePage === chunkedList.length && lastChunkLength !== pageSize;

    return {
      from: isLastChunk
        ? list.length - lastChunkLength + 1
        : (activePage - 1) * pageSize + 1,
      to: isLastChunk
        ? list.length
        : Math.min(activePage * pageSize, list.length),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chunkedList.length, activePage, list.length, pageSize]);

  return {
    items,
    activePage,
    setActivePage: handlePageChange,
    chunkedList,
    totalPages,
    pageRange,
  };
};
