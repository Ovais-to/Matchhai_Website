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
        <div className="grid gap-5 md:grid-cols-[1.05fr_0.95fr] md:items-stretch md:gap-6 lg:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="section-title" data-reveal>
              {copy.contact.title}
            </h2>
            <p className="section-lede" data-reveal>
              {copy.contact.intro}
            </p>
            <div
              className="group surface-card p-4 sm:p-5 lg:p-6"
              data-card
              data-reveal
            >
              <p className="text-sm font-semibold text-text-primary">
                {copy.contact.detailsTitle}
              </p>
              <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-text-secondary">
                {copy.contact.details.map((detail) => (
                  <p key={detail.label} className="break-words">
                    <span className="text-text-muted">
                      {detail.label}
                      {copy.symbols.labelSeparator}
                    </span>{" "}
                    {detail.href ? (
                      <a
                        className="focus-ring rounded-sm hover:text-text-primary"
                        href={detail.href}
                      >
                        {detail.value}
                      </a>
                    ) : detail.value}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div
            className="group surface-card flex items-center p-4 shadow-[0_0_32px_rgba(0,0,0,0.22)] sm:p-5 lg:p-7"
            data-card
            data-reveal
          >
            <div className="grid w-full gap-3 sm:grid-cols-2">
              <Button href={copy.contact.supportEmailHref}>Email Matchhai</Button>
              <Button href={copy.contact.phoneHref} variant="secondary">
                Call Matchhai
              </Button>
            </div>
            <p className="mt-4 w-full rounded-xl border border-border bg-bg-primary/60 p-4 text-sm leading-relaxed text-text-secondary">
              Payments are collected only for valid booking-related services. Matchhai does not facilitate gambling, betting, or chance-based transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
