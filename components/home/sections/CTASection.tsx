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
        <div className="surface-panel">
          <h2 className="section-title" data-reveal>
            {copy.home.ctaStrip.title}
          </h2>
          <p className="section-lede" data-reveal>
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
