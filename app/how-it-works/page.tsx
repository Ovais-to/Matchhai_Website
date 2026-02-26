import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { NeonBackdrop } from "@/components/NeonBackdrop";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: `${copy.site.name} — ${copy.howItWorks.title}`,
  description: copy.howItWorks.intro
};

export default function HowItWorksPage() {
  return (
    <section className="section relative overflow-hidden">
      <NeonBackdrop />
      <div className="container">
        <Reveal className="space-y-10">
          <h1 className="page-title" data-reveal>
            {copy.howItWorks.title}
          </h1>
          <div className="space-y-3" data-reveal>
            <p className="section-lede">{copy.howItWorks.intro}</p>
          </div>

          <ol className="space-y-4 md:space-y-5">
            {copy.howItWorks.steps.map((step, index) => (
              <li
                key={step.title}
                className="group surface-card px-5 py-4 sm:px-7 sm:py-6"
                data-card
                data-reveal
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -right-24 -top-20 h-40 w-40 rounded-full bg-brand-primary/10 blur-[90px]" />
                </div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="section-kicker sm:text-sm sm:tracking-[0.2em]">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-text-primary">
                      {step.title}
                    </h2>
                  </div>
                  <StatusBadge status={step.status} />
                </div>
                <p className="mt-3 text-sm text-text-secondary">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div data-reveal>
            <Button href={copy.howItWorks.cta.href}>
              {copy.howItWorks.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
