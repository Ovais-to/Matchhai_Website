"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/utils/reducedMotion";
import { motion } from "@/lib/motion";

export const useHeroGsap = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const layers = Array.from(
      container.querySelectorAll("[data-hero-layer]")
    );
    if (!layers.length) {
      return;
    }
    const tween = gsap.to(layers, {
      y: (index) => (index + 1) * 6,
      duration: motion.duration.lg * 1.2,
      ease: motion.ease.soft,
      yoyo: true,
      repeat: -1,
      stagger: 0.4
    });
    return () => {
      tween.kill();
    };
  }, [containerRef]);
};
