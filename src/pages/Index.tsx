import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ScrollToTop from "@/components/landing/ScrollToTop";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorks from "@/components/landing/HowItWorks";
import CoreFeatures from "@/components/landing/CoreFeatures";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import FAQ from "@/components/landing/FAQ";

const Divider = () => (
  <div className="container mx-auto px-4 lg:px-6">
    <div className="h-px bg-claw-border" />
  </div>
);

const Pricing = () => {
  const items = [
    "Full desktop app",
    "Dedicated Chromium AI profile",
    "OpenClaw agent integration",
    "Local-first with no cloud required",
    "Updates for current major version",
    "No subscription. Ever.",
  ];

  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="text-[11px] uppercase tracking-[0.18em] text-claw-muted">Pricing</span>
        <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-claw-text md:text-[40px]">
          One price. Yours forever.
        </h2>

        <div className="mx-auto mt-10 max-w-xl border border-claw-border bg-claw-panel p-6 md:p-8">
          <p className="text-[13px] text-claw-muted">ClawConnect for Windows</p>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-[44px] font-semibold leading-none text-claw-text">$49</span>
            <span className="pb-1 text-[14px] text-claw-muted">one-time</span>
          </div>

          <div className="mt-6 space-y-3 border-t border-claw-border pt-6">
            {items.map((item) => (
              <div key={item} className="text-[14px] text-claw-text">
                ✓ {item}
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-8 inline-flex h-11 w-full items-center justify-center border border-claw-border bg-claw-text px-5 text-[13px] font-semibold text-claw-deepest transition-opacity hover:opacity-90"
          >
            Buy Now. Download Instantly
          </a>

          <p className="mt-4 text-center text-[12px] text-claw-muted">
            Works with your existing OpenClaw setup. Windows 10 and 11 required.
          </p>
        </div>
      </div>
    </section>
  );
};

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
        <Pricing />
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
