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

const Index = () => {
  return (
    <div className="min-h-screen bg-claw-deepest bg-noise">
      <Header />
      <main>
        <Hero />
        <div className="border-t border-claw-border/20" />
        <ProblemSection />
        <div className="border-t border-claw-border/20" />
        <HowItWorks />
        <div className="border-t border-claw-border/20" />
        <CoreFeatures />
        <div className="border-t border-claw-border/20" />
        <ApiQuickstart />
        <div className="border-t border-claw-border/20" />
        <OpenSourceTrust />
        <div className="border-t border-claw-border/20" />
        <OpenClawIntegration />
        <div className="border-t border-claw-border/20" />
        <BrowserStore />
        <div className="border-t border-claw-border/20" />
        <Roadmap />
        <div className="border-t border-claw-border/20" />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
