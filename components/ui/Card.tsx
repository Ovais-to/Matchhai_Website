"use client";

import { useRef } from "react";
import { useHover3D } from "@/lib/useHover3D";

type CardProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, className, ...props }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useHover3D(ref, { glow: true, tilt: true, magnetic: false });

  return (
    <div
      ref={ref}
      className={`group surface-card shadow-[0_0_32px_rgba(0,0,0,0.28)] ${className ?? ""}`}
      data-card
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 120% at 0% 0%, rgba(107, 183, 255, 0.08), transparent 60%), radial-gradient(120% 120% at 100% 0%, rgba(214, 178, 111, 0.08), transparent 60%)"
        }}
      />
      {children}
    </div>
  );
};
