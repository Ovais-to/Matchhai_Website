"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/utils/reducedMotion";
import { motion } from "@/lib/motion";

export const useHeroIntro = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const targets = Array.from(
      container.querySelectorAll("[data-hero-reveal]")
    );
    if (!targets.length) {
      return;
    }

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const context = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: motion.reveal.y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: motion.duration.sm,
        stagger: 0.12,
        ease: motion.ease.crisp
      });
    }, container);

    return () => {
      context.revert();
    };
  }, [containerRef]);
};
