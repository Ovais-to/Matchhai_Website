"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { motion } from "@/lib/motion";
import { fx } from "@/lib/fx";
import { prefersReducedMotion, prefersCoarsePointer } from "@/lib/utils/reducedMotion";

type HoverOptions = {
  glow?: boolean;
  tilt?: boolean;
  magnetic?: boolean;
};

export const useHover3D = (
  ref: RefObject<HTMLElement>,
  options: HoverOptions = { glow: true, tilt: true, magnetic: false }
) => {
  useEffect(() => {
    if (prefersReducedMotion() || prefersCoarsePointer()) {
      return;
    }
    const element = ref.current;
    if (!element) {
      return;
    }
    const { tiltMax, lift, glowStrength, magnetic } = motion.hover;

    const handleMove = (event: PointerEvent) => {
      if (!options.tilt) {
        return;
      }
      const bounds = element.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const rotateX = ((y / bounds.height) * 2 - 1) * -tiltMax;
      const rotateY = ((x / bounds.width) * 2 - 1) * tiltMax;
      const translateX = options.magnetic ? (x / bounds.width - 0.5) * magnetic : 0;
      const translateY = options.magnetic ? (y / bounds.height - 0.5) * magnetic : 0;

      gsap.to(element, {
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
        duration: motion.duration.sm,
        ease: motion.ease.crisp
      });
    };

    const handleEnter = () => {
      gsap.to(element, {
        y: -lift,
        boxShadow: options.glow
          ? `0 0 24px ${hexToRgba(fx.neon.primary, glowStrength)}`
          : "0 0 0 rgba(0,0,0,0)",
        duration: motion.duration.sm,
        ease: motion.ease.smooth
      });
    };

    const handleLeave = () => {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: motion.duration.md,
        ease: motion.ease.smooth
      });
    };

    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerenter", handleEnter);
    element.addEventListener("pointerleave", handleLeave);

    return () => {
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerenter", handleEnter);
      element.removeEventListener("pointerleave", handleLeave);
    };
  }, [ref, options.glow, options.magnetic, options.tilt]);
};

const hexToRgba = (hex: string, alpha: number) => {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
