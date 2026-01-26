"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "@/lib/motion";
import { fx } from "@/lib/fx";
import { prefersReducedMotion } from "@/lib/utils/reducedMotion";

export const NeonBackdrop = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }
    const element = ref.current;
    if (!element) {
      return;
    }
    const layers = element.querySelectorAll("[data-neon-layer]");
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
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        data-neon-layer
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            `radial-gradient(circle at top left, ${toRgba(fx.neon.primary, 0.1)}, transparent 60%), radial-gradient(circle at 20% 70%, ${toRgba(fx.neon.secondary, 0.1)}, transparent 62%)`
        }}
      />
      <div
        data-neon-layer
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 48px), repeating-linear-gradient(180deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 48px)"
        }}
      />
      <div
        data-neon-layer
        className="absolute -bottom-32 left-1/3 h-60 w-60 rounded-full blur-[140px] opacity-40"
        style={{ backgroundColor: fx.neon.primary }}
      />
      <div
        data-neon-layer
        className="absolute -top-32 right-0 h-64 w-64 rounded-full blur-[150px] opacity-35"
        style={{ backgroundColor: fx.neon.secondary }}
      />
    </div>
  );
};

const toRgba = (hex: string, alpha: number) => {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
