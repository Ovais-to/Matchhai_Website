export const prefersReducedMotion = () => {
  if (typeof window === "undefined") {
    return true;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const prefersCoarsePointer = () => {
  if (typeof window === "undefined") {
    return true;
  }
  return window.matchMedia("(pointer: coarse)").matches;
};
