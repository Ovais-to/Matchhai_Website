"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { assets } from "@/lib/assets";
import { copy } from "@/lib/copy";
import { useSmoothScrollAnchors } from "@/lib/hooks/useSmoothScrollAnchors";
import { routes } from "@/lib/routes";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useSmoothScrollAnchors(navRef, 84);

  return (
    <>
      <header
        ref={navRef}
        className="sticky top-0 z-30 border-b border-bg-tertiary bg-bg-primary/90 backdrop-blur"
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href={routes.home} className="flex items-center gap-2 sm:gap-3">
            <Image
              src={assets.logo}
              alt={copy.site.name}
              width={48}
              height={48}
              priority
              className="sm:h-14 sm:w-14"
            />
            <span className="text-sm font-semibold text-text-primary sm:text-base">
              {copy.site.name}
            </span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {copy.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Button href={copy.nav.ctas.primary.href}>
              {copy.nav.ctas.primary.label}
            </Button>
            <Button href={copy.nav.ctas.secondary.href} variant="secondary">
              {copy.nav.ctas.secondary.label}
            </Button>
          </div>
          <button
            type="button"
            aria-label={copy.nav.mobile.openLabel}
            className="focus-ring rounded-full border border-bg-tertiary px-3 py-2 text-sm text-text-secondary lg:hidden"
            onClick={() => setOpen(true)}
          >
            {copy.nav.mobile.openText}
          </button>
        </div>
      </header>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
};
