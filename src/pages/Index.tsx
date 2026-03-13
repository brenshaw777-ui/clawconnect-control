import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ScrollToTop from "@/components/landing/ScrollToTop";
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
        <div id="problem"><ProblemSection /></div>
        <Divider />
        <div id="how-it-works"><HowItWorks /></div>
        <Divider />
        <div id="features"><CoreFeatures /></div>
        <Divider />
        <div id="api"><ApiQuickstart /></div>
        <Divider />
        <div id="open-source"><OpenSourceTrust /></div>
        <Divider />
        <div id="openclaw"><OpenClawIntegration /></div>
        <Divider />
        <div id="install"><BrowserStore /></div>
        <Divider />
        <div id="roadmap"><Roadmap /></div>
        <Divider />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
