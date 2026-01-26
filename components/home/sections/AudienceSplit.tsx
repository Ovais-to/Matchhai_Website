"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/copy";
import { useGsapReveal } from "@/lib/hooks/useGsapReveal";

export const AudienceSplit = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { stagger: 0.16 });

  return (
    <section id="audience" className="section" ref={ref}>
      <div className="container grid gap-5 md:gap-6 md:grid-cols-2">
        <div
          className="group relative space-y-4 overflow-hidden rounded-[24px] border border-white/10 bg-bg-secondary/40 p-5 shadow-[0_0_32px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:rounded-[28px] sm:p-7"
          data-reveal
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute -top-24 left-0 h-48 w-48 rounded-full bg-brand-primary/12 blur-[80px]" />
            <div className="absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-brand-secondary/12 blur-[80px]" />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            {copy.audience.players.title}
          </p>
          <h2 className="text-xl font-semibold text-text-primary sm:text-2xl">
            {copy.audience.players.description}
          </h2>
          <ul className="space-y-2 text-sm text-text-secondary">
            {copy.audience.players.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <div className="pt-4">
            <Button href={copy.audience.players.cta.href} variant="secondary">
              {copy.audience.players.cta.label}
            </Button>
          </div>
        </div>
        <div
          className="group relative space-y-4 overflow-hidden rounded-[24px] border border-white/10 bg-bg-secondary/40 p-5 shadow-[0_0_32px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:rounded-[28px] sm:p-7"
          data-reveal
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-brand-secondary/12 blur-[80px]" />
            <div className="absolute -bottom-24 left-0 h-48 w-48 rounded-full bg-brand-primary/12 blur-[80px]" />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            {copy.audience.zones.title}
          </p>
          <h2 className="text-xl font-semibold text-text-primary sm:text-2xl">
            {copy.audience.zones.description}
          </h2>
          <ul className="space-y-2 text-sm text-text-secondary">
            {copy.audience.zones.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <div className="pt-4">
            <Button href={copy.audience.zones.cta.href}>
              {copy.audience.zones.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
