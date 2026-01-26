"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { copy } from "@/lib/copy";
import { useGsapReveal } from "@/lib/hooks/useGsapReveal";

export const GamesPreview = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { stagger: 0.12 });

  return (
    <section id="games" className="section" ref={ref}>
      <div className="container">
        <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl" data-reveal>
          {copy.home.gamesPreview.title}
        </h2>
        <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-2">
          <div
            className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-bg-secondary/40 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:rounded-[26px] sm:p-7"
            data-reveal
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute -left-24 -top-24 h-40 w-40 rounded-full bg-brand-primary/10 blur-[90px]" />
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
              {copy.games.esportsTitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {copy.home.gamesPreview.esports.map((game) => (
                <Badge
                  key={game}
                  status="COMING_SOON"
                  label={`${game} ${copy.symbols.separator} ${copy.statusLabels.COMING_SOON}`}
                  className="normal-case"
                />
              ))}
            </div>
          </div>
          <div
            className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-bg-secondary/40 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:rounded-[26px] sm:p-7"
            data-reveal
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute -right-24 -bottom-24 h-40 w-40 rounded-full bg-brand-secondary/10 blur-[90px]" />
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
              {copy.games.sportsTitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {copy.home.gamesPreview.sportsRoadmap.map((sport) => (
                <Badge
                  key={sport}
                  status="COMING_SOON"
                  label={`${sport} ${copy.symbols.separator} ${copy.statusLabels.COMING_SOON}`}
                  className="normal-case"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
