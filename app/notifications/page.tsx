import type { Metadata } from "next";
import { DeepLinkRoute } from "@/components/deeplink/DeepLinkRoute";
import { bridgeConfig } from "@/lib/deepLinks";

const config = bridgeConfig.notifications;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  robots: { index: false, follow: false }
};

export default function NotificationsBridgePage() {
  return <DeepLinkRoute entityType="notifications" />;
}
