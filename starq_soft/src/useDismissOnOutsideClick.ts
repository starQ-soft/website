import { useEffect, type RefObject } from 'react';

export function useDismissOnOutsideClick(
  open: boolean,
  onClose: () => void,
  ...refs: RefObject<HTMLElement | null>[]
) {
  useEffect(() => {
    if (!open) return;

    const dismissOutside = (event: Event) => {
      const target = event.target;
      if (target instanceof Node && !refs.some(ref => ref.current?.contains(target))) {
        onClose();
      }
    };

    // Capture runs even when another control stops propagation. Pointer events
    // cover touch and mouse; click also covers keyboard activation.
    document.addEventListener('pointerdown', dismissOutside, true);
    document.addEventListener('click', dismissOutside, true);
    return () => {
      document.removeEventListener('pointerdown', dismissOutside, true);
      document.removeEventListener('click', dismissOutside, true);
    };
  }, [open, onClose, refs]);
}
