import type { Metadata } from "next";
import { DeepLinkRoute } from "@/components/deeplink/DeepLinkRoute";
import { bridgeConfig } from "@/lib/deepLinks";

const config = bridgeConfig.booking;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  robots: { index: false, follow: false }
};

export function generateStaticParams() {
  return [{ id: "_" }];
}

export default function BookingBridgePage() {
  return <DeepLinkRoute entityType="booking" />;
}
