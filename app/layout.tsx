import "@/app/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ErrorBoundary } from "@/components/layout/ErrorBoundary";
import { AnalyticsClient } from "@/components/layout/AnalyticsClient";
import { copy } from "@/lib/copy";
import { assets } from "@/lib/assets";
import { fontBody, fontHeading } from "@/app/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://matchhai.com"),
  title: copy.site.defaultMeta.title,
  description: copy.site.defaultMeta.description,
  openGraph: {
    title: copy.site.defaultMeta.ogTitle,
    description: copy.site.defaultMeta.ogDescription,
    images: [{ url: assets.ogImage }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const env = process.env.NEXT_PUBLIC_APP_ENV ?? process.env.NODE_ENV;
  const showBanner = env && env !== "production";

  return (
    <html lang="en" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body>
        <div className="page-background" aria-hidden="true" />
        <div className="page-content">
          <a href="#content" className="skip-link">
            {copy.nav.skipToContent}
          </a>
          {showBanner ? (
            <div className="bg-brand-secondary px-4 py-2 text-center text-xs text-white">
              {copy.banners.staging.label}
            </div>
          ) : null}
          <ErrorBoundary>
            <AnalyticsClient />
            <Header />
            <main id="content">{children}</main>
            <Footer />
          </ErrorBoundary>
        </div>
      </body>
    </html>
  );
}
