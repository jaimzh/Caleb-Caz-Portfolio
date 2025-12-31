`use client`;

import { useCallback } from "react";

export const useScrollTo = () => {
  const scrollToId = useCallback((id: string, offset: number) => {
    const element = document.getElementById(id);

    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return { scrollToId };
};
