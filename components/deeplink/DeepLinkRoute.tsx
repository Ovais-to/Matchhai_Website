"use client";

import { useEffect, useState } from "react";
import { DeepLinkBridge } from "@/components/deeplink/DeepLinkBridge";
import {
  bridgeConfig,
  resolveEntityIdFromUrl,
  type EntityType
} from "@/lib/deepLinks";

interface DeepLinkRouteProps {
  entityType: EntityType;
}

/**
 * Thin client wrapper for a single bridge route.
 *
 * Because the site is statically exported, every dynamic base (e.g.
 * /matchrooms/**) is served by one placeholder HTML file via a Firebase
 * rewrite. The real id therefore lives only in the browser URL and is resolved
 * here on the client — we never trust build-time route params.
 */
export const DeepLinkRoute = ({ entityType }: DeepLinkRouteProps) => {
  const config = bridgeConfig[entityType];
  const [id, setId] = useState<string | undefined>(undefined);
  const [resolved, setResolved] = useState(!config.requiresId);

  useEffect(() => {
    if (!config.requiresId) {
      return;
    }
    setId(resolveEntityIdFromUrl(config.basePath));
    setResolved(true);
  }, [config.requiresId, config.basePath]);

  const unavailable = config.requiresId && resolved && !id;
  const appDeepLink = config.requiresId
    ? config.buildDeepLink(id)
    : config.buildDeepLink();

  return (
    <DeepLinkBridge
      entityType={entityType}
      title={config.title}
      description={config.description}
      appDeepLink={appDeepLink}
      entityId={id}
      unavailable={unavailable}
    />
  );
};
