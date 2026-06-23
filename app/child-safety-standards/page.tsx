import type { Metadata } from "next";
import { NeonBackdrop } from "@/components/NeonBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/lib/copy";

const childSafety = copy.legal.childSafetyStandards;

export const metadata: Metadata = {
  title: "Child Safety Standards | MatchHai",
  description:
    "MatchHai child safety standards, including our policy against CSAE and CSAM, reporting options, enforcement, and child safety contact."
};

export default function ChildSafetyStandardsPage() {
  return (
    <section className="section relative overflow-hidden">
      <NeonBackdrop />
      <div className="container">
        <Reveal className="space-y-10">
          <h1 className="page-title" data-reveal>
            {childSafety.header}
          </h1>
          <div className="space-y-3" data-reveal>
            <p className="section-lede">{childSafety.intro}</p>
            <p className="text-sm text-text-muted">
              Last updated: {childSafety.lastUpdated}
            </p>
          </div>

          <div className="reading space-y-8">
            {childSafety.sections.map((section) => (
              <section key={section.title} className="space-y-3" data-reveal>
                <h2 className="text-xl font-semibold text-text-primary">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-text-secondary">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <p className="text-text-secondary" data-reveal>
              Official child safety compliance contact:{" "}
              <a
                href={`mailto:${childSafety.contactEmail}`}
                className="font-medium text-accent-cyan hover:text-text-primary"
              >
                {childSafety.contactEmail}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
