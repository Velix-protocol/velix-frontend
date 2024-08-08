import { useEffect } from 'react';

function useBodyOverflow(isMenuOpen: boolean) {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);
}

export default useBodyOverflow;
