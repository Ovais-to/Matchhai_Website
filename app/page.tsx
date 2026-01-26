import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AudienceSplit } from "@/components/home/sections/AudienceSplit";
import { WhatIs } from "@/components/home/sections/WhatIs";
import { HowItWorksPreview } from "@/components/home/sections/HowItWorksPreview";
import { GamesPreview } from "@/components/home/sections/GamesPreview";
import { TrustPreview } from "@/components/home/sections/TrustPreview";
import { ContactSection } from "@/components/home/sections/ContactSection";
import { CTASection } from "@/components/home/sections/CTASection";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: copy.site.defaultMeta.title,
  description: copy.site.defaultMeta.description
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceSplit />
      <WhatIs />
      <HowItWorksPreview />
      <GamesPreview />
      <TrustPreview />
      <ContactSection />
      <CTASection />
    </>
  );
}
