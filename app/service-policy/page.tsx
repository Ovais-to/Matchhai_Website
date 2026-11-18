import type { Metadata } from "next";
import Link from "next/link";
import { NeonBackdrop } from "@/components/NeonBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { copy } from "@/lib/copy";
import { routes } from "@/lib/routes";

const policy = copy.legal.servicePolicy;
const contactPattern = /(support@matchhai\.com|ovais@matchhai\.com|\+92 323 8249779|Refund and Cancellation Policy|Terms and Conditions|Privacy Policy)/g;

function renderLinkedContacts(text: string) {
  return text.split(contactPattern).map((part, index) => {
    if (part === "support@matchhai.com") {
      return <a key={index} className="text-brand-primary underline" href="mailto:support@matchhai.com">{part}</a>;
    }
    if (part === "ovais@matchhai.com") {
      return <a key={index} className="text-brand-primary underline" href="mailto:ovais@matchhai.com">{part}</a>;
    }
    if (part === "+92 323 8249779") {
      return <a key={index} className="text-brand-primary underline" href="tel:+923238249779">{part}</a>;
    }
    const policyLink = {
      "Refund and Cancellation Policy": routes.refund,
      "Terms and Conditions": routes.terms,
      "Privacy Policy": routes.privacy
    }[part as "Refund and Cancellation Policy" | "Terms and Conditions" | "Privacy Policy"];
    if (policyLink) {
      return <Link key={index} className="text-brand-primary underline" href={policyLink}>{part}</Link>;
    }
    return part;
  });
}

export const metadata: Metadata = {
  title: `${copy.site.name} — ${policy.title}`,
  description: policy.intro,
  alternates: { canonical: "https://matchhai.com/service-policy/" },
  openGraph: {
    title: `${copy.site.name} — ${policy.title}`,
    description: policy.intro,
    url: "https://matchhai.com/service-policy/",
    type: "website"
  }
};

export default function ServicePolicyPage() {
  return (
    <section className="section relative overflow-hidden">
      <NeonBackdrop />
      <div className="container">
        <Reveal className="space-y-8 md:space-y-10">
          <h1 className="page-title" data-reveal>
            {policy.title}
          </h1>
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-7" data-reveal>
            <p className="section-lede max-w-3xl">{policy.intro}</p>
            <p className="text-sm text-text-muted">
              Effective date: {policy.lastUpdated}
            </p>
          </div>

          <div className="reading space-y-10 md:space-y-12">
            {policy.sections.map((section) => (
              <section key={section.title} className="space-y-3 border-t border-white/10 pt-6 first:border-0 first:pt-0 sm:pt-7" data-reveal>
                <h2 className="text-lg font-semibold leading-snug text-text-primary sm:text-xl">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-text-secondary">
                    {renderLinkedContacts(paragraph)}
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
