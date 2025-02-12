import React from "react";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/home/ValueProposition";
import { ProductGrid } from "@/components/ProductGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { SpecialOffers } from "@/components/home/SpecialOffers";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { CallToAction } from "@/components/CallToAction";
import { SEO } from "@/components/SEO";

export const metadata = {
  title: "Urban Pet - Premium Pet Supplies & Accessories",
  description: "Discover premium pet accessories, food, and supplies for your beloved furry friends.",
  keywords: "pet supplies, pet accessories, dog supplies, cat supplies, pet food, pet care"
};
export default function HomePage() {
  return <>
    <SEO title="Urban Pet - Premium Pet Supplies & Accessories" description="Discover premium pet accessories, food, and supplies for your beloved furry friends. Quality products, fast shipping, and exceptional customer service." keywords="pet supplies, pet accessories, dog supplies, cat supplies, pet food, pet care" />
      <Hero />
      <ValueProposition />
      <ProductGrid />
      <Testimonials />
      <SpecialOffers />
      <TrustIndicators />
      <CallToAction />
    </>;
}