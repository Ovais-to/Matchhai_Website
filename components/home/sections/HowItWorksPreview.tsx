"use client";

import { useRef } from "react";
import { copy } from "@/lib/copy";
import { useGsapReveal } from "@/lib/hooks/useGsapReveal";

export const HowItWorksPreview = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { stagger: 0.12 });

  return (
    <section id="how-it-works" className="section" ref={ref}>
      <div className="container">
        <h2 className="section-title" data-reveal>
          {copy.home.howItWorksPreview.title}
        </h2>
        <ol className="mt-5 grid gap-3 sm:gap-4 md:mt-8 md:grid-cols-3">
          {copy.home.howItWorksPreview.steps.map((step, index) => (
            <li
              key={step.title}
              className="group surface-card h-full px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6"
              data-card
              data-reveal
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-24 -top-20 h-40 w-40 rounded-full bg-brand-primary/10 blur-[90px]" />
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="number-badge inline-flex flex-none self-start items-center justify-center rounded-full border border-border bg-bg-primary text-base font-semibold leading-none text-text-primary sm:text-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="section-kicker text-xs sm:text-sm sm:tracking-[0.16em]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
