import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-white">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <LogoCloud />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <StickyCTA />
      <ScrollAnimation />
    </div>
  );
}
