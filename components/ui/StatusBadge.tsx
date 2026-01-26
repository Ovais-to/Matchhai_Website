"use client";

import { FeatureStatus } from "@/lib/featureStatus";
import { copy } from "@/lib/copy";
import { Badge } from "@/components/ui/Badge";

type StatusBadgeProps = {
  status: FeatureStatus;
  className?: string;
};

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  return (
    <Badge status={status} label={copy.statusLabels[status]} className={className} />
  );
};
