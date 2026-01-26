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
        <h2 className="text-2xl font-semibold text-text-primary md:text-3xl" data-reveal>
          {copy.home.howItWorksPreview.title}
        </h2>
        <ol className="mt-6 space-y-4 md:mt-8 md:space-y-5">
          {copy.home.howItWorksPreview.steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-bg-secondary/40 px-5 py-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:px-7 sm:py-6"
              data-reveal
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-24 -top-20 h-40 w-40 rounded-full bg-brand-primary/10 blur-[90px]" />
              </div>
              <div className="flex items-start gap-4">
                <div className="number-badge inline-flex flex-none self-start items-center justify-center rounded-full border border-white/15 bg-bg-primary/70 text-base font-semibold leading-none text-text-primary sm:text-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-text-muted sm:text-sm sm:tracking-[0.2em]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
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
