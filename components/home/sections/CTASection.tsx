"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/copy";
import { useGsapReveal } from "@/lib/hooks/useGsapReveal";

export const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref);

  return (
    <section id="download" className="section" ref={ref}>
      <div className="container">
        <div className="rounded-2xl border border-bg-tertiary bg-bg-secondary px-5 py-8 text-center sm:rounded-3xl sm:px-6 sm:py-10 md:px-12">
          <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl" data-reveal>
            {copy.home.ctaStrip.title}
          </h2>
          <p className="mt-3 text-sm text-text-secondary sm:text-base" data-reveal>
            {copy.home.ctaStrip.description}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4" data-reveal>
            <Button href={copy.home.ctaStrip.primaryCta.href}>
              {copy.home.ctaStrip.primaryCta.label}
            </Button>
            <Button href={copy.home.ctaStrip.secondaryCta.href} variant="secondary">
              {copy.home.ctaStrip.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
