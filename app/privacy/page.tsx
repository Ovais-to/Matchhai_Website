import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/lib/copy";
import { NeonBackdrop } from "@/components/NeonBackdrop";

export const metadata: Metadata = {
  title: `${copy.site.name} — ${copy.legal.privacy.title}`,
  description: copy.legal.privacy.intro
};

export default function PrivacyPage() {
  return (
    <section className="section relative overflow-hidden">
      <NeonBackdrop />
      <div className="container">
        <Reveal className="space-y-10">
          <h1 className="page-title" data-reveal>
            {copy.legal.privacy.title}
          </h1>
          <div className="space-y-3" data-reveal>
            <p className="section-lede">{copy.legal.privacy.intro}</p>
            <p className="text-sm text-text-muted">
              Last updated: {copy.legal.privacy.lastUpdated}
            </p>
          </div>

          <div className="reading space-y-8">
            {copy.legal.privacy.sections.map((section) => (
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
