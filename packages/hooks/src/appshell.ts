'use client';

import { useStoreAppShell } from '@repo/store';

export const useAppshellChild = () => {
  const asideChild = useStoreAppShell((s) => s.appshell?.child?.aside);
  const toggleAsideChild = useStoreAppShell((s) => s.toggleAsideChild);

  const handleToggleChildAside = () => {
    toggleAsideChild();
  };

  return { asideChild, handleToggleChildAside };
};
