export const modalBus = new EventTarget();
export const CLOSE_ALL = 'app:close-all-modals';

export function closeAllModals(detail?: { id?: string }) {
  modalBus.dispatchEvent(new CustomEvent(CLOSE_ALL, { detail }));
}
