import type { Metadata } from "next";
import Link from "next/link";
import { NeonBackdrop } from "@/components/NeonBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/lib/copy";
import { routes } from "@/lib/routes";

const accountDeletion = copy.legal.deleteAccount;

export const metadata: Metadata = {
  title: accountDeletion.title,
  description: accountDeletion.intro
};

export default function DeleteAccountPage() {
  const supportHref = `mailto:${accountDeletion.supportEmail}`;

  return (
    <section className="section relative overflow-hidden">
      <NeonBackdrop />
      <div className="container">
        <Reveal className="space-y-10">
          <h1 className="page-title" data-reveal>
            {accountDeletion.title}
          </h1>
          <div className="space-y-3" data-reveal>
            <p className="section-lede">{accountDeletion.intro}</p>
            <p className="text-sm text-text-muted">
              Last updated: {accountDeletion.lastUpdated}
            </p>
          </div>

          <div className="reading space-y-8">
            {accountDeletion.sections.map((section) => (
              <section key={section.title} className="space-y-3" data-reveal>
                <h2 className="text-xl font-semibold text-text-primary">
                  {section.title}
                </h2>
                {section.paragraphs?.map((p) => {
                  if (p.includes(accountDeletion.supportEmail)) {
                    const [before, after] = p.split(accountDeletion.supportEmail);

                    return (
                      <p key={p} className="text-text-secondary">
                        {before}
                        <a
                          href={supportHref}
                          className="font-semibold text-text-primary underline underline-offset-4"
                        >
                          {accountDeletion.supportEmail}
                        </a>
                        {after}
                      </p>
                    );
                  }

                  if (section.title === "Privacy policy") {
                    return (
                      <p key={p} className="text-text-secondary">
                        For more information about how MatchHai handles personal
                        data, review our{" "}
                        <Link
                          href={routes.privacy}
                          className="font-semibold text-text-primary underline underline-offset-4"
                        >
                          Privacy policy
                        </Link>
                        .
                      </p>
                    );
                  }

                  return (
                    <p key={p} className="text-text-secondary">
                      {p}
                    </p>
                  );
                })}
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
