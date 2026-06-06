# MatchHai Website — Deep-Link Bridge Layer

Temporary implementation tracker for the public deep-link / fallback layer added
to the MatchHai marketing website. Safe to delete once the work is merged and
this doc has been folded into permanent docs.

---

## 1. Overview

The marketing site (Next.js 14 App Router, static export, Firebase Hosting) now
exposes a thin **public link-bridge layer**. Its only job is to forward visitors
who tap a shared link / push notification / WhatsApp invite into the **native
MatchHai app** via custom-scheme deep links, and to show a clean, privacy-safe
fallback if the app does not open.

Key properties:

- **No entity data is hosted or rendered.** The website never validates, fetches,
  or displays matchroom/team/profile/venue/booking/wallet detail. It only wraps a
  link.
- **No per-entity pages are generated.** One reusable page per entity *family*
  handles unlimited ids; the id is read from the URL on the client.
- **No backend / server runtime.** Everything is static-export-safe and runs in
  the browser.
- **Safe for unknown / deleted / expired ids.** The site does not check validity;
  a missing id shows a friendly fallback instead of an error.

---

## 2. Routes added

| # | Route                  | Type            | Source file |
|---|------------------------|-----------------|-------------|
| 1 | `/matchrooms/[id]/`    | Dynamic (SSG)   | `app/matchrooms/[id]/page.tsx` |
| 2 | `/teams/[id]/`         | Dynamic (SSG)   | `app/teams/[id]/page.tsx` |
| 3 | `/profile/[id]/`       | Dynamic (SSG)   | `app/profile/[id]/page.tsx` |
| 4 | `/venues/[id]/`        | Dynamic (SSG)   | `app/venues/[id]/page.tsx` |
| 5 | `/booking/[id]/`       | Dynamic (SSG)   | `app/booking/[id]/page.tsx` |
| 6 | `/wallet/`             | Static          | `app/wallet/page.tsx` |
| 7 | `/notifications/`      | Static          | `app/notifications/page.tsx` |

Shared building blocks:

- `lib/deepLinks.ts` — scheme, deep-link builders, per-entity config, URL id
  resolver, store-link placeholders.
- `components/deeplink/DeepLinkBridge.tsx` — reusable presentational + auto-open
  component (the requested `DeepLinkBridge`).
- `components/deeplink/DeepLinkRoute.tsx` — thin client wrapper that resolves the
  id from the URL and feeds `DeepLinkBridge`.

---

## 3. Website route → app deep-link mapping

| Entity        | Website route        | App deep link                  | Notes |
|---------------|----------------------|--------------------------------|-------|
| Matchroom     | `/matchrooms/[id]/`  | `matchhai://matchrooms/[id]`   | Matchroom invites, notification taps, share links |
| Team          | `/teams/[id]/`       | `matchhai://teams/[id]`        | Team invites and team pages |
| Profile       | `/profile/[id]/`     | `matchhai://profile/[id]`      | Profile notifications; no private data exposed |
| Venue / Zone  | `/venues/[id]/`      | `matchhai://venues/[id]`       | Venue / zone links |
| Booking       | `/booking/[id]/`     | `matchhai://booking/[id]`      | Payment / status links; no payment detail on web |
| Wallet        | `/wallet/`           | `matchhai://wallet`            | Logged-in app destination only |
| Notifications | `/notifications/`    | `matchhai://notifications`     | Opens app notification center |

The `[id]` value is always URL-encoded by the builders in `lib/deepLinks.ts`.

The bridge also accepts a **query-string id** (`?id=...`) on the same routes, so
links like `/matchrooms/?id=abc123` work identically to `/matchrooms/abc123/`.

---

## 4. Static-export constraints found

- `next.config.mjs` uses `output: "export"` + `trailingSlash: true`. There is **no
  server runtime**, so a dynamic route cannot render arbitrary unknown ids on
  demand.
- App-Router dynamic routes under static export **require `generateStaticParams`**.
  Whatever it returns is the *complete* set of pre-rendered HTML files; unknown ids
  are **not** rendered at build time and would otherwise 404 on hosting.
- Therefore the id cannot be trusted from build-time params. It must be read from
  the live URL **on the client**.
- A stale `.next/` cache produced a spurious `Cannot find module for page:
  /sitemap.xml` error on the first build; clearing `.next/` resolved it. (Pre-
  existing cache issue, unrelated to these routes.)

---

## 5. Dynamic route vs. query route — which was used

**Option A (dynamic paths) was implemented** — the clean `/matchrooms/abc123/`
shape — made static-export-safe with the standard placeholder + rewrite pattern:

1. Each dynamic route's `generateStaticParams()` returns a single placeholder
   `[{ id: "_" }]`, producing one real file, e.g. `out/matchrooms/_/index.html`.
2. `firebase.json` adds a rewrite per base so **any** id resolves to that file:

   ```json
   "rewrites": [
     { "source": "/matchrooms/**", "destination": "/matchrooms/_/index.html" },
     { "source": "/teams/**",      "destination": "/teams/_/index.html" },
     { "source": "/profile/**",    "destination": "/profile/_/index.html" },
     { "source": "/venues/**",     "destination": "/venues/_/index.html" },
     { "source": "/booking/**",    "destination": "/booking/_/index.html" }
   ]
   ```

   Firebase serves existing static files **before** applying rewrites, so the
   placeholder file itself and all other pages keep working; only unmatched ids
   (which have no file) fall through to the rewrite.
3. `DeepLinkRoute` reads the real id from `window.location` (`resolveEntityIdFromUrl`)
   and builds the deep link client-side.

