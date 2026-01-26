# MatchHai Marketing Website

## Static export build
- `npm install`
- `npm run build`
- `npm run export`

The static output is generated in `out/` for Firebase Hosting.

## Form endpoints (Firebase Functions)
Forms use a client-only API abstraction in `lib/apiClient.ts`. Configure these environment variables at build time:
- `NEXT_PUBLIC_WAITLIST_ENDPOINT`
- `NEXT_PUBLIC_ZONE_INTEREST_ENDPOINT`
- `NEXT_PUBLIC_CONTACT_ENDPOINT`

If env vars are not set, the client falls back to mock mode with a simulated success response.

To swap in Firebase Functions later:
1. Deploy functions that accept JSON POST payloads at the endpoints above.
2. Set the `NEXT_PUBLIC_*` env variables to those HTTPS URLs.
3. Rebuild and re-export the site so the static bundle embeds the endpoints.
