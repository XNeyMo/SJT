'use client';

import Header from "@components/Header";
import SupportSection from "@components/sections/Support";
import HowToUseSection from "@components/sections/HowToUse";
import HeroSection from "@components/sections/Hero";
import FeatureSection from "@components/sections/Features";

export default function Landing() {
  return (
    <main>
      <Header />

      <HeroSection />

      <FeatureSection />

      <HowToUseSection />

      <SupportSection />
    </main>
  );
}
