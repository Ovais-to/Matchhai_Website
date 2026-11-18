"use client";

import { useRef } from "react";
import { copy } from "@/lib/copy";
import { useGsapReveal } from "@/lib/hooks/useGsapReveal";

export const BusinessDetailsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { stagger: 0.12 });

  return (
    <section id="business-details" className="section py-10 md:py-16" ref={ref}>
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="section-title" data-reveal>
            {copy.home.businessDetails.title}
          </h2>
          <p className="section-lede" data-reveal>
            {copy.home.businessDetails.description}
          </p>
        </div>

        <div className="mt-5 max-w-4xl md:mt-6">
          {copy.home.businessDetails.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border bg-bg-secondary/75 p-4 sm:p-5"
              data-reveal
            >
              <h3 className="text-xl font-semibold text-text-primary sm:text-2xl">
                {card.title}
              </h3>
              <ul className="mt-3 grid gap-x-4 divide-y divide-border text-sm leading-relaxed text-text-secondary sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3">
                {card.lines.map((line) => (
                  <li key={line} className="min-w-0 py-2.5 sm:rounded-xl sm:border sm:border-border/70 sm:bg-bg-primary/40 sm:px-3 sm:py-3">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
