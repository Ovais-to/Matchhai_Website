"use client";

import { useEffect, useRef, useState } from "react";
import { NeonBackdrop } from "@/components/NeonBackdrop";
import { Button } from "@/components/ui/Button";
import { DOWNLOAD_URL, type EntityType } from "@/lib/deepLinks";

export interface DeepLinkBridgeProps {
  /** Entity family this bridge represents (used for labels / analytics-friendly markup). */
  entityType: EntityType;
  /** On-page heading. */
  title: string;
  /** Privacy-safe fallback copy. */
  description: string;
  /** Fully-built app deep link. Empty string when the id is missing/invalid. */
  appDeepLink: string;
  /** Optional id (already resolved from the URL). Only used for harmless display hints. */
  entityId?: string;
  /** Primary CTA label. */
  primaryButtonLabel?: string;
  /** Secondary CTA label. */
  downloadLabel?: string;
  /**
   * True when the route requires an id but none was found in the URL
   * (unknown / deleted / expired / malformed link). Disables auto-open and
   * shows a friendly fallback message instead.
   */
  unavailable?: boolean;
}

// Delay before the one-shot auto-open attempt so the fallback paints first and
// the visitor is never thrown into a redirect loop.
const AUTO_OPEN_DELAY_MS = 900;

export const DeepLinkBridge = ({
  entityType,
  title,
  description,
  appDeepLink,
  entityId,
  primaryButtonLabel = "Open in MatchHai App",
  downloadLabel = "Download MatchHai",
  unavailable = false
}: DeepLinkBridgeProps) => {
  // Guards against repeated/looping launches: we auto-attempt at most once.
  const autoAttempted = useRef(false);
  const [attempted, setAttempted] = useState(false);

  const canOpen = !unavailable && appDeepLink.length > 0;

  const openApp = () => {
    if (!canOpen) {
      return;
    }
    setAttempted(true);
    // Static-browser-safe: a plain location assignment triggers the OS deep-link
    // handler. If no app is registered, the page simply stays visible (fallback).
    window.location.href = appDeepLink;
  };

  useEffect(() => {
    if (!canOpen || autoAttempted.current) {
      return;
    }
    autoAttempted.current = true;
    const timer = window.setTimeout(openApp, AUTO_OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canOpen, appDeepLink]);

  return (
    <section className="section relative overflow-hidden" data-entity={entityType}>
      <NeonBackdrop />
      <div className="container">
        <div className="mx-auto max-w-xl">
          <div className="surface-card px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="section-kicker">MatchHai</p>
            <h1 className="page-title mt-3">{title}</h1>

            {unavailable ? (
              <p className="section-lede mx-auto max-w-md">
                This link looks incomplete or may have expired. Open the MatchHai
                app to continue, or download it to get started.
              </p>
            ) : (
              <p className="section-lede mx-auto max-w-md">{description}</p>
            )}

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {canOpen ? (
                <Button onClick={openApp} ariaLabel={primaryButtonLabel}>
                  {primaryButtonLabel}
                </Button>
              ) : null}
              <Button
                href={DOWNLOAD_URL}
                variant="secondary"
                ariaLabel={downloadLabel}
              >
                {downloadLabel}
              </Button>
            </div>

            {canOpen && attempted ? (
              <p className="mt-6 text-xs text-text-muted">
                App didn&apos;t open? Make sure MatchHai is installed, then tap
                &ldquo;{primaryButtonLabel}&rdquo; again.
              </p>
            ) : null}

            {/* Intentionally no private entity detail is rendered — the website
                never exposes user, payment, wallet, team, or booking data. */}
          </div>
        </div>
      </div>
    </section>
  );
};
