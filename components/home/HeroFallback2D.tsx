"use client";

import { useEffect, useRef } from "react";
import { assets } from "@/lib/assets";
import { copy } from "@/lib/copy";
import { useHeroGsap } from "@/lib/hooks/useHeroGsap";
import { motion } from "@/lib/motion";
import { fx } from "@/lib/fx";
import { prefersCoarsePointer, prefersReducedMotion } from "@/lib/utils/reducedMotion";

export const HeroFallback2D = () => {
  const ref = useRef<HTMLDivElement>(null);
  useHeroGsap(ref);

  useEffect(() => {
    if (prefersReducedMotion() || prefersCoarsePointer()) {
      return;
    }
    const element = ref.current;
    if (!element) {
      return;
    }
    const layers = element.querySelectorAll("[data-hero-parallax]");
    const handleMove = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      layers.forEach((layer, index) => {
        const depth = (index + 1) * motion.parallax.heroMax;
        (layer as HTMLElement).style.transform = `translate3d(${x * depth * 40}px, ${
          y * depth * 30
        }px, 0)`;
      });
    };
    element.addEventListener("pointermove", handleMove);
    return () => {
      element.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative h-full w-full"
      role="img"
      aria-label={copy.hero.fallbackAlt}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.heroFallback})` }}
      />
      <div
        data-hero-parallax
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 44px), repeating-linear-gradient(180deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 44px)"
        }}
      />
      <div
        data-hero-layer
        data-hero-parallax
        className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-brand-primary/20 blur-[120px]"
      />
      <div
        data-hero-layer
        data-hero-parallax
        className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-brand-secondary/20 blur-[140px]"
      />
      <div
        data-hero-layer
        data-hero-parallax
        className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/70 to-bg-primary"
      />
      <div
        data-hero-parallax
        className="absolute right-10 top-16 h-32 w-32 rounded-full opacity-30 blur-[80px]"
        style={{ backgroundColor: fx.neon.primary }}
      />
      <div
        data-hero-parallax
        className="absolute bottom-8 left-1/3 h-24 w-24 rounded-full opacity-30 blur-[80px]"
        style={{ backgroundColor: fx.neon.secondary }}
      />
    </div>
  );
};
