import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AudienceSplit } from "@/components/home/sections/AudienceSplit";
import { WhatIs } from "@/components/home/sections/WhatIs";
import { BusinessDetailsSection } from "@/components/home/sections/BusinessDetailsSection";
import { HowItWorksPreview } from "@/components/home/sections/HowItWorksPreview";
import { TrustPreview } from "@/components/home/sections/TrustPreview";
import { PricingSection } from "@/components/home/sections/PricingSection";
import { ContactSection } from "@/components/home/sections/ContactSection";
import { CTASection } from "@/components/home/sections/CTASection";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: copy.site.defaultMeta.title,
  description: copy.site.defaultMeta.description,
  alternates: { canonical: "https://matchhai.com/" },
  openGraph: {
    title: copy.site.defaultMeta.ogTitle,
    description: copy.site.defaultMeta.ogDescription,
    url: "https://matchhai.com/",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceSplit />
      <WhatIs />
      <BusinessDetailsSection />
      <HowItWorksPreview />
      <TrustPreview />
      <PricingSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
