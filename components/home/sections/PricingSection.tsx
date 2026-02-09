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
          <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl" data-reveal>
            {copy.home.pricing.title}
          </h2>
          <p className="text-sm text-text-secondary sm:text-base" data-reveal>
            {copy.home.pricing.intro}
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-3">
          {copy.home.pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-bg-secondary/40 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:rounded-[26px] sm:p-7"
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

        <p className="mt-5 text-xs text-text-muted sm:text-sm" data-reveal>
          {copy.home.pricing.note}
        </p>
      </div>
    </section>
  );
};

