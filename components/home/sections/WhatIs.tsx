"use client";

import { useRef } from "react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Card } from "@/components/ui/Card";
import { copy } from "@/lib/copy";
import { useGsapReveal } from "@/lib/hooks/useGsapReveal";

export const WhatIs = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { stagger: 0.15 });

  return (
    <section id="what-is" className="section" ref={ref}>
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="section-title" data-reveal>
            {copy.home.whatIs.title}
          </h2>
          <p className="section-lede" data-reveal>
            {copy.home.whatIs.description}
          </p>
        </div>
        <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-3">
          {copy.home.whatIs.pillars.map((pillar) => (
            <Card key={pillar.title} data-reveal>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-primary">
                  {pillar.title}
                </h3>
                <StatusBadge status={pillar.status} />
              </div>
              <p className="mt-3 text-sm text-text-secondary">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
