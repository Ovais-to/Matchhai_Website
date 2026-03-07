"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/copy";
import { useGsapReveal } from "@/lib/hooks/useGsapReveal";

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { stagger: 0.12 });

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[1fr_1.15fr] md:items-start">
          <div className="space-y-4">
            <h2 className="section-title" data-reveal>
              {copy.contact.title}
            </h2>
            <p className="section-lede" data-reveal>
              {copy.contact.intro}
            </p>
            <div
              className="group surface-card p-5 sm:p-6"
              data-card
              data-reveal
            >
              <p className="text-sm font-semibold text-text-primary">
                {copy.contact.detailsTitle}
              </p>
              <div className="mt-3 space-y-2 text-sm text-text-secondary">
                {copy.contact.details.map((detail) => (
                  <p key={detail.label}>
                    <span className="text-text-muted">
                      {detail.label}
                      {copy.symbols.labelSeparator}
                    </span>{" "}
                    {detail.value}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div
            className="group surface-card p-5 shadow-[0_0_32px_rgba(0,0,0,0.22)] sm:p-7"
            data-card
            data-reveal
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold text-text-primary">
                Direct verification contact
              </p>
              <p className="text-sm text-text-secondary">
                For merchant account review, website verification, pricing confirmation, and onboarding support, contact MatchHai directly using the published details below.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <Button href="mailto:admin@matchhai.com">Email MatchHai</Button>
                <Button href="tel:+923238249779" variant="secondary">
                  Call MatchHai
                </Button>
              </div>
              <div className="rounded-2xl border border-border bg-bg-primary/60 p-4 text-sm text-text-secondary">
                Payments are collected only for valid booking-related services. MatchHai does not facilitate gambling, betting, or chance-based transactions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
