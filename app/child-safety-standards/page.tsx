import type { Metadata } from "next";
import { NeonBackdrop } from "@/components/NeonBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/lib/copy";

const childSafety = copy.legal.childSafetyStandards;

export const metadata: Metadata = {
  title: "Child Safety Standards | MatchHai",
  description:
    "MatchHai child safety standards, including our policy against CSAE and CSAM, reporting options, enforcement, and child safety contact.",
  alternates: { canonical: "https://matchhai.com/child-safety-standards/" },
  openGraph: {
    title: "Child Safety Standards | MatchHai",
    description:
      "MatchHai child safety standards, including our policy against CSAE and CSAM, reporting options, enforcement, and child safety contact.",
    url: "https://matchhai.com/child-safety-standards/",
    type: "website"
  }
};

export default function ChildSafetyStandardsPage() {
  return (
    <section className="section relative overflow-hidden">
      <NeonBackdrop />
      <div className="container">
        <Reveal className="space-y-8 md:space-y-10">
          <h1 className="page-title" data-reveal>
            {childSafety.header}
          </h1>
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-7" data-reveal>
            <p className="section-lede max-w-3xl">{childSafety.intro}</p>
            <p className="text-sm text-text-muted">
              Last updated: {childSafety.lastUpdated}
            </p>
          </div>

          <div className="reading space-y-10 md:space-y-12">
            {childSafety.sections.map((section) => (
              <section key={section.title} className="space-y-3 border-t border-white/10 pt-6 first:border-0 first:pt-0 sm:pt-7" data-reveal>
                <h2 className="text-lg font-semibold leading-snug text-text-primary sm:text-xl">
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
