import { useEffect } from "react";

function useToggleBodyScroll(condition: boolean) {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [condition]);
}

export default useToggleBodyScroll;
