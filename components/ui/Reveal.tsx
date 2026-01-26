"use client";

import { useRef } from "react";
import { useGsapReveal } from "@/lib/hooks/useGsapReveal";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export const Reveal = ({ children, className }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref, { stagger: 0.14 });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
