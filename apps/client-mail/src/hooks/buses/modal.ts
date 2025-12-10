import { CLOSE_ALL, modalBus } from '@/utilities/buses/modal';
import { useEffect } from 'react';

export function useCloseAllModals(onClose: () => void, id?: string) {
  useEffect(() => {
    const handler = (e: Event) => {
      const { id: targetId } = (e as CustomEvent).detail || {};
      if (!targetId || targetId === id) {
        onClose();
      }
    };
    modalBus.addEventListener(CLOSE_ALL, handler);
    return () => modalBus.removeEventListener(CLOSE_ALL, handler);
  }, [onClose, id]);
}