**Option B (query `/open/...` routes) was not needed**, but the resolver already
honours `?id=` so query-style links work on the existing routes without any new
pages. If the Firebase rewrites are ever undesirable, the same pages can be linked
as `/matchrooms/?id=<id>` with zero hosting config.

---

## 6. How notifications should use these links

Push notifications and shares should link to the **website route** (not the raw
`matchhai://` scheme) so the link is universally tappable on any device, with the
app-open + download fallback handled by the bridge:

| Notification family                                   | Link to use |
|-------------------------------------------------------|-------------|
| matchroom created / invite / locked / expired / cancelled / result | `https://matchhai.com/matchrooms/<matchroomId>/` |
| team invite / team challenge / team chat              | `https://matchhai.com/teams/<teamId>/` |
| booking / payment status                              | `https://matchhai.com/booking/<bookingId>/` |
| wallet                                                | `https://matchhai.com/wallet/` |
| venue / zone                                          | `https://matchhai.com/venues/<venueId>/` |
| profile                                               | `https://matchhai.com/profile/<userId>/` |
| notification inbox                                    | `https://matchhai.com/notifications/` |

Expired/cancelled/deleted entities are fine to link — the bridge does not validate
and will simply attempt the app then show the generic fallback.

---

## 7. Manual QA checklist

Build / export:

- [x] `npm run build` succeeds.
- [x] All 7 routes appear in the build output.
- [x] Exported HTML exists: `out/{matchrooms,teams,profile,venues,booking}/_/index.html`,
      `out/wallet/index.html`, `out/notifications/index.html`.

Behavior (run `npx serve out` or deploy to a preview channel, since `matchhai://`
needs a real device with the app installed):

- [ ] `/matchrooms/abc123/` shows "Open Matchroom" + correct copy.
- [ ] Auto-open fires once (~0.9s), no redirect loop.
- [ ] "Open in MatchHai App" re-triggers `matchhai://matchrooms/abc123`.
- [ ] "Download MatchHai" navigates to the download CTA.
- [ ] `/matchrooms/` (no id) shows the friendly "link incomplete/expired" fallback,
      no app attempt, download CTA still present.
- [ ] `/teams/<id>/`, `/profile/<id>/`, `/venues/<id>/`, `/booking/<id>/` behave the
      same with their own copy and `matchhai://` scheme.
- [ ] `/wallet/` and `/notifications/` open `matchhai://wallet` /
      `matchhai://notifications` (no id required).
- [ ] Query form `/matchrooms/?id=abc123` resolves the same id.
- [ ] No private user/payment/wallet/team/booking detail rendered anywhere.
- [ ] Reduced-motion and mobile/responsive layouts look correct.

Firebase (preview channel — do **not** deploy to live):

- [ ] `/matchrooms/<random>/` served via rewrite returns the bridge page (not 404).
- [ ] Existing pages (`/`, `/how-it-works/`, legal pages) are unaffected.

---

## 8. TODOs — Play Store / App Store URLs

In `lib/deepLinks.ts`:

- [ ] `STORE_LINKS.playStore` — currently `"#"`. Replace with the real Google Play
      listing. `TODO(mobile-team)` marker in place.
- [ ] `STORE_LINKS.appStore` — currently `"#"`. Replace with the real App Store
      listing. `TODO(mobile-team)` marker in place.
- [ ] `DOWNLOAD_URL` — currently the on-site `"/#download"` anchor. Point at a
      dedicated `/download` page or a store link once finalized.

No final store URLs were invented.

---

## 9. Risks & limitations

- **Custom scheme only.** Deep links use `matchhai://`. If the app is not
  installed, the OS silently does nothing and the fallback stays — expected. For a
  smoother "open or go to store" experience the mobile team should add **Universal
  Links (iOS)** and **App Links (Android)** (see §10).
- **Firebase rewrites are required** for clean dynamic paths. They were added to
  `firebase.json`. If removed, use the `?id=` query form instead.
- **Placeholder `_` pages are publicly reachable** (`/matchrooms/_/`, etc.). They
  render the harmless "link incomplete" fallback. They are `noindex`.
- **Auto-open UX varies by browser.** Some mobile browsers prompt or block scheme
  navigation; the manual button is always available as a fallback.
- **`noindex` on all bridge pages** keeps them out of search and out of the
  sitemap (sitemap was intentionally left untouched — no dynamic entity URLs added).
- **No analytics events** were wired for app-open attempts; add later if the
  notification-audit work needs conversion metrics.

---

## 10. Follow-up for the mobile app team

To make these links open reliably (and to enable `https://` links to open the app
directly without the custom scheme), the app team should confirm/implement:

1. **Custom scheme** `matchhai://` is registered and routes:
   - `matchhai://matchrooms/:id`
   - `matchhai://teams/:id`
   - `matchhai://profile/:id`
   - `matchhai://venues/:id`
   - `matchhai://booking/:id`
   - `matchhai://wallet`
   - `matchhai://notifications`
2. **Android App Links** — host `/.well-known/assetlinks.json` on the website
   domain and add `autoVerify` intent filters for the paths above, so
   `https://matchhai.com/matchrooms/<id>/` opens the app directly.
3. **iOS Universal Links** — host `/.well-known/apple-app-site-association` and add
   the Associated Domains entitlement for the same paths.
   - *Note:* both well-known files would need to be added to `public/` and served
     by Firebase; not done here as it requires the app's bundle id / SHA-256
     fingerprints.
4. **Store URLs** — provide final Play Store + App Store links for §8 TODOs.
5. **Path contract** — confirm the app expects these exact path shapes; if the app
   uses different segments, update `lib/deepLinks.ts` builders (single source of
   truth) and the Firebase rewrites.
