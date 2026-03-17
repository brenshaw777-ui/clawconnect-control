import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative border border-claw-border bg-claw-panel overflow-hidden panel-hover"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-64 bg-claw-green/[0.04] blur-[80px]" />

          <div className="relative px-6 py-12 text-center md:px-10 md:py-16">
            <h2 className="text-[22px] font-bold tracking-tight text-claw-text md:text-[36px]">
              Give your agent a real browser.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[13px] leading-relaxed text-claw-muted">
              Download ClawConnect and connect it to your OpenClaw agent in minutes.
            </p>

            <div className="mt-3">
              <p className="text-[12px] text-claw-muted/60">
                Local install. No subscription. Windows desktop app.
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="flex h-[40px] items-center border border-claw-green bg-claw-green/10 px-6 text-[13px] font-bold text-claw-green transition-all hover:bg-claw-green/20 glow-green-sm"
              >
                Download for Windows — $29 one-time
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
