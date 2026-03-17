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

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="border border-claw-border bg-claw-panel p-4 md:p-5"
            >
              <span className="text-[12px] font-bold text-claw-green">{step.num}</span>
              <h3 className="mt-3 text-[14px] font-semibold text-claw-text">{step.title}</h3>
              <p className="mt-2 text-[12px] leading-relaxed text-claw-muted">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
