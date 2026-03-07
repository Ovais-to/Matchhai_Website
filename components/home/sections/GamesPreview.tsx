"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/Card";
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
          <Card data-reveal>
            <p className="section-kicker text-sm">
              {copy.games.esportsTitle}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              {copy.home.gamesPreview.esports.map((game) => (
                <li key={game}>{game}</li>
              ))}
            </ul>
          </Card>
          <Card data-reveal>
            <p className="section-kicker text-sm">
              {copy.games.sportsTitle}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              {copy.home.gamesPreview.sportsRoadmap.map((sport) => (
                <li key={sport}>{sport}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
