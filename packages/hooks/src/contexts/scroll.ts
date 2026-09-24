'use client';

import {
  createContext,
  createElement,
  useContext,
  useRef,
  type ReactNode,
  type RefObject,
} from 'react';

type ScrollContextType = {
  viewportRef: RefObject<HTMLDivElement | null>;
  scrollToTop: (options?: ScrollToOptions) => void;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = (options: ScrollToOptions = { top: 0, behavior: 'smooth' }) => {
    viewportRef.current?.scrollTo(options);
  };

  return createElement(
    ScrollContext.Provider,
    { value: { viewportRef, scrollToTop } },
    children,
  );
}

export const useScrollArea = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollArea must be used within a ScrollProvider');
  }
  return context;
};
