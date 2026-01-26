"use client";
import { FeatureStatus } from "@/lib/featureStatus";
type BadgeProps = {
  status: FeatureStatus;
  label: string;
  className?: string;
};

export const Badge = ({ status, label, className }: BadgeProps) => {
  const dot =
    status === "LIVE"
      ? "bg-status-success shadow-[0_0_8px_rgba(34,197,94,0.45)]"
      : status === "BETA"
        ? "bg-brand-secondary shadow-[0_0_8px_rgba(214,178,111,0.35)]"
        : status === "PLANNED"
          ? "bg-text-muted"
          : "bg-text-muted";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-bg-secondary/60 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-text-secondary backdrop-blur-sm normal-case ${className ?? ""}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
};
