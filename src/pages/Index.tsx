import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ScrollToTop from "@/components/landing/ScrollToTop";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorks from "@/components/landing/HowItWorks";
import CoreFeatures from "@/components/landing/CoreFeatures";
import Pricing from "@/components/landing/Pricing";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import FAQ from "@/components/landing/FAQ";

const Divider = () => (
  <div className="container mx-auto px-4 lg:px-6">
    <div className="border-t border-claw-border" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-claw-deepest">
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
        <div id="pricing"><Pricing /></div>
        <Divider />
        <div id="faq"><FAQ /></div>
        <Divider />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
