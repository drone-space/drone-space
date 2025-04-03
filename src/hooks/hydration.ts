import { useEffect, useState } from 'react';

export const useHydrate = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (!hydrated) setHydrated(true);
  }, []);

  return { hydrated };
};
