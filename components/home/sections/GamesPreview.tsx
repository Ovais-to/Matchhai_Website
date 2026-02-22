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
        <h2 className="section-title" data-reveal>
          {copy.home.gamesPreview.title}
        </h2>
        <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-2">
          <div
            className="group surface-card"
            data-card
            data-reveal
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute -left-24 -top-24 h-40 w-40 rounded-full bg-brand-primary/10 blur-[90px]" />
            </div>
            <p className="section-kicker text-sm">
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
            className="group surface-card"
            data-card
            data-reveal
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute -right-24 -bottom-24 h-40 w-40 rounded-full bg-brand-secondary/10 blur-[90px]" />
            </div>
            <p className="section-kicker text-sm">
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
