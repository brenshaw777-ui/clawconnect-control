import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Install ClawConnect",
    text: "Download the Windows app and run the installer. It sets up a dedicated Chromium profile isolated from your personal browsing.",
  },
  {
    num: "02",
    title: "Connect your OpenClaw agent",
    text: "ClawConnect links directly to your local OpenClaw instance. Your agent now has eyes and hands in a real browser.",
  },
  {
    num: "03",
    title: "Give it tasks",
    text: "Tell your agent what to do. It opens pages, fills forms, clicks buttons, reads content, and works in a persistent real browser session.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <span className="text-[11px] text-claw-green/40 tracking-widest">How it works</span>
        <h2 className="mt-3 text-[22px] font-bold tracking-tight text-claw-text md:text-[32px]">
          Three things. That’s it.
        </h2>

        <div className="mt-10 border border-claw-border bg-claw-panel panel-hover">
          <div className="border-b border-claw-border px-4 py-1.5">
            <span className="text-[10px] text-claw-muted/50">process flow</span>
          </div>
          <div className="p-4 md:p-6 space-y-1">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="flex gap-3 py-1.5"
              >
                <span className="text-claw-green text-[13px] font-bold flex-shrink-0">[{step.num}]</span>
                <span className="text-[13px] text-claw-muted leading-relaxed">{step.text}</span>
              </motion.div>
            ))}
            {steps.map((_, i) => i < steps.length - 1 && (
              <span key={`pipe-${i}`} className="hidden">|</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
