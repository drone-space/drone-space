'use client';

import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { useScrollArea } from './contexts/scroll';

type UseScrollOptions = {
  threshold?: number;
  scrolledStyles?: CSSProperties;
  defaultStyles?: CSSProperties;
};

export const useScroll = ({
  threshold = 100,
  scrolledStyles,
  defaultStyles,
}: UseScrollOptions = {}) => {
  const { viewportRef, scrollToTop } = useScrollArea();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const handleScroll = () => {
      setHasScrolled(el.scrollTop > threshold);
    };

    handleScroll(); // Initial check
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [viewportRef, threshold]);

  const styles = useMemo(() => {
    if (!scrolledStyles && !defaultStyles) return {};
    return hasScrolled ? (scrolledStyles ?? {}) : (defaultStyles ?? {});
  }, [hasScrolled, scrolledStyles, defaultStyles]);

  return { hasScrolled, styles, viewportRef, scrollToTop };
};
