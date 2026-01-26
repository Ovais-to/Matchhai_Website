"use client";

import { useRef } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
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
            <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl" data-reveal>
              {copy.contact.title}
            </h2>
            <p className="text-sm text-text-secondary sm:text-base" data-reveal>
              {copy.contact.intro}
            </p>
            <div
              className="rounded-[20px] border border-white/10 bg-bg-secondary/40 p-5 backdrop-blur-md sm:rounded-[22px] sm:p-6"
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
            className="rounded-[22px] border border-white/10 bg-bg-secondary/40 p-5 shadow-[0_0_32px_rgba(0,0,0,0.22)] backdrop-blur-md sm:rounded-[26px] sm:p-7"
            data-reveal
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
