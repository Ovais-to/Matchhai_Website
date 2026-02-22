"use client";

import { useRef } from "react";
import { copy } from "@/lib/copy";
import { useGsapReveal } from "@/lib/hooks/useGsapReveal";

export const PricingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { stagger: 0.12 });

  return (
    <section id="pricing" className="section" ref={ref}>
      <div className="container">
        <div className="max-w-3xl space-y-3">
          <h2 className="section-title" data-reveal>
            {copy.home.pricing.title}
          </h2>
          <p className="section-lede" data-reveal>
            {copy.home.pricing.intro}
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-3">
          {copy.home.pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className="group surface-card"
              data-card
              data-reveal
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -top-24 right-0 h-40 w-40 rounded-full bg-brand-primary/10 blur-[80px]" />
              </div>
              <p className="text-xs uppercase tracking-[0.14em] text-text-muted">
                {plan.name}
              </p>
              <p className="mt-3 text-2xl font-semibold text-text-primary">{plan.price}</p>
              <p className="mt-3 text-sm text-text-secondary">{plan.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
