"use client";

import { useEffect } from "react";
import {
  Header,
  HeroSection,
  ValuesSection,
  FeaturesSection,
  BenefitsSection,
  StatisticsSection,
  ProductsSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
  Footer,
} from "@/components/landing";

export default function Home() {
  useEffect(() => {
    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        event.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onAnchorClick);
    return () => document.removeEventListener("click", onAnchorClick);
  }, []);

  return (
    <>
      <div className="min-h-screen w-full bg-hero">
        <Header />
        <HeroSection />
      </div>

      <ValuesSection />
      <FeaturesSection />
      <BenefitsSection />
      <StatisticsSection />
      <ProductsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
