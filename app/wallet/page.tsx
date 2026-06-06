import type { Metadata } from "next";
import { DeepLinkRoute } from "@/components/deeplink/DeepLinkRoute";
import { bridgeConfig } from "@/lib/deepLinks";

const config = bridgeConfig.wallet;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  robots: { index: false, follow: false }
};

export default function WalletBridgePage() {
  return <DeepLinkRoute entityType="wallet" />;
}
