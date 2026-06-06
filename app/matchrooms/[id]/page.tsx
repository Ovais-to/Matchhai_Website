import type { Metadata } from "next";
import { DeepLinkRoute } from "@/components/deeplink/DeepLinkRoute";
import { bridgeConfig } from "@/lib/deepLinks";

const config = bridgeConfig.matchroom;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  // Functional link-bridge page — keep it out of search indexes.
  robots: { index: false, follow: false }
};

// Static export needs at least one param. A single placeholder is built; all
// real ids are served from this page via a Firebase rewrite (/matchrooms/**)
// and resolved client-side from the URL.
export function generateStaticParams() {
  return [{ id: "_" }];
}

export default function MatchroomBridgePage() {
  return <DeepLinkRoute entityType="matchroom" />;
}
