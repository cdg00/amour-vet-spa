import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import NewsletterWhatsApp from "@/components/NewsletterWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <Testimonials />
      <NewsletterWhatsApp />
    </>
  );
}
