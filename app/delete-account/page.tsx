import type { Metadata } from "next";
import Link from "next/link";
import { NeonBackdrop } from "@/components/NeonBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/lib/copy";
import { routes } from "@/lib/routes";

const accountDeletion = copy.legal.deleteAccount;

export const metadata: Metadata = {
  title: accountDeletion.title,
  description: accountDeletion.intro,
  alternates: { canonical: "https://matchhai.com/delete-account/" },
  openGraph: {
    title: accountDeletion.title,
    description: accountDeletion.intro,
    url: "https://matchhai.com/delete-account/",
    type: "website"
  }
};

export default function DeleteAccountPage() {
  const supportHref = `mailto:${accountDeletion.supportEmail}`;

  return (
    <section className="section relative overflow-hidden">
      <NeonBackdrop />
      <div className="container">
        <Reveal className="space-y-8 md:space-y-10">
          <h1 className="page-title" data-reveal>
            {accountDeletion.title}
          </h1>
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-7" data-reveal>
            <p className="section-lede max-w-3xl">{accountDeletion.intro}</p>
            <p className="text-sm text-text-muted">
              Effective date: {accountDeletion.lastUpdated}
            </p>
          </div>

          <div className="reading space-y-10 md:space-y-12">
            {accountDeletion.sections.map((section) => (
              <section key={section.title} className="space-y-3 border-t border-white/10 pt-6 first:border-0 first:pt-0 sm:pt-7" data-reveal>
                <h2 className="text-lg font-semibold leading-snug text-text-primary sm:text-xl">
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
                        For more information about how Matchhai handles personal
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
