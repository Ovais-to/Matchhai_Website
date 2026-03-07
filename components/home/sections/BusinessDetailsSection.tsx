"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/Card";
import { copy } from "@/lib/copy";
import { useGsapReveal } from "@/lib/hooks/useGsapReveal";

export const BusinessDetailsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { stagger: 0.12 });

  return (
    <section id="business-details" className="section" ref={ref}>
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="section-title" data-reveal>
            {copy.home.businessDetails.title}
          </h2>
          <p className="section-lede" data-reveal>
            {copy.home.businessDetails.description}
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-3">
          {copy.home.businessDetails.cards.map((card) => (
            <Card key={card.title} data-reveal>
              <h3 className="text-lg font-semibold text-text-primary">
                {card.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                {card.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
