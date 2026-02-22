import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/lib/copy";
import { NeonBackdrop } from "@/components/NeonBackdrop";

export const metadata: Metadata = {
  title: `${copy.site.name} — ${copy.legal.terms.title}`,
  description: copy.legal.terms.intro
};

export default function TermsPage() {
  return (
    <section className="section relative overflow-hidden">
      <NeonBackdrop />
      <div className="container">
        <Reveal className="space-y-10">
          <h1 className="page-title" data-reveal>
            {copy.legal.terms.title}
          </h1>
          <div className="space-y-3" data-reveal>
            <p className="section-lede">{copy.legal.terms.intro}</p>
            <p className="text-sm text-text-muted">
              Last updated: {copy.legal.terms.lastUpdated}
            </p>
          </div>

          <div className="space-y-8">
            {copy.legal.terms.sections.map((section) => (
              <section key={section.title} className="space-y-3" data-reveal>
                <h2 className="text-xl font-semibold text-text-primary">
                  {section.title}
                </h2>
                {section.paragraphs?.map((p) => (
                  <p key={p} className="text-text-secondary">
                    {p}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="list-disc space-y-2 pl-5 text-text-secondary">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
