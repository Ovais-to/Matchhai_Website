"use client";

import Link from "next/link";
import { useRef } from "react";
import { useHover3D } from "@/lib/useHover3D";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
};

export const Button = ({
  href,
  variant = "primary",
  children,
  className,
  onClick,
  type = "button",
  ariaLabel
}: ButtonProps) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useHover3D((href ? anchorRef : buttonRef) as React.RefObject<HTMLElement>, {
    glow: true,
    tilt: variant !== "ghost",
    magnetic: variant === "primary"
  });

  const base =
    "focus-ring inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-300 will-change-transform transform-gpu cursor-pointer sm:text-base";
  const styles =
    variant === "primary"
      ? "bg-brand-primary text-bg-primary shadow-[0_10px_30px_rgba(107,183,255,0.18)] hover:-translate-y-0.5 hover:bg-brand-primaryHover hover:shadow-[0_14px_36px_rgba(107,183,255,0.25)]"
      : variant === "secondary"
        ? "border border-border bg-bg-secondary text-text-primary backdrop-blur-md hover:-translate-y-0.5 hover:border-text-muted/40 hover:bg-bg-tertiary"
        : "rounded-lg px-4 py-2 text-text-secondary hover:bg-bg-tertiary hover:text-text-primary";

  if (href) {
    return (
      <Link
        href={href}
        ref={anchorRef}
        className={`${base} ${styles} ${className ?? ""}`}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef}
      className={`${base} ${styles} ${className ?? ""}`}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
