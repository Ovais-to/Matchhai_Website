// Centralized deep-link generation for the MatchHai public link-bridge layer.
//
// The marketing website is a STATIC EXPORT (output: "export") and acts only as a
// public wrapper / fallback for app deep links. It never validates, fetches, or
// renders private entity data — it simply forwards visitors into the native app
// and shows a privacy-safe fallback if the app cannot open.

export const APP_SCHEME = "matchhai";

export type EntityType =
  | "matchroom"
  | "team"
  | "profile"
  | "venue"
  | "booking"
  | "wallet"
  | "notifications";

// --- Deep-link builders -----------------------------------------------------

export function buildMatchroomDeepLink(id: string) {
  return `${APP_SCHEME}://matchrooms/${encodeURIComponent(id)}`;
}

export function buildTeamDeepLink(id: string) {
  return `${APP_SCHEME}://teams/${encodeURIComponent(id)}`;
}

export function buildProfileDeepLink(id: string) {
  return `${APP_SCHEME}://profile/${encodeURIComponent(id)}`;
}

export function buildVenueDeepLink(id: string) {
  return `${APP_SCHEME}://venues/${encodeURIComponent(id)}`;
}

export function buildBookingDeepLink(id: string) {
  return `${APP_SCHEME}://booking/${encodeURIComponent(id)}`;
}

export function buildWalletDeepLink() {
  return `${APP_SCHEME}://wallet`;
}

export function buildNotificationsDeepLink() {
  return `${APP_SCHEME}://notifications`;
}

// --- Store / download links -------------------------------------------------
//
// TODO(mobile-team): Replace these placeholders with the real published store
// listings once available. Do NOT invent final URLs — keep "#" until confirmed.
export const STORE_LINKS = {
  // TODO(mobile-team): Google Play Store listing URL.
  playStore: "#",
  // TODO(mobile-team): Apple App Store listing URL.
  appStore: "#"
} as const;

// Generic download destination used by the secondary CTA. Points at the site's
// download anchor for now; swap to a dedicated /download page or store link when
// the real store URLs land.
export const DOWNLOAD_URL = "/#download";

// --- Per-entity bridge configuration ----------------------------------------
//
// One source of truth so new routes stay trivial to add. Copy here is generic
// and privacy-safe: no IDs, no private user/payment/wallet/team/booking detail.

export interface BridgeConfig {
  entityType: EntityType;
  /** Path segment the dynamic route lives under, e.g. "matchrooms". */
  basePath: string;
  /** Whether a URL id is required to build a meaningful deep link. */
  requiresId: boolean;
  /** On-page heading. */
  title: string;
  /** Fallback body copy shown while/if the app does not open. */
  description: string;
  /** Generic, ID-free SEO title. */
  metaTitle: string;
  /** Generic, ID-free SEO description. */
  metaDescription: string;
  /** Build the app deep link. `id` is read client-side from the URL. */
  buildDeepLink: (id?: string) => string;
}

export const bridgeConfig: Record<EntityType, BridgeConfig> = {
  matchroom: {
    entityType: "matchroom",
    basePath: "matchrooms",
    requiresId: true,
    title: "Open Matchroom",
    description: "Open this matchroom in the MatchHai app.",
    metaTitle: "Open MatchHai Matchroom",
    metaDescription: "Open this matchroom in the MatchHai app.",
    buildDeepLink: (id?: string) => (id ? buildMatchroomDeepLink(id) : "")
  },
  team: {
    entityType: "team",
    basePath: "teams",
    requiresId: true,
    title: "Open Team",
    description: "Open this team in the MatchHai app.",
    metaTitle: "Open MatchHai Team",
    metaDescription: "Open this team in the MatchHai app.",
    buildDeepLink: (id?: string) => (id ? buildTeamDeepLink(id) : "")
  },
  profile: {
    entityType: "profile",
    basePath: "profile",
    requiresId: true,
    title: "Open Profile",
    description: "Open this profile in the MatchHai app.",
    metaTitle: "Open MatchHai Profile",
    metaDescription: "Open this profile in the MatchHai app.",
    buildDeepLink: (id?: string) => (id ? buildProfileDeepLink(id) : "")
  },
  venue: {
    entityType: "venue",
    basePath: "venues",
    requiresId: true,
    title: "Open Venue",
    description: "Open this venue in the MatchHai app.",
    metaTitle: "Open MatchHai Venue",
    metaDescription: "Open this venue in the MatchHai app.",
    buildDeepLink: (id?: string) => (id ? buildVenueDeepLink(id) : "")
  },
  booking: {
    entityType: "booking",
    basePath: "booking",
    requiresId: true,
    title: "Open Booking",
    description: "Open your booking status in the MatchHai app.",
    metaTitle: "Open MatchHai Booking",
    metaDescription: "Open your booking status in the MatchHai app.",
    buildDeepLink: (id?: string) => (id ? buildBookingDeepLink(id) : "")
  },
  wallet: {
    entityType: "wallet",
    basePath: "wallet",
    requiresId: false,
    title: "Open Wallet",
    description: "Open your wallet in the MatchHai app.",
    metaTitle: "Open MatchHai Wallet",
    metaDescription: "Open your wallet in the MatchHai app.",
    buildDeepLink: () => buildWalletDeepLink()
  },
  notifications: {
    entityType: "notifications",
    basePath: "notifications",
    requiresId: false,
    title: "Open Notifications",
    description: "Open your notifications in the MatchHai app.",
    metaTitle: "Open MatchHai Notifications",
    metaDescription: "Open your notifications in the MatchHai app.",
    buildDeepLink: () => buildNotificationsDeepLink()
  }
};

/**
 * Resolve an entity id from the current browser URL.
 *
 * Supports both supported URL shapes so the bridge is robust regardless of how
 * a link was generated:
 *   - Dynamic path:  /matchrooms/abc123/   -> "abc123"
 *   - Query string:  /matchrooms/?id=abc1  -> "abc1"  (also works for /open/...)
 *
 * Static export serves a single placeholder HTML for each dynamic base (via a
 * Firebase rewrite), so the real id is always read here on the client — never
 * trusted from build-time params.
 */
export function resolveEntityIdFromUrl(basePath: string): string | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }
  const url = new URL(window.location.href);

  const queryId = url.searchParams.get("id");
  if (queryId) {
    return queryId;
  }

  const segments = url.pathname.split("/").filter(Boolean);
  const baseIndex = segments.indexOf(basePath);
  if (baseIndex >= 0 && segments[baseIndex + 1]) {
    return decodeURIComponent(segments[baseIndex + 1]);
  }
  return undefined;
}
