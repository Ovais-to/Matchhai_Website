"use client";

import { useRef } from "react";
import { copy } from "@/lib/copy";
import { useGsapReveal } from "@/lib/hooks/useGsapReveal";

export const TrustPreview = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { stagger: 0.12 });

  return (
    <section id="trust" className="section" ref={ref}>
      <div className="container">
        <h2 className="section-title" data-reveal>
          {copy.home.trustPreview.title}
        </h2>
        <div className="mt-5 grid gap-3 sm:gap-4 md:mt-8 md:grid-cols-2">
          {copy.home.trustPreview.items.map((item) => (
            <div
              key={item.title}
              className="group surface-card flex h-full items-start gap-3 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5"
              data-card
              data-reveal
            >
              <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand-primary shadow-[0_0_12px_rgb(var(--color-primary)/0.6)]" />
              <div>
                <h3 className="text-base font-semibold leading-snug text-text-primary sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary sm:mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
