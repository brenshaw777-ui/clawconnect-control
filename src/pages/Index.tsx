import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorks from "@/components/landing/HowItWorks";
import CoreFeatures from "@/components/landing/CoreFeatures";
import ApiQuickstart from "@/components/landing/ApiQuickstart";
import OpenSourceTrust from "@/components/landing/OpenSourceTrust";
import OpenClawIntegration from "@/components/landing/OpenClawIntegration";
import BrowserStore from "@/components/landing/BrowserStore";
import Roadmap from "@/components/landing/Roadmap";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Divider = () => (
  <div className="container mx-auto px-4 lg:px-6">
    <div className="text-claw-muted/20 text-[11px] tracking-widest text-center select-none py-2">
      ────────────────────────────────────────
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-claw-deepest scanline-overlay">
      <Header />
      <main>
        <Hero />
        <Divider />
        <ProblemSection />
        <Divider />
        <HowItWorks />
        <Divider />
        <CoreFeatures />
        <Divider />
        <ApiQuickstart />
        <Divider />
        <OpenSourceTrust />
        <Divider />
        <OpenClawIntegration />
        <Divider />
        <BrowserStore />
        <Divider />
        <Roadmap />
        <Divider />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
