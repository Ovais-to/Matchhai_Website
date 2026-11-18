"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { HeroFallback2D } from "./HeroFallback2D";
import { copy } from "@/lib/copy";
import { use3DMode } from "@/lib/use3DMode";
import { useHeroIntro } from "@/lib/hooks/useHeroIntro";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />
});

export const Hero = () => {
  const enable3D = use3DMode();
  const ref = useRef<HTMLDivElement>(null);

  useHeroIntro(ref);

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        {enable3D ? <Hero3D /> : <HeroFallback2D />}
      </div>
      <div
        ref={ref}
        className="container relative z-10 flex min-h-[480px] flex-col justify-center py-12 sm:min-h-[520px] sm:py-16 md:min-h-[580px] md:py-20"
      >
        <p
          className="section-kicker text-text-muted sm:text-sm"
          data-hero-reveal
        >
          {copy.hero.eyebrow}
        </p>
        <h1
          className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] text-text-primary sm:text-5xl md:mt-4 md:text-6xl"
          data-hero-reveal
        >
          {copy.hero.title}
        </h1>
        <p
          className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base md:mt-5 md:text-lg"
          data-hero-reveal
        >
          {copy.hero.subtitle}
        </p>
        <div
          className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4 md:mt-9"
          data-hero-reveal
        >
          <Button className="w-full sm:w-auto" href={copy.hero.downloadCta.href}>
            {copy.hero.downloadCta.label}
          </Button>
          <Button className="w-full sm:w-auto" href={copy.hero.primaryCta.href} variant="secondary">
            {copy.hero.primaryCta.label}
          </Button>
          <Button className="w-full sm:w-auto" href={copy.hero.secondaryCta.href} variant="secondary">
            {copy.hero.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
};
