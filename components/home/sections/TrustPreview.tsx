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
        <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2">
          {copy.home.trustPreview.items.map((item) => (
            <div
              key={item.title}
              className="group surface-card flex items-start gap-4 px-4 py-4 sm:px-5"
              data-card
              data-reveal
            >
              <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand-primary shadow-[0_0_12px_rgb(var(--color-primary)/0.6)]" />
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
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
