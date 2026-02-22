"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/copy";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export const MobileNav = ({ open, onClose }: MobileNavProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = "mobile-nav-title";

  useEffect(() => {
    if (!open) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-40 bg-black/70"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="absolute right-0 top-0 h-full w-80 bg-bg-secondary p-6 shadow-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="flex items-center justify-between">
          <p id={titleId} className="text-sm font-semibold text-text-primary">
            {copy.site.name}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring rounded-full px-2 py-1 text-text-secondary"
            aria-label={copy.nav.mobile.closeLabel}
            ref={closeButtonRef}
          >
            {copy.symbols.close}
          </button>
        </div>
        <nav className="mt-6 space-y-4">
          {copy.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-base text-text-secondary hover:text-text-primary"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 space-y-3">
          <Button href={copy.nav.ctas.primary.href} className="w-full">
            {copy.nav.ctas.primary.label}
          </Button>
          <Button
            href={copy.nav.ctas.secondary.href}
            variant="secondary"
            className="w-full"
          >
            {copy.nav.ctas.secondary.label}
          </Button>
        </div>
      </div>
    </div>
  );
};
