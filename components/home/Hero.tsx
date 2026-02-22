"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { Badge } from "@/components/ui/Badge";
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
        className="container relative z-10 flex min-h-[520px] flex-col justify-center py-16 md:min-h-[580px] md:py-20"
      >
        <p
          className="section-kicker text-text-muted sm:text-sm"
          data-hero-reveal
        >
          {copy.hero.eyebrow}
        </p>
        <h1
          className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl md:mt-4 md:text-6xl"
          data-hero-reveal
        >
          {copy.hero.title}
        </h1>
        <p
          className="mt-3 max-w-2xl text-sm text-text-secondary sm:text-base md:mt-4 md:text-lg"
          data-hero-reveal
        >
          {copy.hero.subtitle}
        </p>
        <div className="mt-5 flex flex-wrap gap-2 md:mt-6" data-hero-reveal>
          {copy.hero.badges.map((badge) => (
            <Badge
              key={badge.label}
              status={badge.status}
              label={`${badge.label} ${copy.symbols.separator} ${copy.statusLabels[badge.status]}`}
              className="normal-case"
            />
          ))}
        </div>
        <div
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 md:mt-8"
          data-hero-reveal
        >
          <Button href={copy.hero.primaryCta.href}>
            {copy.hero.primaryCta.label}
          </Button>
          <Button href={copy.hero.secondaryCta.href} variant="secondary">
            {copy.hero.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
};
