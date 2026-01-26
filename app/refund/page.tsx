import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/lib/copy";
import { NeonBackdrop } from "@/components/NeonBackdrop";

export const metadata: Metadata = {
  title: `${copy.site.name} — ${copy.legal.refund.title}`,
  description: copy.legal.refund.intro
};

export default function RefundPage() {
  return (
    <section className="section relative overflow-hidden">
      <NeonBackdrop />
      <div className="container">
        <Reveal className="space-y-10">
          <h1 className="text-3xl font-semibold text-text-primary" data-reveal>
            {copy.legal.refund.title}
          </h1>
          <div className="space-y-3" data-reveal>
            <p className="text-text-secondary">{copy.legal.refund.intro}</p>
            <p className="text-sm text-text-muted">
              Last updated: {copy.legal.refund.lastUpdated}
            </p>
          </div>

          <div className="space-y-8">
            {copy.legal.refund.sections.map((section) => (
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
