"use client";

import { useRef } from "react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Card } from "@/components/ui/Card";
import { copy } from "@/lib/copy";
import { useGsapReveal } from "@/lib/hooks/useGsapReveal";

export const WhatIs = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { stagger: 0.15 });
  const services = copy.home.whatIs.pillars;
  const standardServices = services.slice(0, 6);
  const featuredService = services[6];

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
        <div className="mt-5 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {standardServices.map((pillar) => (
            <Card key={pillar.title} data-reveal>
              <div className="flex items-center justify-between gap-3">
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
          {featuredService ? (
            <Card
              key={featuredService.title}
              className="border border-primary/40 bg-primary/5 md:col-span-2 lg:col-span-3"
              data-reveal
            >
              <div className="mx-auto max-w-3xl">
                <div className="flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {featuredService.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-text-secondary">
                  {featuredService.description}
                </p>
              </div>
            </Card>
          ) : null}
        </div>
      </div>
    </section>
  );
};
