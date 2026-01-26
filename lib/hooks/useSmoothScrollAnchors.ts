"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { prefersReducedMotion } from "@/lib/utils/reducedMotion";
import { motion } from "@/lib/motion";

gsap.registerPlugin(ScrollToPlugin);

export const useSmoothScrollAnchors = (
  containerRef: RefObject<HTMLElement>,
  offset = 80
) => {
  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest('a[href*="#"]') as HTMLAnchorElement | null;
      if (!link) {
        return;
      }
      const href = link.getAttribute("href");
      if (!href || href === "#") {
        return;
      }
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) {
        return;
      }
      if (hashIndex > 0 && window.location.pathname !== href.slice(0, hashIndex)) {
        return;
      }
      const anchorTarget = href.slice(hashIndex);
      const anchor = document.querySelector(anchorTarget);
      if (!anchor) {
        return;
      }
      event.preventDefault();
      const top =
        anchor.getBoundingClientRect().top + window.pageYOffset - offset;
      gsap.to(window, {
        scrollTo: top,
        duration: motion.duration.md,
        ease: motion.ease.smooth
      });
    };
    container.addEventListener("click", handler);
    return () => {
      container.removeEventListener("click", handler);
    };
  }, [containerRef, offset]);
};
