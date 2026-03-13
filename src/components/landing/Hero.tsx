import { motion } from "framer-motion";
import { Shield, Server, Lock, Activity } from "lucide-react";
import HeroVisual from "./HeroVisual";

const badges = [
  { icon: Shield, label: "Open Source" },
  { icon: Server, label: "Local Host" },
  { icon: Lock, label: "Token Protected" },
  { icon: Activity, label: "Diagnosable by design" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background radial */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-claw-blue/[0.04] blur-[120px]" />

      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-xl"
          >
            <span className="mb-4 inline-block font-mono text-[12px] tracking-widest text-claw-blue/70">
              /hero
            </span>
            <h1 className="font-heading text-[40px] font-bold leading-[0.97] tracking-tight text-claw-text md:text-[64px] lg:text-[70px]">
              Browser automation that behaves in production
            </h1>
            <p className="mt-5 font-sans text-lg leading-relaxed text-claw-muted md:text-lg">
              ClawConnect gives your agents stable control of browser tabs with explicit acknowledgments, diagnostics, and local-first security.
            </p>
            <p className="mt-3 font-mono text-[13px] text-claw-muted/70">
              Open source, self-hosted bridge for commands, tabs, and workflows.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="flex h-[48px] items-center rounded-[13px] bg-claw-blue px-6 font-sans text-[14px] font-bold text-claw-deepest transition-all hover:-translate-y-px glow-blue"
              >
                View GitHub
              </a>
              <a
                href="#"
                className="flex h-[48px] items-center rounded-[13px] border border-claw-border bg-claw-panel px-6 font-sans text-[14px] font-medium text-claw-muted transition-all hover:-translate-y-px hover:border-claw-muted/40 hover:text-claw-text"
              >
                Install Extension
              </a>
            </div>

            {/* Proof badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {badges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-md border border-claw-border/60 bg-claw-panel/60 px-2.5 py-1 font-mono text-[11px] text-claw-muted/80"
                >
                  <Icon size={12} className="text-claw-blue/60" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
