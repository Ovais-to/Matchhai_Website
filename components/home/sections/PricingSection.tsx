"use client";

import { useRef } from "react";
import Link from "next/link";
import { copy } from "@/lib/copy";
import { routes } from "@/lib/routes";
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

        <div className="mt-5 grid items-stretch gap-3 sm:gap-4 md:mt-8 md:grid-cols-3">
          {copy.home.pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className="group surface-card flex h-full flex-col p-5 sm:p-6"
              data-card
              data-reveal
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -top-24 right-0 h-40 w-40 rounded-full bg-brand-primary/10 blur-[80px]" />
              </div>
              <p className="min-h-10 text-xs font-medium uppercase leading-relaxed tracking-[0.12em] text-text-muted sm:min-h-0">
                {plan.name}
              </p>
              <p className="mt-2 text-2xl font-semibold leading-tight text-text-primary sm:text-3xl">
                {plan.price}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                {plan.description}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-text-secondary">
          <Link
            className="focus-ring rounded-sm text-text-primary underline underline-offset-4"
            href={routes.refund}
          >
            Review the Refund and Cancellation Policy
          </Link>
        </p>
      </div>
    </section>
  );
};
