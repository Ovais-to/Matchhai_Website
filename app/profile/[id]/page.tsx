import type { Metadata } from "next";
import { DeepLinkRoute } from "@/components/deeplink/DeepLinkRoute";
import { bridgeConfig } from "@/lib/deepLinks";

const config = bridgeConfig.profile;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  robots: { index: false, follow: false }
};

export function generateStaticParams() {
  return [{ id: "_" }];
}

export default function ProfileBridgePage() {
  return <DeepLinkRoute entityType="profile" />;
}
