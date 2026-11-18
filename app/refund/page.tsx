import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/lib/copy";
import { NeonBackdrop } from "@/components/NeonBackdrop";
import { routes } from "@/lib/routes";

const contactPattern = /(support@matchhai\.com|ovais@matchhai\.com|\+92 323 8249779|Service Policy|Terms and Conditions|Privacy Policy)/g;

function renderLinkedContacts(text: string) {
  return text.split(contactPattern).map((part, index) => {
    if (part === "support@matchhai.com")
      return <a key={index} href="mailto:support@matchhai.com" className="underline">{part}</a>;
    if (part === "ovais@matchhai.com")
      return <a key={index} href="mailto:ovais@matchhai.com" className="underline">{part}</a>;
    if (part === "+92 323 8249779")
      return <a key={index} href="tel:+923238249779" className="underline">{part}</a>;
    const policyLink = {
      "Service Policy": routes.servicePolicy,
      "Terms and Conditions": routes.terms,
      "Privacy Policy": routes.privacy
    }[part as "Service Policy" | "Terms and Conditions" | "Privacy Policy"];
    if (policyLink)
      return <Link key={index} href={policyLink} className="underline">{part}</Link>;
    return part;
  });
}

export const metadata: Metadata = {
  title: `${copy.site.name} | Refund and Cancellation Policy`,
  description: copy.legal.refund.intro,
  alternates: { canonical: "https://matchhai.com/refund/" },
  openGraph: {
    title: `${copy.site.name} | Refund and Cancellation Policy`,
    description: copy.legal.refund.intro,
    url: "https://matchhai.com/refund/",
    type: "website"
  }
};

export default function RefundPage() {
  return (
    <section className="section relative overflow-hidden">
      <NeonBackdrop />
      <div className="container">
        <Reveal className="space-y-8 md:space-y-10">
          <h1 className="page-title" data-reveal>
            {copy.legal.refund.title}
          </h1>
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-7" data-reveal>
            <p className="section-lede max-w-3xl">{copy.legal.refund.intro}</p>
            <p className="text-sm text-text-muted">
              Effective date: {copy.legal.refund.lastUpdated}
            </p>
          </div>

          <div className="reading space-y-10 md:space-y-12">
            {copy.legal.refund.sections.map((section) => (
              <section key={section.title} className="space-y-3 border-t border-white/10 pt-6 first:border-0 first:pt-0 sm:pt-7" data-reveal>
                <h2 className="text-lg font-semibold leading-snug text-text-primary sm:text-xl">
                  {section.title}
                </h2>
                {section.paragraphs?.map((p) => (
                  <p key={p} className="text-text-secondary">
                    {renderLinkedContacts(p)}
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
