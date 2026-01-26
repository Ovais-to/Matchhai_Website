"use client";

import Link from "next/link";
import { copy } from "@/lib/copy";
import { routes } from "@/lib/routes";

export const Footer = () => {
  return (
    <footer className="overflow-hidden border-t border-bg-tertiary bg-bg-secondary">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-text-primary">
            {copy.site.name}
          </p>
          <p className="text-sm text-text-secondary">{copy.footer.tagline}</p>
          <p className="text-xs text-text-muted">{copy.footer.disclaimer}</p>
        </div>
        <div className="space-y-3 text-sm text-text-secondary">
          <p className="text-sm font-semibold text-text-primary">
            {copy.contact.detailsTitle}
          </p>
          {copy.contact.details.map((detail) => (
            <p key={detail.label}>
              <span className="text-text-muted">
                {detail.label}
                {copy.symbols.labelSeparator}
              </span>{" "}
              {detail.value}
            </p>
          ))}
        </div>
        <div className="space-y-3 text-sm text-text-secondary">
          <p className="text-sm font-semibold text-text-primary">
            {copy.footer.linksTitle}
          </p>
          <Link href={routes.privacy} className="block hover:text-text-primary">
            {copy.legal.privacy.title}
          </Link>
          <Link href={routes.terms} className="block hover:text-text-primary">
            {copy.legal.terms.title}
          </Link>
          <Link href={routes.refund} className="block hover:text-text-primary">
            {copy.legal.refund.title}
          </Link>
        </div>
      </div>
      <div className="border-t border-bg-tertiary">
        <div className="container flex flex-col gap-2 py-4 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <span>{copy.footer.legal}</span>
          <span>
            {copy.site.legalName} {copy.symbols.separator} {copy.site.location}
          </span>
        </div>
      </div>
    </footer>
  );
};
